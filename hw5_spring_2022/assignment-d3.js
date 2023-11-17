// !preview r2d3 data=dat2, d3_version=4
//
// r2d3: https://rstudio.github.io/r2d3
//

var margin = {top: 30, right:15, bottom: 100, left: 50},
  width = 550 - margin.left -margin.right,
  height = 400 - margin.top - margin.bottom;

var formatDate = d3.timeParse("%Y-%m-%d");

// Defining the axes
var x = d3.scaleTime()
  .domain([formatDate("2006-12-01"), formatDate("2010-11-30")])
  .range([margin.left, width]);
svg.append("g")
  .attr("transform", "translate(" + 0 + "," + height + ")")
  .call(d3.axisBottom(x));
y = d3.scaleLinear()
    .range([height, margin.top])
    .domain([0, 5000]);
svg.append("g")
  .attr("transform", "translate("+margin.left + "," + 0 + ")")
  .call(d3.axisLeft(y));

// Plotting the time series as a line plot
svg.append("path")
  .datum(data)
  .attr("fill", "none")
  .attr("stroke", "purple")
  .attr("stroke-width", 1)
  .attr("d", d3.line()
    .x(function(d) {return x(formatDate(d.Date));})
    .y(function(d) {return y(d.Global_active_power);}))
    
// labels
svg.append("text")
  .attr("transform", "translate(100,25)")
  .attr("dy", "1em")
  .style("font-family", "Tahoma, Geneva, sans-serif")
  .style("font-size", "12pt").text("Daily Total Electric Consumption VS Date");
    
// label for x axis
svg.append("text")
  .attr("class", "x label")
  .attr("x", width)
  .attr("y",height+35)
  .attr("text-anchor", "end")
  .style("font-family", "Tahoma, Geneva, sans-serif")
  .style("font-size", "8pt")
  .text("Date");
 
// label for y axis 
svg.append("text")
  .attr("class", "y label")
  .attr("text-anchor","end")
  .attr("y",6)
  .attr("dy", "1em")
  .attr("transform","rotate(-90)")
  .style("font-family", "Tahoma, Geneva, sans-serif")
  .style("font-size", "8pt")
  .text("Daily Total Electric Consumption (kilowatts)");

