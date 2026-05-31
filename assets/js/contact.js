document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent standard page navigation

            const formData = new FormData(form);

            // POST to the Code Institute formdump service
            fetch("https://formdump.codeinstitute.net/", {
                method: "POST",
                body: formData,
            })
            .then(response => {
                // Redirect user to our custom thank you page
                window.location.href = "thank-you.html";
            })
            .catch(error => {
                console.error("Error submitting form:", error);
                // Fallback redirect to keep the user experience seamless
                window.location.href = "thank-you.html";
            });
        });
    }
});
