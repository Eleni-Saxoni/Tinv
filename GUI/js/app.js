
//Creates the plot of existing stock data in watchlist.html
function createTimeSeries(symbol, plotId) {

    //Creates the actual plots
    function makeplot() {
        Plotly.d3.csv("files/"+symbol+".csv", function(data){ processData(data) } );
    };
        
    //Loads the data from the csv
    function processData(allRows) {
        var x = [], y = [];

        for (var i=0; i<allRows.length; i++) {
            row = allRows[i];
            x.push( row['Hour'] );
            y.push( row['Close'] );
        }
        makePlotly( x, y);
    }

    //Creates the axes using the data loaded
    function makePlotly(x, y){
        var traces = [{
            x: x, 
            y: y
        }];
        var layout = {
            xaxis: {dtick: 30},
            title: symbol
        }
        Plotly.newPlot(plotId, traces, layout);
    };
    makeplot();
}


//Creates the plot of a stock, including its prediction, in charts.html
function predictTimeSeries(symbol) {
    function makeplot() {
        Plotly.d3.csv("files/"+symbol+".csv", function(data){ processOldData(data) } );
    };
        
    function processOldData(allRows) {
        var x = [], y = [];

        for (var i=0; i<allRows.length; i++) {
            row = allRows[i];
            x.push( row['Hour'] );
            y.push( row['Close'] );
        }
        Plotly.d3.csv("files/"+symbol+"prediction.csv", function(data){ processAllData(data, x, y) } );
    }

    function processAllData(allRows, x1, y1) {
        var x2 = [], y2 = [];

        for (var i=0; i<allRows.length; i++) {
            row = allRows[i];
            x2.push( row['Hour'] );
            y2.push( row['Close'] );
        }
        makePlotly(x1, y1, x2, y2);
    }

    function makePlotly(x1, y1, x2, y2){
        var trace1 = {
            x: x1, 
            y: y1,
            name:"Existing prices"
        };
        var trace2 = {
            x: x2, 
            y: y2,
            name:"Prediction"
        };
        var layout = {
            title: symbol,
            xaxis: {dtick: 30},
        };
        var traces = [trace1, trace2];
        Plotly.newPlot('plot', traces, layout);
    };
    makeplot();
}