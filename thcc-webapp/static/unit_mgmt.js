// This function populates a table given a table name, lower bound number, and upper bound number, in a horizontal fashion.
function populateTableFirstRow(tableName, lowerBound, upperBound) {
    var table = document.getElementById(tableName);
    var row = table.insertRow();
    var cell;
    if (tableName == "first-row") {
        cell = row.insertCell();
        cell.innerText = "DOOR";
        cell.classList.add("standard-cell");
    }

    // Check if the bounds are in increasing or decreasing order and populate the table based on that.
    if (lowerBound > upperBound) {
        for (var i = lowerBound; i >= upperBound; i--) {
            cell = row.insertCell();
            cell.innerText = i;
            cell.id = `${tableName}-single-unit-${i}`;
            cell.classList.add("standard-cell");
        }
    }
    else if (lowerBound < upperBound) {
        for (var i = lowerBound; i <= upperBound; i++) {
            cell = row.insertCell();
            cell.innerText = i;
            cell.id = `${tableName}-single-unit-${i}`;
            cell.classList.add("standard-cell");
        }

        // if the lowerBound and upperBound are equal (like 0,0), just populate the table with nothing.
    } else {
        for (var i = 0; i < 18; i++) {
            cell = row.insertCell();
            cell.innerText = "";
            cell.id = `${tableName}-single-unit-${i}`;
            cell.classList.add("standard-cell");
        }
    }

    // Add DOOR again
    if (tableName == "first-row") {
        cell = row.insertCell();
        cell.innerText = "DOOR";
        cell.classList.add("standard-cell");
    }
}

// This function is similar to the one above but populates the table in a vertical fashion.
function populateVerticalTables(tableName, lowerBound, upperBound) {
    var table = document.getElementById(tableName);
    var row;
    if (lowerBound > upperBound) {
        for (var i = lowerBound; i >= upperBound; i--) {
            row = table.insertRow();
            cell = row.insertCell();
            cell.innerText = i;
            cell.id = `${tableName}-single-unit-${i}`;
            cell.classList.add("standard-cell");
        }
    } else if (lowerBound < upperBound) {
        // Numbers lower to upper bound
        for (var i = lowerBound; i <= upperBound; i++) {
            row = table.insertRow();
            cell = row.insertCell();
            cell.innerText = i;
            cell.id = `${tableName}-single-unit-${i}`;
            cell.classList.add("standard-cell");
        }

        // No content if lowerBound and upperBound are equal.
    } else {
        for (var i = 0; i < 12; i++) {
            row = table.insertRow();
            cell = row.insertCell();
            cell.innerText = "";
            cell.id = `${tableName}-single-unit-${i}`;
            cell.classList.add("standard-cell");
        }
    }
}

// call the functios to populate the table when the page loads
populateTableFirstRow("first-row", 88, 104);
populateTableFirstRow("last-row", 0, 0);

// populate the FIRST row of columns
populateVerticalTables("one-one", 776, 765);
populateVerticalTables("one-two-a", 681, 692);
populateVerticalTables("one-two-b", 608, 597);
populateVerticalTables("one-three-a", 513, 524);
populateVerticalTables("one-three-b", 440, 429);
populateVerticalTables("one-four-a", 345, 356);
populateVerticalTables("one-four-b", 272, 261);
populateVerticalTables("one-five", 177, 188);

// populate the SECOND row of columns.
populateVerticalTables("two-one", 1448, 1437);
populateVerticalTables("two-two-a", 1353, 1364);
populateVerticalTables("two-two-b", 1280, 1269);
populateVerticalTables("two-three-a", 1185, 1196);
populateVerticalTables("two-three-b", 1112, 1101);
populateVerticalTables("two-four-a", 1017, 1028);
populateVerticalTables("two-four-b", 944, 933);
populateVerticalTables("two-five", 849, 860);


// populate the THIRD row of columns.
populateVerticalTables("three-one", 2120, 2109);
populateVerticalTables("three-one-a", 2025, 2036);
populateVerticalTables("three-two-b", 1952, 1941);
populateVerticalTables("three-three-a", 1857, 1868);
populateVerticalTables("three-three-b", 1784, 1773);
populateVerticalTables("three-four-a", 1689, 1700);
populateVerticalTables("three-four-b", 1616, 1605);
populateVerticalTables("three-five", 1521, 1532);


// populate the FOURTH row of columns.
populateVerticalTables("four-one", 2781, 2792);
populateVerticalTables("four-one-a", 2697, 2708);
populateVerticalTables("four-two-b", 2624, 2613);
populateVerticalTables("four-three-a", 2529, 2540);
populateVerticalTables("four-three-b", 2456, 2445);
populateVerticalTables("four-four-a", 2361, 2372);
populateVerticalTables("four-four-b", 2288, 2277);
populateVerticalTables("four-five", 2193, 2204);

// ================ POP UP CODE ================

// units-container is a class found on all tables.
var tables = document.querySelectorAll(".units-container");

// select the pop up content on the pop up window.
var popupContent = document.getElementById("popup-content");

// function to handle a click on any table. this function will be used on all table clicks.
function handleTableClick(event) {
    // remove any existing content in the popup.
    popupContent.innerHTML = "";

    // get the table id for appropriate action.
    var tableId = event.currentTarget.id;

    var table = document.createElement("table");

    // all tables sent to the pop up window will have the popup-units-container class in its class list
    // for separation of tables in the home page and on the pop up.
    table.classList.add("popup-units-container");

    // if the table is "first-row", need special table, perform appropriate action.
    if (tableId == "first-row") {
        //  17 columns and 7 rows
        for (var i = 0; i < 7; i++) {
            var row = table.insertRow();
            for (var j = 0; j < 17; j++) {
                var cell = row.insertCell();

                // combine columns 8, 9, 10 with rows 3, 4, 5 forming one cell.
                // conditional statement: check we are between rows 2 and 4 based on the index 'i'
                // and check if we are between columns 7 and 9 based on the index 'j'
                if ((i >= 2 && i <= 4) && (j >= 7 && j <= 9)) {
                    cell.colSpan = 3; // set colspan to 3 for the combined cells.
                    // the center row for the combined altar cell is 4, hence, row 3 is "above" the "altar" text
                    // and row 4 is "below" the "altar" text.
                    // differentiate for styling purposes.
                    if (i == 2 && j == 7) {
                        cell.classList.add("altar-cell-above");
                    }
                    if (i == 3 && j == 7) {
                        cell.textContent = "Altar";
                        cell.classList.add("altar-cell");
                    }
                    if (i == 4 && j == 7) {
                        cell.classList.add("altar-cell-below");
                    }
                    j += 2; // skip the next two cells as they are combined with the current one.
                } else {
                    cell.textContent = " 100 "; // empty cell
                }
                // unique cell id for each cell for differentiation purposes.
                cell.id = `${tableId}-popup-unit${i}${j}`;

                // add popup-standard-cell class for styling purposes.
                cell.classList.add("popup-standard-cell");
            }
        }

        // perform same logic as above but with different conditions if the tableId is "last-row".
    } else if (tableId == "last-row") {
        // 26 columns and 7 rows
        for (var i = 0; i < 7; i++) {
            var row = table.insertRow();
            for (var j = 0; j < 26; j++) {
                var cell = row.insertCell();

                // combine columns 3, 4, 5 with rows 3, 4, 5 forming one cell
                // combine columns 9, 10, 11 with the same rows above to form one cell.
                // combine columns 16, 17, 18 with the same rows above to form one cell.
                // combine columns 21, 22, 24 with the same rows above to form one cell.
                // apply the same logic earlier.
                if ((i >= 2 && i <= 4) && (j >= 2 && j <= 4)) {
                    cell.colSpan = 3;
                    if (i == 2 && j == 2) {
                        cell.classList.add("altar-cell-above");
                    }
                    if (i == 3 && j == 2) {
                        cell.textContent = "Altar";
                        cell.classList.add("altar-cell");
                    }
                    if (i == 4 && j == 2) {
                        cell.classList.add("altar-cell-below");
                    }
                    j += 2;
                } else if ((i >= 2 && i <= 4) && (j >= 8 && j <= 10)) {
                    cell.colSpan = 3;
                    if (i == 2 && j == 8) {
                        cell.classList.add("altar-cell-above");
                    }
                    if (i == 3 && j == 8) {
                        cell.textContent = "Altar";
                        cell.classList.add("altar-cell");
                    }
                    if (i == 4 && j == 8) {
                        cell.classList.add("altar-cell-below");
                    }
                    j += 2;
                } else if ((i >= 2 && i <= 4) && (j >= 15 && j <= 17)) {
                    cell.colSpan = 3;
                    if (i == 2 && j == 15) {
                        cell.classList.add("altar-cell-above");
                    }
                    if (i == 3 && j == 15) {
                        cell.textContent = "Altar";
                        cell.classList.add("altar-cell");
                    }
                    if (i == 4 && j == 15) {
                        cell.classList.add("altar-cell-below");
                    }
                    j += 2;
                } else if ((i >= 2 && i <= 4) && (j >= 21 && j <= 22)) {
                    cell.colSpan = 3;
                    if (i == 2 && j == 21) {
                        cell.classList.add("altar-cell-above");
                    }
                    if (i == 3 && j == 21) {
                        cell.textContent = "Altar";
                        cell.classList.add("altar-cell");
                    }
                    if (i == 4 && j == 21) {
                        cell.classList.add("altar-cell-below");
                    }
                    j += 2;
                }
                else {
                    cell.textContent = "2900"; // empty cell

                }
                cell.id = `${tableId}-popup-unit${i}${j}`;
                cell.classList.add("popup-standard-cell");
            }
        }

        // if its not the first-row or last-row just make a 7 by 12 table.
    } else {
        for (var i = 0; i < 7; i++) {
            var row = table.insertRow();
            for (var j = 0; j < 12; j++) {
                var cell = row.insertCell();
                cell.id = `${tableId}-popup-unit${i}${j}`;

                cell.classList.add("popup-standard-cell");
                cell.textContent = "999";
            }
        }
    }
    // append the table to the popup content.
    popupContent.appendChild(table);

    // enable the overlay to make background darker, styling purposes.
    overlay.classList.toggle("hidden");

    // toggle popup hidden class.
    popup.classList.toggle("hidden");

    // prevent default behavior of the event (following a link)
    event.preventDefault();
}

// close pop up and remove the overlay when clicked on the X button.
function handleCloseClick(event) {
    var popup = document.getElementById("popup");
    var overlay = document.getElementById("overlay");
    // Hide both the popup and the overlay
    popup.classList.add("hidden");
    overlay.classList.add("hidden");
}

// add event listener to click on the X button
var popUpCloseButton = document.getElementById("popup-header-close-button");
popUpCloseButton.addEventListener("click", handleCloseClick);

// add event listener for all tables
tables.forEach(function (table) {
    table.addEventListener("click", handleTableClick);
});

// ================ /POP UP CODE ================

