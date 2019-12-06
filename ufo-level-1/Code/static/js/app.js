// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")
function buildtable(data) {
    tbody.html("");
    data.forEach(function (ufoSightings) {
        console.log(ufoSightings);
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

}
function handleClick() {
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;
    if (date) {
        filterData = filterData.filter(row => row.datetime === date);   
    }
    
    buildtable(filterData);

}
d3.selectAll("#filter-btn").on("click", handleClick);
buildtable(tableData);

