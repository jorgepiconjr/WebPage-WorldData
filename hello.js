/*
    EventListener für die Schaltfläche in der Navigationsleiste. Ermöglicht das
    Ermöglicht das Ein- und Ausklappen der Navigationsleiste beim Drücken der Taste.
*/
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar2");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

/*
    Funktion, die die alphabetische Sortierung der Country spalten in der Tabele
    „aufsteigend“ und „absteigend“ ermöglicht.
 */
function sortTable(direction) {
    const table = document.getElementById("data-table");
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.rows);

    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[1].innerText.toLowerCase();
        const cellB = rowB.cells[1].innerText.toLowerCase();

        return direction ? (cellA > cellB ? -1 : 1) : (cellA < cellB ? -1 : 1);
    });

    rows.forEach(row => tbody.appendChild(row));
}

/*
    Funktion, mit der man eine Spalte aus der Tabelle löschen kann, indem Sie auf
    einen Filter klicken und diesen Filter durschstreichen.
*/
function toggleColumn(columnIndex, element, elementClass) {
    const rows = document.querySelectorAll("#data-table tr");
    var elements = document.querySelectorAll('.' + elementClass);

    elements.forEach(function (e){
        if (e.style.textDecorationLine === 'line-through'){
            e.style.textDecorationLine = '';
        }else {
            e.style.textDecorationLine = 'line-through';
        }
    });

    rows.forEach(row => {
        const cell = row.cells[columnIndex];
        if (cell) {
            cell.classList.toggle("hide-column");
        }
    });
}