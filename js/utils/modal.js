/* ==========================================
   SMART BUILD MODAL
========================================== */

const customModal =
    document.getElementById("customModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalMessage =
    document.getElementById("modalMessage");

const modalIcon =
    document.getElementById("modalIcon");

const modalConfirm =
    document.getElementById("modalConfirm");

const modalCancel =
    document.getElementById("modalCancel");

const modalClose =
    document.getElementById("modalClose");


let modalCallback = null;


/* ==========================================
   OPEN MODAL
========================================== */

function showModal(
    title,
    message,
    options = {}
)
{
    if(!customModal) return;


    const type =
        options.type || "warning";


    const confirmText =
        options.confirmText || "Confirm";


    const cancelText =
        options.cancelText || "Cancel";


    modalTitle.textContent =
        title;

    modalMessage.textContent =
        message;

    modalConfirm.textContent =
        confirmText;

    modalCancel.textContent =
        cancelText;


    /*
        MODAL TYPE
    */

    customModal
        .querySelector(".custom-modal")
        .classList
        .toggle(
            "danger",
            type === "danger"
        );


    /*
        ICON
    */

    if(type === "danger")
    {
        modalIcon.innerHTML =
            '<i class="bi bi-trash3"></i>';
    }
    else if(type === "success")
    {
        modalIcon.innerHTML =
            '<i class="bi bi-check-circle"></i>';
    }
    else
    {
        modalIcon.innerHTML =
            '<i class="bi bi-exclamation-circle"></i>';
    }


    /*
        SHOW
    */

    customModal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";


    /*
        CALLBACK
    */

    modalCallback =
        options.onConfirm || null;
}


/* ==========================================
   CLOSE MODAL
========================================== */

function closeModal()
{
    if(!customModal) return;


    customModal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";


    modalCallback = null;
}


/* ==========================================
   CONFIRM
========================================== */

modalConfirm?.addEventListener(
    "click",
    () =>
    {
        if(modalCallback)
        {
            modalCallback();
        }

        closeModal();
    }
);


/* ==========================================
   CANCEL
========================================== */

modalCancel?.addEventListener(
    "click",
    closeModal
);


/* ==========================================
   CLOSE BUTTON
========================================== */

modalClose?.addEventListener(
    "click",
    closeModal
);


/* ==========================================
   CLICK OUTSIDE
========================================== */

customModal?.addEventListener(
    "click",
    event =>
    {
        if(event.target === customModal)
        {
            closeModal();
        }
    }
);


/* ==========================================
   ESC KEY
========================================== */

document.addEventListener(
    "keydown",
    event =>
    {
        if(
            event.key === "Escape" &&
            customModal?.classList.contains("active")
        )
        {
            closeModal();
        }
    }
);