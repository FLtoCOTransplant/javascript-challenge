// from data.js
var tableData = data;

// YOUR CODE HERE!

// Create a variable for the table columns
var tableColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Create HTML object references
var tablebody = d3.select("tablebody");
var searchDate = d3.select("#searchDate");
var buttonSearch = d3.select("#btnSearch");
var buttonReset = d3.select("#btnReset");

// Define a function that builds the table
var loadTableRows = (xData) => { 
    tablebody.html("");
	
	// Loop through tableData and add a new row for each new sighting
	tableData.forEach(dataRow => { var tableRow = tablebody.append("tr");  
		
		// Loop through each column and add a new table cell where appropriate
		tableColumn.forEach(column => tableRow.append("td").text(dataRow[column]))
	});
}

// load the table
loadTableRows(tableData);

// what happens when someone searches for an event
buttonSearch.on("click", () => {
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
		tablebody.html("");
		
		// let them know "good luck..."
		tablebody.append("tr").append("td").text("There are no UFOs and never will be");
	}
})        

// Need to reset the button 
buttonReset.on("click", () => {
	document.getElementById("searchDate").value='';
	
	// Reset original table
	loadTableRows(tableData);
})