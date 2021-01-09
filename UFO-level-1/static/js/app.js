// from data.js
var tableData = data;

// YOUR CODE HERE!

// Create a variable for the table columns
var tableColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Create HTML object references
var tablebody = d3.select("tablebody");
var searchDate = d3.select("#searchDate");
var btnSearch = d3.select("#btnSearch");
var btnReset = d3.select("#btnReset");

// Define a function that builds the table
var loadTableRows = (xData) => { 
	// Delete the previously loaded table rows (if there were any)
    tablebody.html("");
	
	// Loop through "whichData" and add new table row for each row 
	whichData.forEach(dataRow => { var tblRow = tbody.append("tr");  
		
		// Loop through each column and add it as a new table cell
		tblColumns.forEach(column => tblRow.append("td").text(dataRow[column]))
	});
}