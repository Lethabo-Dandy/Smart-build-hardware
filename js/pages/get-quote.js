/* ==========================================
   GET A QUOTE
========================================== */


/* ==========================================
   QUOTE FORM
========================================== */
const quoteForm =
    document.getElementById("quoteForm");

/* ==========================================
   DELIVERY FIELDS
========================================== */
const quoteDelivery =
    document.getElementById(
        "quoteDelivery"
    );

const quoteLocation =
    document.getElementById(
        "quoteLocation"
    );

/* ==========================================
   HANDLE DELIVERY OPTION
========================================== */

function handleQuoteDeliveryChange()
{
    if(!quoteDelivery || !quoteLocation)
    {
        return;
    }

    if(
        quoteDelivery.value === "yes"
    )
    {
        quoteLocation.disabled = false;

        quoteLocation.required = true;

        quoteLocation.placeholder =
            "Enter your delivery location";
    }
    else
    {
        quoteLocation.disabled = true;

        quoteLocation.required = false;

        quoteLocation.value = "";

        quoteLocation.placeholder =
            "Not required for collection";
    }
}

/* ==========================================
   DELIVERY OPTION EVENT
========================================== */

if(quoteDelivery)
{
    quoteDelivery.addEventListener(
        "change",
        handleQuoteDeliveryChange
    );

    handleQuoteDeliveryChange();
}

/* ==========================================
   SUBMIT QUOTE
========================================== */
if(quoteForm)
{
    quoteForm.addEventListener(
        "submit",
        function(event)
        {
            event.preventDefault();


            /* ==========================================
               GET CUSTOMER DETAILS
            ========================================== */

            const name =
                document
                    .getElementById("quoteName")
                    .value
                    .trim();

            const company =
                document
                    .getElementById("quoteCompany")
                    .value
                    .trim();

            const phone =
                document
                    .getElementById("quotePhone")
                    .value
                    .trim();

            const email =
                document
                    .getElementById("quoteEmail")
                    .value
                    .trim();

            const project =
                document
                    .getElementById("quoteProject")
                    .value;

            const delivery =
                document
                    .getElementById("quoteDelivery")
                    .value;

            const location =
                document
                    .getElementById("quoteLocation")
                    .value
                    .trim();

            const materials =
                document
                    .getElementById("quoteMaterials")
                    .value
                    .trim();

            const details =
                document
                    .getElementById("quoteDetails")
                    .value
                    .trim();

            /* ==========================================
               QUOTE ID
            ========================================== */
            const quoteId = "QT-" + Date.now();

            /* ==========================================
               CREATE QUOTE REQUEST
            ========================================== */
            const quoteRequest =
            {
                id: quoteId,

                customer:
                {
                    name: name,
                    company: company,
                    phone: phone,
                    email: email
                },

                project:
                {
                    type: project,
                    deliveryRequired:
                        delivery,
                    location: location
                },

                materials:
                    materials,

                additionalDetails:
                    details,

                status:
                    "Pending",

                createdAt:
                    new Date().toISOString()
            };


            /* ==========================================
               GET EXISTING QUOTES
            ========================================== */

            const quotes =
                JSON.parse(
                    localStorage.getItem(
                        "quoteRequests"
                    )
                ) || [];


            /* ==========================================
               SAVE QUOTE
            ========================================== */

            quotes.push(
                quoteRequest
            );

            localStorage.setItem(
                "quoteRequests",
                JSON.stringify(quotes)
            );


            /* ==========================================
               SUCCESS MESSAGE
            ========================================== */

            if(
                typeof showModal ===
                "function"
            )
            {
                showModal(
                    "Quote Request Sent",

                    `Your quote request ${quoteId} has been submitted successfully. We will contact you regarding your quotation.`,

                    {
                        type: "success",
                        confirmText: "Okay"
                    }
                );
            }
            else
            {
                alert(
                    `Your quote request ${quoteId} has been submitted successfully.`
                );
            }


            /* ==========================================
               RESET FORM
            ========================================== */

            quoteForm.reset();
        }
    );
}
