document.addEventListener("DOMContentLoaded", () => {
    const coverInput = document.getElementById("cover-photo");
    const coverPreview = document.getElementById("cover-preview");

    const additionalInputs = document.querySelectorAll(".additional-image");
    const additionalPreviews = document.getElementById("additional-previews");

    const cancelBtn = document.getElementById("cancel-btn");
    const submitBtn = document.getElementById("submit-btn");

    // Preview for cover photo (big)
    coverInput.addEventListener("change", () => {
        coverPreview.innerHTML = ""; // clear previous

        const file = coverInput.files[0];
        if (!file) return;

        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        img.alt = "Cover Photo Preview";

        coverPreview.appendChild(img);
    });

    // Preview for additional images (small)
    function updateAdditionalPreviews() {
        additionalPreviews.innerHTML = "";
        additionalInputs.forEach(inputEl => {
            if (inputEl.files[0]) {
                const img = document.createElement("img");
                img.src = URL.createObjectURL(inputEl.files[0]);
                img.alt = "Additional Image Preview";
                additionalPreviews.appendChild(img);
            }
        });
    }
    additionalInputs.forEach(inputEl => {
        inputEl.addEventListener("change", updateAdditionalPreviews);
    });

    // Cancel button clears all image inputs and previews
    cancelBtn.addEventListener("click", () => {
        coverInput.value = "";
        coverPreview.innerHTML = "";

        additionalInputs.forEach(inputEl => (inputEl.value = ""));
        additionalPreviews.innerHTML = "";
    });

    // Submit button validates cover photo and alerts (demo)
    submitBtn.addEventListener("click", () => {
        if (!coverInput.files[0]) {
            alert("Please upload a cover photo.");
            coverInput.focus();
            return;
        }
        // Add other form validations here...

        alert("Event submitted successfully! (Demo alert)");
        // Actual submission code goes here
    });
});
