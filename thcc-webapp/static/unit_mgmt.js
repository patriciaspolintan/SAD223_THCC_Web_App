<<<<<<< HEAD
let database = [];
// Will be on called on every table click to ensure the latest data is loaded.
function fetchTable() {
    fetch('/api/unit_mgmt')
        .then(response => response.json())
        .then(data => {
            database = data;
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
    return database;
}


// This function populates a table given a table name, lower bound number, and upper bound number, in a horizontal fashion.
function populateHorizontalTable(tableName, lowerBound, upperBound) {
    var table = document.getElementById(tableName);
    var row = table.insertRow();
    var cell;
    if (tableName == "Q1-B1-U-1-104") {
=======
// This function populates a table given a table name, lower bound number, and upper bound number, in a horizontal fashion.
function populateTableFirstRow(tableName, lowerBound, upperBound) {
    var table = document.getElementById(tableName);
    var row = table.insertRow();
    var cell;
    if (tableName == "first-row") {
>>>>>>> f53cd625ba9de8a9f4da0ef2493d8414de0abd9e
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
<<<<<<< HEAD
    if (tableName == "Q1-B1-U-1-104") {
=======
    if (tableName == "first-row") {
>>>>>>> f53cd625ba9de8a9f4da0ef2493d8414de0abd9e
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

<<<<<<< HEAD
// Populate 1st row
populateHorizontalTable("Q1-B1-U-1-104", 88, 104);

// Populate last row
populateHorizontalTable("Q4-B34-U-2793-2945", 2945, 2930);

// populate the FIRST row of columns
populateVerticalTables("Q1-B9-U-693-776", 776, 765);
populateVerticalTables("Q1-B8-U-609-692", 681, 692);
populateVerticalTables("Q1-B7-U-525-608", 608, 597);
populateVerticalTables("Q1-B6-U-441-524", 513, 524);
populateVerticalTables("Q1-B5-U-357-440", 440, 429);
populateVerticalTables("Q1-B4-U-273-356", 345, 356);
populateVerticalTables("Q1-B3-U-189-272", 272, 261);
populateVerticalTables("Q1-B2-U-105-188", 177, 188);

// populate the SECOND row of columns.
populateVerticalTables("Q2-B17-U-1365-1448", 1448, 1437);
populateVerticalTables("Q2-B16-U-1281-1364", 1353, 1364);
populateVerticalTables("Q2-B15-U-1197-1280", 1280, 1269);
populateVerticalTables("Q2-B14-U-1113-1196", 1185, 1196);
populateVerticalTables("Q2-B13-U-1029-1112", 1112, 1101);
populateVerticalTables("Q2-B12-U-945-1028", 1017, 1028);
populateVerticalTables("Q2-B11-U-861-944", 944, 933);
populateVerticalTables("Q2-B10-U-777-860", 849, 860);


// populate the THIRD row of columns.
populateVerticalTables("Q3-B25-U-2037-2120", 2120, 2109);
populateVerticalTables("Q3-B24-U-1953-2036", 2025, 2036);
populateVerticalTables("Q3-B23-U-1869-1952", 1952, 1941);
populateVerticalTables("Q3-B22-U-1785-1868", 1857, 1868);
populateVerticalTables("Q3-B21-U-1701-1784", 1784, 1773);
populateVerticalTables("Q3-B20-U-1617-1700", 1689, 1700);
populateVerticalTables("Q3-B19-U-1533-1616", 1616, 1605);
populateVerticalTables("Q3-B18-U-1449-1532", 1521, 1532);


// populate the FOURTH row of columns.
populateVerticalTables("Q4-B33-U-2709-2792", 2781, 2792);
populateVerticalTables("Q4-B32-U-2625-2708", 2697, 2708);
populateVerticalTables("Q4-B31-U-2541-2624", 2624, 2613);
populateVerticalTables("Q4-B30-U-2457-2540", 2529, 2540);
populateVerticalTables("Q4-B29-U-2372-2456", 2456, 2445);
populateVerticalTables("Q4-B28-U-2289-2372", 2361, 2372);
populateVerticalTables("Q4-B27-U-2205-2288", 2288, 2277);
populateVerticalTables("Q4-B26-U-2121-2204", 2193, 2204);
=======
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
>>>>>>> f53cd625ba9de8a9f4da0ef2493d8414de0abd9e

// ================ POP UP CODE ================

// units-container is a class found on all tables.
var tables = document.querySelectorAll(".units-container");

// select the pop up content on the pop up window.
var popupContent = document.getElementById("popup-content");

<<<<<<< HEAD
function populatePopUp(startingNumber, database) {
    var currentNumber = startingNumber;

    var table = document.createElement("table");

    for (var i = 6; i >= 0; i--) {
        var row = table.insertRow(0);
        for (var j = 0; j < 12; j++) {
            var cell = row.insertCell();
            cell.id = currentNumber;

            // Add this class for css styling
            cell.classList.add("popup-standard-cell");

            // Check on the dictionary if the value of the "unit_status" key is "sold".
            // Add the popup-sold class if its sold, for css styling.
            if (database[cell.id]['unit_status'] == "sold") {
                cell.classList.add("popup-sold");
            }

            cell.textContent = currentNumber;
            currentNumber++;

        }
    }
    return table;
}

// function to handle a click on any table. this function will be used on all table clicks.
function handleTableClick(event) {
    let tableNumberStart = {
        "Q1-B1-U-1-104": 1,
        "Q1-B9-U-693-776": 693,
        "Q1-B8-U-609-692": 609,
        "Q1-B7-U-525-608": 525,
        "Q1-B6-U-441-524": 441,
        "Q1-B5-U-357-440": 357,
        "Q1-B4-U-273-356": 273,
        "Q1-B3-U-189-272": 189,
        "Q1-B2-U-105-188": 105,
        "Q2-B17-U-1365-1448": 1365,
        "Q2-B16-U-1281-1364": 1281,
        "Q2-B15-U-1197-1280": 1197,
        "Q2-B14-U-1113-1196": 1113,
        "Q2-B13-U-1029-1112": 1029,
        "Q2-B12-U-945-1028": 945,
        "Q2-B11-U-861-944": 861,
        "Q2-B10-U-777-860": 777,
        "Q3-B25-U-2037-2120": 2037,
        "Q3-B24-U-1953-2036": 1953,
        "Q3-B23-U-1869-1952": 1869,
        "Q3-B22-U-1785-1868": 1785,
        "Q3-B21-U-1701-1784": 1701,
        "Q3-B20-U-1617-1700": 1617,
        "Q3-B19-U-1533-1616": 1533,
        "Q3-B18-U-1449-1532": 1449,
        "Q4-B33-U-2709-2792": 2709,
        "Q4-B32-U-2625-2708": 2625,
        "Q4-B31-U-2541-2624": 2541,
        "Q4-B30-U-2457-2540": 2457,
        "Q4-B29-U-2372-2456": 2372,
        "Q4-B28-U-2289-2372": 2289,
        "Q4-B27-U-2205-2288": 2205,
        "Q4-B26-U-2121-2204": 2121,
        "Q4-B34-U-2793-2945": 2793
    };
    database = fetchTable();

=======
// function to handle a click on any table. this function will be used on all table clicks.
function handleTableClick(event) {
>>>>>>> f53cd625ba9de8a9f4da0ef2493d8414de0abd9e
    // remove any existing content in the popup.
    popupContent.innerHTML = "";

    // get the table id for appropriate action.
    var tableId = event.currentTarget.id;

    var table = document.createElement("table");

    // all tables sent to the pop up window will have the popup-units-container class in its class list
    // for separation of tables in the home page and on the pop up.
    table.classList.add("popup-units-container");

    // if the table is "first-row", need special table, perform appropriate action.
<<<<<<< HEAD
    if (tableId == "Q1-B1-U-1-104") {

        // number of cell
        var cellNumber = tableNumberStart[tableId];

        //  17 columns and 7 rows
        for (var i = 6; i >= 0; i--) {
            var row = table.insertRow(0);
=======
    if (tableId == "first-row") {
        //  17 columns and 7 rows
        for (var i = 0; i < 7; i++) {
            var row = table.insertRow();
>>>>>>> f53cd625ba9de8a9f4da0ef2493d8414de0abd9e
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
<<<<<<< HEAD
                        cell.textContent = " ";
=======
>>>>>>> f53cd625ba9de8a9f4da0ef2493d8414de0abd9e
                    }
                    if (i == 3 && j == 7) {
                        cell.textContent = "Altar";
                        cell.classList.add("altar-cell");
                    }
                    if (i == 4 && j == 7) {
                        cell.classList.add("altar-cell-below");
<<<<<<< HEAD
                        cell.textContent = " ";
                    }
                    j += 2; // skip the next two cells as they are combined with the current one.
                } else if ((i == 6 && j >= 7 && j <= 9) || (i == 5 && j >= 7 && j <= 9)) {
                    // Skip over cells in row 7, columns 8, 9, 10 and row 6, columns 9, 10
                    cell.textContent = " ";
                } else {
                    cell.textContent = cellNumber;
                    cell.id = cellNumber;
                    if (database[cell.id]['unit_status'] == "sold") {
                        cell.classList.add("popup-sold");
                    }
                    cellNumber++;
                }

                // unique cell id for each cell for differentiation purposes.
=======
                    }
                    j += 2; // skip the next two cells as they are combined with the current one.
                } else {
<<<<<<< HEAD
                    cell.textContent = 1 + (i * 17) + j;// empty cell
=======
                    cell.textContent = " 100 "; // empty cell
>>>>>>> be145067d9d8fb8bec34b73084ea786e34fcd75b
                }
                // unique cell id for each cell for differentiation purposes.
                cell.id = `${tableId}-popup-unit${i}${j}`;

>>>>>>> f53cd625ba9de8a9f4da0ef2493d8414de0abd9e
                // add popup-standard-cell class for styling purposes.
                cell.classList.add("popup-standard-cell");
            }
        }

        // perform same logic as above but with different conditions if the tableId is "last-row".
<<<<<<< HEAD
    } else if (tableId == "Q4-B34-U-2793-2945") {

        // Start cell here.
        var cellNumber = tableNumberStart[tableId];

        // 27 columns and 7 rows
        for (var i = 6; i >= 0; i--) {
            var row = table.insertRow(0);
            for (var j = 0; j < 27; j++) {
                var cell = row.insertCell();
=======
    } else if (tableId == "last-row") {
        // 26 columns and 7 rows
        for (var i = 0; i < 7; i++) {
            var row = table.insertRow();
            for (var j = 0; j < 26; j++) {
                var cell = row.insertCell();

>>>>>>> f53cd625ba9de8a9f4da0ef2493d8414de0abd9e
                // combine columns 3, 4, 5 with rows 3, 4, 5 forming one cell
                // combine columns 9, 10, 11 with the same rows above to form one cell.
                // combine columns 16, 17, 18 with the same rows above to form one cell.
                // combine columns 21, 22, 24 with the same rows above to form one cell.
                // apply the same logic earlier.
<<<<<<< HEAD

=======
>>>>>>> f53cd625ba9de8a9f4da0ef2493d8414de0abd9e
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
<<<<<<< HEAD
                } else if ((i >= 2 && i <= 4) && (j >= 9 && j <= 11)) {
                    cell.colSpan = 3;
                    if (i == 2 && j == 9) {
                        cell.classList.add("altar-cell-above");
                    }
                    if (i == 3 && j == 9) {
                        cell.textContent = "Altar";
                        cell.classList.add("altar-cell");
                    }
                    if (i == 4 && j == 9) {
                        cell.classList.add("altar-cell-below");
                    }
                    j += 2;
                } else if ((i >= 2 && i <= 4) && (j >= 16 && j <= 18)) {
                    cell.colSpan = 3;
                    if (i == 2 && j == 16) {
                        cell.classList.add("altar-cell-above");
                    }
                    if (i == 3 && j == 16) {
                        cell.textContent = "Altar";
                        cell.classList.add("altar-cell");
                    }
                    if (i == 4 && j == 16) {
                        cell.classList.add("altar-cell-below");
                    }
                    j += 2;
                } else if ((i >= 2 && i <= 4) && (j >= 22 && j <= 24)) {
                    cell.colSpan = 3;
                    if (i == 2 && j == 22) {
                        cell.classList.add("altar-cell-above");
                    }
                    if (i == 3 && j == 22) {
                        cell.textContent = "Altar";
                        cell.classList.add("altar-cell");
                    }
                    if (i == 4 && j == 22) {
=======
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
>>>>>>> f53cd625ba9de8a9f4da0ef2493d8414de0abd9e
                        cell.classList.add("altar-cell-below");
                    }
                    j += 2;
                }
                else {
<<<<<<< HEAD
                    cell.textContent = cellNumber;
                    cell.id = cellNumber;
                    if (database[cell.id]['unit_status'] == "sold") {
                        cell.classList.add("popup-sold");
                    }
                    cellNumber++;
                }
=======
<<<<<<< HEAD
                    cell.textContent = 105 + (i * 12) + j;; // empty cell
=======
                    cell.textContent = "2900"; // empty cell
>>>>>>> be145067d9d8fb8bec34b73084ea786e34fcd75b

                }
                cell.id = `${tableId}-popup-unit${i}${j}`;
>>>>>>> f53cd625ba9de8a9f4da0ef2493d8414de0abd9e
                cell.classList.add("popup-standard-cell");
            }
        }

        // if its not the first-row or last-row just make a 7 by 12 table.
    } else {
<<<<<<< HEAD
        table = populatePopUp(tableNumberStart[tableId], database);
=======
        for (var i = 0; i < 7; i++) {
            var row = table.insertRow();
            for (var j = 0; j < 12; j++) {
                var cell = row.insertCell();
                cell.id = `${tableId}-popup-unit${i}${j}`;

                cell.classList.add("popup-standard-cell");
<<<<<<< HEAD
                cell.textContent = 105 + (i * 12) + j;
=======
                cell.textContent = "999";
>>>>>>> be145067d9d8fb8bec34b73084ea786e34fcd75b
            }
        }
>>>>>>> f53cd625ba9de8a9f4da0ef2493d8414de0abd9e
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

<<<<<<< HEAD
// ================ /POP UP CODE ================
=======
// ================ /POP UP CODE ================

>>>>>>> f53cd625ba9de8a9f4da0ef2493d8414de0abd9e
