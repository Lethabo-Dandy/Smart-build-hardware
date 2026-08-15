/* ==========================================
   DELIVERY MAP
========================================== */

let deliveryMap = null;
let deliveryMarker = null;


/* ==========================================
   DEFAULT LOCATION
========================================== */

const DEFAULT_LAT = -26.2041;
const DEFAULT_LNG = 28.0473;


/* ==========================================
   INITIALIZE MAP
========================================== */

function initializeDeliveryMap()
{
    const mapElement =
        document.getElementById("deliveryMap");

    if(!mapElement) return;


    deliveryMap =
        L.map("deliveryMap")
            .setView(
                [DEFAULT_LAT, DEFAULT_LNG],
                10
            );


    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,

            attribution:
                '&copy; OpenStreetMap contributors'
        }
    ).addTo(deliveryMap);


    deliveryMap.on(
        "click",
        function(event)
        {
            setDeliveryLocation(
                event.latlng.lat,
                event.latlng.lng
            );
        }
    );
}


/* ==========================================
   SET DELIVERY LOCATION
========================================== */

function setDeliveryLocation(
    latitude,
    longitude
)
{
    if(!deliveryMap) return;


    if(deliveryMarker)
    {
        deliveryMap.removeLayer(
            deliveryMarker
        );
    }


    deliveryMarker =
        L.marker(
            [latitude, longitude],
            {
                draggable: true
            }
        )
        .addTo(deliveryMap);


    deliveryMarker.on(
        "dragend",
        function(event)
        {
            const position =
                event.target.getLatLng();

            processDeliveryLocation(
                position.lat,
                position.lng
            );
        }
    );


    processDeliveryLocation(
        latitude,
        longitude
    );


    deliveryMap.setView(
        [latitude, longitude],
        16
    );
}


/* ==========================================
   PROCESS LOCATION
========================================== */

async function processDeliveryLocation(
    latitude,
    longitude
)
{
    /*
        IMPORTANT:

        Coordinates are saved FIRST.

        Reverse geocoding is optional.
        If it fails, checkout can continue.
    */

    saveDeliveryCoordinates(
        latitude,
        longitude
    );


    showLocationLoading();


    try
    {
        const response =
            await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&addressdetails=1`
            );


        if(!response.ok)
        {
            throw new Error(
                "Address lookup failed."
            );
        }


        const data =
            await response.json();


        const address =
            data.address || {};


        populateAddressFields(
            address
        );


        showSelectedLocation(
            latitude,
            longitude,
            data.display_name || ""
        );
    }
    catch(error)
    {
        console.warn(
            "Address lookup unavailable:",
            error
        );


        /*
            The coordinates remain valid.

            We do NOT remove them.
            We do NOT block checkout.
        */

        showSelectedLocation(
            latitude,
            longitude,
            ""
        );
    }
}


/* ==========================================
   SAVE COORDINATES
========================================== */

function saveDeliveryCoordinates(
    latitude,
    longitude
)
{
    const location =
    {
        latitude:
            Number(latitude),

        longitude:
            Number(longitude),

        confirmed: false
    };


    localStorage.setItem(
        "deliveryLocation",
        JSON.stringify(location)
    );
}


/* ==========================================
   POPULATE ADDRESS FIELDS
========================================== */

function populateAddressFields(
    address
)
{
    const streetInput =
        document.getElementById(
            "address"
        );


    const cityInput =
        document.getElementById(
            "city"
        );


    const postalInput =
        document.getElementById(
            "postalCode"
        );


    const street =
        [
            address.house_number,
            address.road
        ]
        .filter(Boolean)
        .join(" ");


    const city =
        address.city ||
        address.town ||
        address.village ||
        address.municipality ||
        address.suburb ||
        "";


    const postalCode =
        address.postcode || "";


    /* ==========================================
       STREET ADDRESS
    ========================================== */

    if(
        streetInput &&
        street
    )
    {
        streetInput.value =
            street;
    }


    /* ==========================================
       CITY / TOWN
    ========================================== */

    if(
        cityInput &&
        city
    )
    {
        cityInput.value =
            city;
    }


    /* ==========================================
       POSTAL CODE
    ========================================== */

    if(
        postalInput &&
        postalCode
    )
    {
        postalInput.value =
            postalCode;
    }
}

/* ==========================================
   LOCATION LOADING
========================================== */

function showLocationLoading()
{
    const display =
        document.getElementById(
            "selectedLocation"
        );


    if(!display) return;


    display.innerHTML = `
        <i class="bi bi-hourglass-split"></i>

        <span>
            Checking the selected location...
        </span>
    `;
}


/* ==========================================
   SHOW SELECTED LOCATION
========================================== */

function showSelectedLocation(
    latitude,
    longitude,
    address
)
{
    const display =
        document.getElementById(
            "selectedLocation"
        );


    if(!display) return;


    const coordinates =
        `${Number(latitude).toFixed(6)},
         ${Number(longitude).toFixed(6)}`;


    if(address)
    {
        display.innerHTML = `
            <i class="bi bi-geo-alt-fill"></i>

            <span>
                <strong>Selected location:</strong>
                ${address}
                <br>
                <small>
                    Coordinates:
                    ${coordinates}
                </small>
            </span>
        `;
    }
    else
    {
        display.innerHTML = `
            <i class="bi bi-geo-alt-fill"></i>

            <span>
                <strong>Location selected.</strong>
                No street address was found.
                Your delivery will use the map coordinates.
                <br>
                <small>
                    Coordinates:
                    ${coordinates}
                </small>
            </span>
        `;
    }
}


/* ==========================================
   GET SAVED LOCATION
========================================== */

function getDeliveryLocation()
{
    const saved =
        localStorage.getItem(
            "deliveryLocation"
        );


    if(!saved)
    {
        return null;
    }


    try
    {
        return JSON.parse(saved);
    }
    catch(error)
    {
        return null;
    }
}


/* ==========================================
   CONFIRM LOCATION
========================================== */

function confirmDeliveryLocation()
{
    const location =
        getDeliveryLocation();


    if(!location)
    {
        return false;
    }


    location.confirmed = true;


    localStorage.setItem(
        "deliveryLocation",
        JSON.stringify(location)
    );


    return true;
}


/* ==========================================
   USE CURRENT LOCATION
========================================== */

function useCurrentLocation()
{
    if(!navigator.geolocation)
    {
        showModal(
            "Location Not Available",
            "Your browser does not support location services.",
            {
                type: "warning",
                confirmText: "Okay"
            }
        );

        return;
    }


    navigator.geolocation.getCurrentPosition(
        function(position)
        {
            setDeliveryLocation(
                position.coords.latitude,
                position.coords.longitude
            );
        },

        function()
        {
            showModal(
                "Location Permission Required",
                "Please allow location access in your browser, then try again.",
                {
                    type: "warning",
                    confirmText: "Okay"
                }
            );
        }
    );
}


/* ==========================================
   LOCATION BUTTON
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function()
    {
        initializeDeliveryMap();


        const locationBtn =
            document.getElementById(
                "currentLocationBtn"
            );


        if(locationBtn)
        {
            locationBtn.addEventListener(
                "click",
                useCurrentLocation
            );
        }
    }
);

function isDeliveryLocationConfirmed()
{
    const location =
        getDeliveryLocation();

    const checkbox =
        document.getElementById(
            "confirmLocation"
        );

    if(!location)
    {
        return false;
    }

    if(!checkbox || !checkbox.checked)
    {
        return false;
    }

    return true;
}

document.addEventListener(
    "DOMContentLoaded",
    function()
    {
        const checkbox =
            document.getElementById(
                "confirmLocation"
            );

        if(!checkbox) return;

        checkbox.addEventListener(
            "change",
            function()
            {
                const confirmation =
                    document.getElementById(
                        "locationConfirmation"
                    );

                if(!confirmation) return;

                if(this.checked)
                {
                    confirmation.classList.add(
                        "confirmed"
                    );
                }
                else
                {
                    confirmation.classList.remove(
                        "confirmed"
                    );
                }
            }
        );
    }
);

/* ==========================================
   CHECK DELIVERY LOCATION
========================================== */

function isDeliveryLocationConfirmed()
{
    const location =
        getDeliveryLocation();

    const checkbox =
        document.getElementById(
            "confirmLocation"
        );

    if(!location)
    {
        return false;
    }

    if(!checkbox || !checkbox.checked)
    {
        return false;
    }

    return true;
}