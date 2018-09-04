// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/mentalHealthDB", function(err, db) {
    if(!err) {
        console.log("connected");
    }
});


//populating the final array of arrays

var final= new array(5);


//query db for patients across ages in various diagnosiss

//populating for final
final.push('<5',
    db.collection('mentalHealthSurveys', function (err, collection) {
        collection.find({$and:[{"age":{$lt:5}},{"diagnosis": "true"}]}).count().toArray(function(err, docs) {
            assert.equal(err, null) });
    })
);

final.push('5-13',
    db.collection('mentalHealthSurveys', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 5}}, {"age": {$lte: 13}}, {"diagnosis": "true"}]}).count().toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);
final.push('14-17',
    db.collection('mentalHealthSurveys', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 14}}, {"age": {$lte: 17}}, {"diagnosis": "true"}]}).count().toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);
final.push('18-24',
    db.collection('mentalHealthSurveys', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 14}}, {"age": {$lte: 17}}, {"diagnosis": "true"}]}).count().toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

final.push('25-44',
    db.collection('mentalHealthSurveys', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 25}}, {"age": {$lte: 44}}, {"diagnosis": "true"}]}).count().toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

final.push('45-64',
    db.collection('mentalHealthSurveys', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 45}}, {"age": {$lte: 64}}, {"diagnosis": "true"}]}).count().toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

final.push('≥65',
    db.collection('mentalHealthSurveys', function (err, collection) {
        collection.find({$and: [{"age": {$gte: 65}}, {"diagnosis": "true"}]}).count().toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);


//closing db connection

MongoClient.close();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////// script to populate graph


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




var width = 960,
    height = 500,
    radius = Math.min(width, height) / 2;

var color = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return final[0]; });

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


    var g = svg.selectAll(".arc")
        .data(pie(final))
        .enter().append("g")
        .attr("class", "arc");

    g.append("path")
        .attr("d", arc)
        .style("fill", function(d) { return color(final[0]); });

    g.append("text")
        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .style("font-size", "20px")
        .style("fill", "#000000")
        .style("font-weight", "bold")
        .text(function(d) { return final; });


