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


//query db for patients across ages in various states

//populating for CA
var CA= db.collection('patientsStates', function (err, collection) {
    collection.find({$and:[{"age":{$gt:5}},{"state": "CA"}]}).toArray(function(err, docs) {
        assert.equal(err, null) });
})
;

    CA.push(
        db.collection('patientsStates', function (err, collection) {
            collection.find({$and: [{"age": {$gt: 10}}, {"age": {$lte: 13}}, {"state": "CA"}]}).toArray(function (err, docs) {
                assert.equal(err, null)});
        })
    );
CA.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 14}}, {"age": {$lte: 17}}, {"state": "CA"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);
CA.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 14}}, {"age": {$lte: 17}}, {"state": "CA"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

CA.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 25}}, {"age": {$lte: 44}}, {"state": "CA"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

CA.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 45}}, {"age": {$lte: 64}}, {"state": "CA"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

CA.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 65}}, {"state": "CA"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);



for (var i=0; i=CA.length; i++){

    final.push('CA',[CA[i]]);
}

//populating for TX

var TX= db.collection('patientsStates', function (err, collection) {
        collection.find({$and:[{"age":{$gt:5}},{"state": "TX"}]}).toArray(function(err, docs) {
            assert.equal(err, null) });
    })
;

TX.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 10}}, {"age": {$lte: 13}}, {"state": "TX"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);
TX.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 14}}, {"age": {$lte: 17}}, {"state": "TX"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);
TX.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 14}}, {"age": {$lte: 17}}, {"state": "TX"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

TX.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 25}}, {"age": {$lte: 44}}, {"state": "TX"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

TX.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 45}}, {"age": {$lte: 64}}, {"state": "TX"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

TX.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 65}}, {"state": "TX"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

for (var i=0; i=TX.length; i++){

    final.push('TX',[TX[i]]);
}


//Populating for NY

var NY= db.collection('patientsStates', function (err, collection) {
        collection.find({$and:[{"age":{$gt:5}},{"state": "NY"}]}).toArray(function(err, docs) {
            assert.equal(err, null) });
    })
;

NY.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 10}}, {"age": {$lte: 13}}, {"state": "NY"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);
NY.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 14}}, {"age": {$lte: 17}}, {"state": "NY"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);
NY.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 14}}, {"age": {$lte: 17}}, {"state": "NY"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

NY.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 25}}, {"age": {$lte: 44}}, {"state": "NY"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

NY.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 45}}, {"age": {$lte: 64}}, {"state": "NY"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

NY.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 65}}, {"state": "NY"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

for (var i=0; i=NY.length; i++){

    final.push('NY',[NY[i]]);
}


//Populating for FL

var FL= db.collection('patientsStates', function (err, collection) {
        collection.find({$and:[{"age":{$gt:5}},{"state": "FL"}]}).toArray(function(err, docs) {
            assert.equal(err, null) });
    })
;

FL.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 10}}, {"age": {$lte: 13}}, {"state": "FL"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);
FL.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 14}}, {"age": {$lte: 17}}, {"state": "FL"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);
FL.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 14}}, {"age": {$lte: 17}}, {"state": "FL"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

FL.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 25}}, {"age": {$lte: 44}}, {"state": "FL"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

FL.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 45}}, {"age": {$lte: 64}}, {"state": "FL"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

FL.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 65}}, {"state": "CA"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);


for (var i=0; i=FL.length; i++){

    final.push('FL',[FL[i]]);
}

//populating for IL

var IL= db.collection('patientsStates', function (err, collection) {
        collection.find({$and:[{"age":{$gt:5}},{"state": "IL"}]}).toArray(function(err, docs) {
            assert.equal(err, null) });
    })
;

IL.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 10}}, {"age": {$lte: 13}}, {"state": "IL"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);
IL.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 14}}, {"age": {$lte: 17}}, {"state": "IL"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);
IL.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 14}}, {"age": {$lte: 17}}, {"state": "IL"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

IL.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 25}}, {"age": {$lte: 44}}, {"state": "IL"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

IL.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 45}}, {"age": {$lte: 64}}, {"state": "IL"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

IL.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 65}}, {"state": "IL"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);


for (var i=0; i=IL.length; i++){

    final.push('IL',[IL[i]]);
}



//populating for PA

var PA= db.collection('patientsStates', function (err, collection) {
        collection.find({$and:[{"age":{$gt:5}},{"state": "PA"}]}).toArray(function(err, docs) {
            assert.equal(err, null) });
    })
;

PA.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 10}}, {"age": {$lte: 13}}, {"state": "PA"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);
PA.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 14}}, {"age": {$lte: 17}}, {"state": "PA"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);
PA.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 14}}, {"age": {$lte: 17}}, {"state": "PA"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

PA.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 25}}, {"age": {$lte: 44}}, {"state": "PA"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

PA.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 45}}, {"age": {$lte: 64}}, {"state": "PA"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

PA.push(
    db.collection('patientsStates', function (err, collection) {
        collection.find({$and: [{"age": {$gt: 65}}, {"state": "PA"}]}).toArray(function (err, docs) {
            assert.equal(err, null)});
    })
);

for (var i=0; i=PA.length; i++){

    final.push('PA',[PA[i]]);
}

//close connection
MongoClient.close();

////////////////////////////////////////////////////////////////////////////////////

// code to generate the graph

/////////////////////////////////////////////////////////////////////////////////////

var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x0 = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.1);

var x1 = d3.scaleBand()
    .padding(0.05);

var y = d3.scaleLinear()
    .rangeRound([height, 0]);

var z = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
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
color.domain(d3.keys(final[0]).filter(function(key) { return key !== "label"; }));
final.forEach(function(d) {
    var y0 = 0;
    d.values = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
    d.total = d.values[d.values.length - 1].y1;
});
x.domain(final.map(function(d) { return d.label; }));
y.domain([0, d3.max(final, function(d) { return d.total; })]);
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
    .data(final)
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
