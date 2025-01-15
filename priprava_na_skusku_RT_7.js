const button = document.getElementById("remove");

button.onclick = () => {
  // Vyber všetky elementy s triedou "row"
  const rows = document.querySelectorAll(".row");

  rows.forEach(row => {
    // Ak obsah elementu zahŕňa text "Row"
    if (row.innerHTML.includes("Row")) {
      // Odstráň element zo svojho rodiča
      row.parentNode.removeChild(row);
    }
  });
};
