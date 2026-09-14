/* ==========================================
   QUOTE MANAGEMENT
========================================== */


/* ==========================================
   QUOTE ELEMENTS
========================================== */

const quoteContainer =
    document.getElementById(
        "quoteManagementContainer"
    );

const noQuotes =
    document.getElementById(
        "noQuotes"
    );

const quoteSearch =
    document.getElementById(
        "quoteSearch"
    );

const quoteStatusFilter =
    document.getElementById(
        "quoteStatusFilter"
    );

const totalQuotes =
    document.getElementById(
        "totalQuotes"
    );

const pendingQuotes =
    document.getElementById(
        "pendingQuotes"
    );


/* ==========================================
   GET QUOTES
========================================== */

function getQuoteRequests()
{
    return JSON.parse(
        localStorage.getItem(
            "quoteRequests"
        )
    ) || [];
}


/* ==========================================
   SAVE QUOTES
========================================== */

function saveQuoteRequests(
    quotes
)
{
    localStorage.setItem(
        "quoteRequests",
        JSON.stringify(quotes)
    );
}


/* ==========================================
   FORMAT DATE
========================================== */

function formatQuoteDate(
    date
)
{
    if(!date)
    {
        return "—";
    }

    return new Date(date)
        .toLocaleDateString(
            "en-ZA",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );
}


/* ==========================================
   UPDATE STATS
========================================== */

function updateQuoteStats()
{
    const quotes =
        getQuoteRequests();

    const pending =
        quotes.filter(
            quote =>
                quote.status === "Pending"
        ).length;

    if(totalQuotes)
    {
        totalQuotes.textContent =
            quotes.length;
    }

    if(pendingQuotes)
    {
        pendingQuotes.textContent =
            pending;
    }
}


/* ==========================================
   DISPLAY QUOTES
========================================== */

function displayQuoteRequests(
    quoteList
)
{
    if(!quoteContainer)
    {
        return;
    }


    if(quoteList.length === 0)
    {
        quoteContainer.innerHTML = "";

        if(noQuotes)
        {
            noQuotes.style.display =
                "block";
        }

        return;
    }


    if(noQuotes)
    {
        noQuotes.style.display =
            "none";
    }


    quoteContainer.innerHTML =
        quoteList
            .map(
                quote =>
                {
                    return `
                        <article
                            class="quote-management-card"
                            data-id="${quote.id}">

                            <div class="quote-card-header">

                                <div>

                                    <span class="quote-id">
                                        ${quote.id}
                                    </span>

                                    <h2>
                                        ${quote.customer.name}
                                    </h2>

                                    ${
                                        quote.customer.company
                                            ? `
                                                <p>
                                                    ${quote.customer.company}
                                                </p>
                                              `
                                            : ""
                                    }

                                </div>


                                <span
                                    class="quote-status
                                    status-${quote.status.toLowerCase()}">

                                    ${quote.status}

                                </span>

                            </div>


                            <div class="quote-card-details">

                                <div>

                                    <small>
                                        Contact
                                    </small>

                                    <p>
                                        ${quote.customer.phone}
                                    </p>

                                    <p>
                                        ${quote.customer.email}
                                    </p>

                                </div>


                                <div>

                                    <small>
                                        Project
                                    </small>

                                    <p>
                                        ${quote.project.type}
                                    </p>

                                    <p>
                                        ${quote.project.location}
                                    </p>

                                </div>


                                <div>

                                    <small>
                                        Delivery
                                    </small>

                                    <p>
                                        ${
                                            quote.project
                                                .deliveryRequired === "yes"
                                                ? "Required"
                                                : "Not required"
                                        }
                                    </p>

                                </div>


                                <div>

                                    <small>
                                        Requested
                                    </small>

                                    <p>
                                        ${formatQuoteDate(
                                            quote.createdAt
                                        )}
                                    </p>

                                </div>

                            </div>


                            <div class="quote-materials">

                                <h3>
                                    Materials Required
                                </h3>

                                <p>
                                    ${quote.materials}
                                </p>

                            </div>


                            ${
                                quote.additionalDetails
                                    ? `
                                        <div class="quote-additional">

                                            <h3>
                                                Additional Details
                                            </h3>

                                            <p>
                                                ${quote.additionalDetails}
                                            </p>

                                        </div>
                                      `
                                    : ""
                            }


                            <div class="quote-card-actions">

                                <select
                                    class="quote-status-select"
                                    data-id="${quote.id}">

                                    <option
                                        value="Pending"
                                        ${
                                            quote.status === "Pending"
                                                ? "selected"
                                                : ""
                                        }>
                                        Pending
                                    </option>

                                    <option
                                        value="Reviewing"
                                        ${
                                            quote.status === "Reviewing"
                                                ? "selected"
                                                : ""
                                        }>
                                        Reviewing
                                    </option>

                                    <option
                                        value="Quoted"
                                        ${
                                            quote.status === "Quoted"
                                                ? "selected"
                                                : ""
                                        }>
                                        Quoted
                                    </option>

                                    <option
                                        value="Accepted"
                                        ${
                                            quote.status === "Accepted"
                                                ? "selected"
                                                : ""
                                        }>
                                        Accepted
                                    </option>

                                    <option
                                        value="Declined"
                                        ${
                                            quote.status === "Declined"
                                                ? "selected"
                                                : ""
                                        }>
                                        Declined
                                    </option>

                                </select>


                                <button
                                    type="button"
                                    class="delete-quote-btn"
                                    data-id="${quote.id}">

                                    <i class="bi bi-trash"></i>

                                    Delete

                                </button>

                            </div>

                        </article>
                    `;
                }
            )
            .join("");
}


/* ==========================================
   FILTER QUOTES
========================================== */

function filterQuotes()
{
    const quotes =
        getQuoteRequests();

    const searchTerm =
        quoteSearch
            ? quoteSearch.value
                .trim()
                .toLowerCase()
            : "";

    const status =
        quoteStatusFilter
            ? quoteStatusFilter.value
            : "all";


    const filtered =
        quotes.filter(
            quote =>
            {
                const searchable =
                    `
                        ${quote.id}
                        ${quote.customer.name}
                        ${quote.customer.company || ""}
                        ${quote.customer.phone}
                        ${quote.customer.email}
                        ${quote.project.location}
                        ${quote.materials}
                    `
                    .toLowerCase();


                const matchesSearch =
                    searchable.includes(
                        searchTerm
                    );


                const matchesStatus =
                    status === "all" ||
                    quote.status === status;


                return (
                    matchesSearch &&
                    matchesStatus
                );
            }
        );


    displayQuoteRequests(
        filtered
    );
}


/* ==========================================
   UPDATE QUOTE STATUS
========================================== */

function updateQuoteStatus(
    quoteId,
    newStatus
)
{
    const quotes =
        getQuoteRequests();

    const quote =
        quotes.find(
            quote =>
                quote.id === quoteId
        );

    if(!quote)
    {
        return;
    }

    quote.status =
        newStatus;

    saveQuoteRequests(
        quotes
    );

    updateQuoteStats();

    filterQuotes();
}


/* ==========================================
   DELETE QUOTE
========================================== */

function deleteQuote(
    quoteId
)
{
    const quotes =
        getQuoteRequests();

    const updatedQuotes =
        quotes.filter(
            quote =>
                quote.id !== quoteId
        );

    saveQuoteRequests(
        updatedQuotes
    );

    updateQuoteStats();

    filterQuotes();
}


/* ==========================================
   QUOTE EVENTS
========================================== */

if(quoteContainer)
{
    quoteContainer.addEventListener(
        "change",
        function(event)
        {
            if(
                event.target.classList.contains(
                    "quote-status-select"
                )
            )
            {
                updateQuoteStatus(
                    event.target.dataset.id,
                    event.target.value
                );
            }
        }
    );


    quoteContainer.addEventListener(
        "click",
        function(event)
        {
            const deleteButton =
                event.target.closest(
                    ".delete-quote-btn"
                );

            if(!deleteButton)
            {
                return;
            }


            const quoteId =
                deleteButton.dataset.id;


            if(
                typeof showModal ===
                "function"
            )
            {
                showModal(
                    "Delete Quote",
                    "Are you sure you want to delete this quote request?",
                    {
                        type: "warning",
                        confirmText: "Delete",
                        cancelText: "Cancel",
                        onConfirm: function()
                        {
                            deleteQuote(
                                quoteId
                            );
                        }
                    }
                );
            }
            else
            {
                if(
                    confirm(
                        "Are you sure you want to delete this quote request?"
                    )
                )
                {
                    deleteQuote(
                        quoteId
                    );
                }
            }
        }
    );
}


/* ==========================================
   SEARCH EVENTS
========================================== */

if(quoteSearch)
{
    quoteSearch.addEventListener(
        "input",
        filterQuotes
    );
}


if(quoteStatusFilter)
{
    quoteStatusFilter.addEventListener(
        "change",
        filterQuotes
    );
}


/* ==========================================
   INITIALIZE
========================================== */

updateQuoteStats();

filterQuotes();