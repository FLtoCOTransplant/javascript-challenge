// from data.js
var tableData = data;
console.log(tableData);

// Create a variable for the table columns
var tableColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Create HTML object references
var tbody = d3.select("tbody");
var searchDate = d3.select("datetime");

// Define a function that builds the table
function loadTableRows(xData) { 
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
function buttonClick(){
	// don't refresh on events
	// d3.event.preventDefault();

    // Search for the date entered
    var searchedDate = d3.select("#datetime").property("value");

    // Take the data and filter it
	var tableData_original = tableData
	//.filter(tableData => tableData.datetime === searchedDate);
	
	// var sdate = d3.select("#datetime").property("value")
	if (searchedDate) {
		// Apply `filter` to the table data to only keep the
		// rows where the `datetime` value matches the filter value
		var filterData = tableData_original.filter(row => row.datetime === searchedDate)
	  }
	  loadTableRows(filterData);
}        

// Need to reset the button 
	d3.selectAll("#filter-btn").on("click", buttonClick);
