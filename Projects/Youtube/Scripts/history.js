const clearButton =
  document.getElementById("clearHistory");

const historyList =
  document.getElementById("historyList");

// CLEAR HISTORY

clearButton.addEventListener("click", function () {

  const confirmDelete =
    confirm(
      "Are you sure you want to clear your watch history?"
    );

  if (confirmDelete) {

    historyList.innerHTML = `
            <div class="empty">
                <h2>No watch history</h2>
                <p>
                    Videos you watch will appear here.
                </p>
            </div>
        `;

  }

});
