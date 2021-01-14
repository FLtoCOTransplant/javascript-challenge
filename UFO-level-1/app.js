// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!

// Create a variable for the table columns
var tableColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Create HTML object references
var tbody = d3.select("tbody");
var searchDate = d3.select("datetime");
var btnSearch = d3.select("filter-btn");

// Define a function that builds the table
var loadTableRows = (xData) => { 
	// Delete the previously loaded table rows (if there were any)
    tbody.html("");
	
	// Loop through tableData and add a new row for each new sighting
	xData.forEach(dataRow => { var tableRow = tbody.append("tr");  
		
		// Loop through each column and add a new table cell where appropriate
		tableColumns.forEach(column => tableRow.append("td").text(dataRow[column]))
	});
}

// call the function
loadTableRows(tableData);

// what happens when someone searches for an event
btnSearch.on("click", () => {
	// don't refresh on events
	d3.event.preventDefault();

    // Search for the date entered
    var searchedDate = searchDate.property("value");

    // Take the data and filter it
    var tableData_Filtered = tableData.filter(tableData => tableData.datetime === searchedDate);

    // Now load the new data
	if(tableData_Filtered.length !== 0) {
        loadTableRows(tableData_Filtered);
    
	}
	else {
		// Clear previous HTML:
		tbody.html("");
		
		// Give them the bad news...
		tbody.append("tr").append("td").text("There are no UFOs and never will be");
	}
})        

// Need to reset the button 
buttonReset.on("click", () => {
	document.getElementById("searchDate").value='';
	
	// Reset original table
	loadTableRows(tableData);
})