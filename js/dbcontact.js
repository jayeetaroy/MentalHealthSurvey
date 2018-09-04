// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/mentalHealthDB", function(err, db) {
    if(!err) {
        console.log("connected");
    }
});

var WorkAffliction=[];
var query = { "Work Affected":"NA" };
WorkAffliction.push( 'NA', db.collection("mentalHealthsurvey").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));

query = {  "Work Affected":"Never" };
WorkAffliction.push( 'Never', db.collection("mentalHealthsurvey").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));

query = {  "Work Affected":"Sometimes" };
WorkAffliction.push('Sometimes', db.collection("mentalHealthsurvey").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));

query = {  "Work Affected":"Rarely" };
WorkAffliction.push( 'Rarely', db.collection("mentalHealthsurvey").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));

query = {  "Work Affected":"Often" };
WorkAffliction.push( 'Often', db.collection("mentalHealthsurvey").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));

//close DB connection
MongoClient.close();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//javascript to generate the graph

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// margin
var margin = {top: 20, right: 20, bottom: 20, left: 20},
    width = 500 - margin.right - margin.left,
    height = 500 - margin.top - margin.bottom,
    radius = width/2;

// color range
var color = d3.scaleOrdinal()
    .range(["#72040b", "#231c7c", "#edae61", "#8bef90", "#f271a0", "#9661e5", "#ac2fef"]);

// pie chart arc. Need to create arcs before generating pie
var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

// donut chart arc
var arc2 = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);

// arc for the labels position
var labelArc = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

// generate pie chart and donut chart
var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.count; });

// define the svg for pie chart
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// // define the svg donut chart
// var svg2 = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .append("g")
//     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


    // parse WorkAffliction

    // "g element is a container used to group other SVG elements"
    var g = svg.selectAll(".arc")
        .data(pie(WorkAffliction))
        .enter().append("g")
        .attr("class", "arc")
        .style("align","center");

    // append path
    g.append("path")
        .attr("d", arc)
        .style("fill", function(d) { return color(d.values()); })
        // transition
        .transition()
        .ease(d3.easeLinear)
        .duration(2000)
        .attrTween("d", tweenPie);

    // append text
    g.append("text")
        .transition()
        .ease(d3.easeLinear)
        .duration(2000)
        .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .style("font-size", "20px")
        .style("fill", "#a39b9b")
        .style("font-weight", "bold")
        .text(function(d) { return d.values();});


    // "g element is a container used to group other SVG elements"
    // var g2 = svg2.selectAll(".arc2")
    //     .WorkAffliction(pie(WorkAffliction))
    //     .enter().append("g")
    //     .attr("class", "arc2");

    // // append path
    // g2.append("path")
    //     .attr("d", arc2)
    //     .style("fill", function(d) { return color(d.WorkAffliction.fruit); })
    //     .transition()
    //     .ease(d3.easeLinear)
    //     .duration(2000)
    //     .attrTween("d", tweenDonut);

    // // append text
    // g2.append("text")
    //     .transition()
    //     .ease(d3.easeLinear)
    //     .duration(2000)
    //     .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
    //     .attr("dy", ".35em")
    //     .text(function(d) { return d.WorkAffliction.fruit; });



// Helper function for animation of pie chart and donut chart
function tweenPie(b) {
    b.innerRadius = 0;
    var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
    return function(t) { return arc(i(t)); };
}

// function tweenDonut(b) {
//     b.innerRadius = 0;
//     var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
//     return function(t) { return arc2(i(t)); };
// }
