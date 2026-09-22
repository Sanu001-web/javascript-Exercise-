


/* =========================
   CATEGORY FILTER
========================= */

const categories = document.querySelectorAll(".category");
const videoCards = document.querySelectorAll(".video-card");

categories.forEach(category => {

    category.addEventListener("click", () => {

        // Remove active class
        categories.forEach(item => {
            item.classList.remove("active");
        });

        // Add active class
        category.classList.add("active");

        const selectedCategory = category.dataset.category;

        videoCards.forEach(card => {

            const cardCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === cardCategory
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});



/* =========================
   FILTER BUTTON
========================= */

const filterBtn = document.getElementById("filterBtn");

filterBtn.addEventListener("click", () => {

    const currentCategory =
        document.querySelector(".category.active");

    if (currentCategory) {
        alert(
            "Currently selected category: " +
            currentCategory.textContent
        );
    }

});


/* =========================
   VIDEO CARD CLICK
========================= */

videoCards.forEach(card => {

    card.addEventListener("click", event => {

        // Don't trigger when clicking more button
        if (
            event.target.closest(".more-btn")
        ) {
            return;
        }

        const title =
            card.querySelector("h3").textContent;

        alert("Opening video: " + title);

    });

});


/* =========================
   MORE BUTTON
========================= */

const moreButtons =
    document.querySelectorAll(".more-btn");

moreButtons.forEach(button => {

    button.addEventListener("click", event => {

        event.stopPropagation();

        alert(
            "More options:\n" +
            "• Save to Watch later\n" +
            "• Add to playlist\n" +
            "• Share"
        );

    });

});
