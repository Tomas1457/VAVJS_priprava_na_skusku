<div class="container">
    <div class="row"><div class="col">Row 1</div></div>
    <div class="row"><div class="col">Row 2</div></div>
    <div class="row"><div class="col"><span>Row 3</span></div></div>
    <div class="row"><div class="col">Your 1</div></div>
    <div class="row"><div class="col"><span>Boat 1</span></div></div>
<button id="remove">Remove</button>
</div>

const button = document.getElementById("remove");
const rows = document.querySelectorAll(".row");

button.addEventListener("click",() => {
    rows.forEach((row) => {
        if (row.innerHTML.includes("Row")){
            row.remove(); //alebo row.parentNode.removeChild(row);
        }
    })
})

