const watchButton =
    document.getElementById("watchButton");

watchButton.addEventListener("click", function() {

    alert("Opening the featured original...");

});


// SEARCH

const searchInput =
    document.getElementById("searchInput");

const cards =
    document.querySelectorAll(".card");

searchInput.addEventListener("input", function() {

    const value =
        searchInput.value.toLowerCase();

    cards.forEach(card => {

        const title =
            card.querySelector("h3")
                .textContent
                .toLowerCase();

        card.style.display =
            title.includes(value)
                ? "block"
                : "none";

    });

});
