// Get the search bar element
const searchInput = document.getElementById('search-bar');

// Add event listener to search bar
searchInput.addEventListener('input', searchTable);

// Function to search the table
function searchTable() {
  // Get the input value and convert to lowercase
  const searchText = searchInput.value.toLowerCase().replace(/\s/g, ''); // remove any spaces in the search text
  // Get the table rows
  const rows = document.querySelectorAll('#leaderboard tbody tr');

  // Loop through each row and hide or show based on search text
  rows.forEach(row => {
    const email = row.children[2].textContent.toLowerCase().replace(/\s/g, ''); // remove any spaces in the email
    if (email === searchText) { // use === to check for exact match
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });

  // Show or hide the leaderboard based on search results
  const leaderboard = document.getElementById('leaderboard');
  if (searchText.length > 0) {
    let hasMatchingRows = false;
    rows.forEach(row => {
      if (row.style.display !== 'none') {
        hasMatchingRows = true;
      }
    });
    if (hasMatchingRows) {
      leaderboard.style.display = 'table';
    } else {
      leaderboard.style.display = 'none';
    }
  } else {
    leaderboard.style.display = 'none';
  }
}