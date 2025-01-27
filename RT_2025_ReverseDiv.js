//1.moznost bez appendchild
function reverseDiv() {
    const div = document.getElementById('myDiv');
    const content = div.innerHTML; // Získa aktuálny obsah divu
    const reversedContent = content.split('</p>').reverse().join('</p>'); // Reverzujeme poradie
    
    div.innerHTML = reversedContent; // Nastavíme nový obsah divu
}

<div>
    <p> 1.riadok   </p>
    <p> 2.riadok   </p>
    <p> 3.riadok   </p>
    <p> 4.riadok   </p>
    ...
</div>

//2.moznost s appendchild

function reverseDiv() {
    const div = document.getElementById('myDiv');
    const children = Array.from(div.children); // Získa všetky deti divu
    
    // Reverzujeme poradie detí a vložíme ich späť do divu
    div.innerHTML = '';
    children.reverse().forEach(child => div.appendChild(child));
}