// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/mentalHealthDB", function(err, db) {
    if(!err) {
        console.log("connected");
    }
});

    var final_graph= new Array();

    var USA=new Array();
    var query = { state: "USA", "Family Histroy":"true" };
    USA.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
        assert.equal(err, null)}));
    query = { state: "USA", "Recieved Treatment":"true" };
    USA.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));
    query = { state: "USA", "Affected Physical health":"true" };
    USA.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));
    query = { state: "USA", "Faced Stigma":"true" };
    USA.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));

    for (var i=0; i=USA.length; i++){

    final_graph.push('USA',[USA[i]]);
}
var Australia=new Array();
query = { state: "Australia", "Family Histroy":"true" };
Australia.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));
query = { state: "Australia", "Recieved Treatment":"true" };
Australia.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));
query = { state: "Australia", "Affected Physical health":"true" };
Australia.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));
query = { state: "Australia", "Faced Stigma":"true" };
Australia.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));

for (var i=0; i=Australia.length; i++){

    final_graph.push('Australia',[Australia[i]]);
}


var Canada=new Array();
query = { state: "Canada", "Family Histroy":"true" };
Canada.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));
query = { state: "Canada", "Recieved Treatment":"true" };
Canada.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));
query = { state: "Canada", "Affected Physical health":"true" };
Canada.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));
query = { state: "Canada", "Faced Stigma":"true" };
Canada.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));

for (var i=0; i=Canada.length; i++){

    final_graph.push('Canada',[Canada[i]]);
}


var UK=new Array();
query = { state: "UK", "Family Histroy":"true" };
UK.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));
query = { state: "UK", "Recieved Treatment":"true" };
UK.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));
query = { state: "UK", "Affected Physical health":"true" };
UK.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));
query = { state: "UK", "Faced Stigma":"true" };
UK.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));

for (var i=0; i=UK.length; i++){

    final_graph.push('UK',[UK[i]]);
}



var Russia=new Array();
query = { state: "Russia", "Family Histroy":"true" };
Russia.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));
query = { state: "Russia", "Recieved Treatment":"true" };
Russia.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));
query = { state: "Russia", "Affected Physical health":"true" };
Russia.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));
query = { state: "Russia", "Faced Stigma":"true" };
Russia.push( db.collection("patientHistory").find(query).count().toArray(function(err, result) {
    assert.equal(err, null)}));

for (var i=0; i=Russia.length; i++){

    final_graph.push('Russia',[Russia[i]]);
}


//close connection
MongoClient.close();


////////////////////////////////////////////////////////////////////////////////////

// code to generate the graph

/////////////////////////////////////////////////////////////////////////////////////


function wrap(text, width) {
    text.each(function() {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, // ems
            y = text.attr("y"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
        }
    });
}


var margin = {top: (parseInt(d3.select('body').style('height'), 10)/20), right: (parseInt(d3.select('body').style('width'), 10)/20), bottom: (parseInt(d3.select('body').style('height'), 10)/6), left: (parseInt(d3.select('body').style('width'), 10)/20)},
    width = parseInt(d3.select('body').style('width'), 10) - margin.left - margin.right,
    height = parseInt(d3.select('body').style('height'), 10) - margin.top - margin.bottom;
var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1,.3);
var y = d3.scale.linear()
    .rangeRound([height, 0]);
var colorRange = d3.scale.category20();
var color = d3.scale.ordinal()
    .range(colorRange.range());
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(d3.format(".2s"));
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
var divTooltip = d3.select("body").append("div").attr("class", "toolTip");
color.domain(d3.keys(final_graph[0]).filter(function(key) { return key !== "label"; }));
final_graph.forEach(function(d) {
    var y0 = 0;
    d.values = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
    d.total = d.values[d.values.length - 1].y1;
});
x.domain(final_graph.map(function(d) { return d.label; }));
y.domain([0, d3.max(final_graph, function(d) { return d.total; })]);
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);
svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 9)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Percentage from total surveyed %");
var bar = svg.selectAll(".label")
    .data(final_graph)
    .enter().append("g")
    .attr("class", "g")
    .attr("transform", function(d) { return "translate(" + x(d.label) + ",0)"; });
svg.selectAll(".x.axis .tick text")
    .call(wrap, x.rangeBand());

var bar_enter = bar.selectAll("rect")
    .data(function(d) { return d.values; })
    .enter();

bar_enter.append("rect")
    .attr("width", x.rangeBand())
    .attr("y", function(d) { return y(d.y1); })
    .attr("height", function(d) { return y(d.y0) - y(d.y1); })
    .style("fill", function(d) { return color(d.name); });

bar_enter.append("text")
    .text(function(d) { return d3.format(".2s")(d.y1-d.y0)+"%"; })
    .attr("y", function(d) { return y(d.y1)+(y(d.y0) - y(d.y1))/2; })
    .attr("x", x.rangeBand()/3)
    .style("fill", '#ffffff');

bar
    .on("mousemove", function(d){
        divTooltip.style("left", d3.event.pageX+10+"px");
        divTooltip.style("top", d3.event.pageY-25+"px");
        divTooltip.style("display", "inline-block");
        var elements = document.querySelectorAll(':hover');
        l = elements.length
        l = l-1
        element = elements[l].__data__
        value = element.y1 - element.y0
        divTooltip.html((d.label)+"<br>"+element.name+"<br>"+value+"%");
    });
bar
    .on("mouseout", function(d){
        divTooltip.style("display", "none");
    });
svg.append("g")
    .attr("class", "legendLinear")
    .attr("transform", "translate(0,"+(height+30)+")");
var legend = d3.legend.color()
    .shapeWidth(height/4)
    .shapePadding(10)
    .orient('horizontal')
    .scale(color);
svg.select(".legendLinear")
    .call(legend);
