/*--------------------------------Functions used in watchlist.html-------------------------------*/

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


//Creates a plot containing two symbols
function compareTwoSymbols(symbols) {
    symbol1 = symbols[0];
    symbol2 = symbols[1];

    function makeplot() {
        Plotly.d3.csv("files/"+symbol1+".csv", function(data){ processOldData(data) } );
    };
        
    function processOldData(allRows) {
        var x = [], y = [];

        for (var i=0; i<allRows.length; i++) {
            row = allRows[i];
            x.push( row['Hour'] );
            y.push( row['Close'] );
        }
        Plotly.d3.csv("files/"+symbol2+".csv", function(data){ processAllData(data, x, y) } );
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
            name: symbol1
        };
        var trace2 = {
            x: x2, 
            y: y2,
            name: symbol2
        };
        var layout = {
            xaxis: {dtick: 30},
        };
        var traces = [trace1, trace2];
        Plotly.newPlot('stock_plot', traces, layout);
    };
    makeplot();
}


function compareThreeSymbols(symbols) {
    symbol1 = symbols[0];
    symbol2 = symbols[1];
    symbol3 = symbols[2];

    function makeplot() {
        Plotly.d3.csv("files/"+symbol1+".csv", function(data){ processFirstData(data) } );
    };
        
    function processFirstData(allRows) {
        var x = [], y = [];

        for (var i=0; i<allRows.length; i++) {
            row = allRows[i];
            x.push( row['Hour'] );
            y.push( row['Close'] );
        }
        Plotly.d3.csv("files/"+symbol2+".csv", function(data){ processSecondData(data, x, y) } );
    }

    function processSecondData(allRows, x1, y1) {
        var x2 = [], y2 = [];

        for (var i=0; i<allRows.length; i++) {
            row = allRows[i];
            x2.push( row['Hour'] );
            y2.push( row['Close'] );
        }
        Plotly.d3.csv("files/"+symbol3+".csv", function(data){ processThirdData(data, x1, y1, x2, y2) } );
    }

    function processThirdData(allRows, x1, y1, x2, y2) {
        var x3 = [], y3 = [];

        for (var i=0; i<allRows.length; i++) {
            row = allRows[i];
            x3.push( row['Hour'] );
            y3.push( row['Close'] );
        }
        makePlotly(x1, y1, x2, y2, x3, y3);   
    }

    function makePlotly(x1, y1, x2, y2, x3, y3){
        var trace1 = {
            x: x1, 
            y: y1,
            name: symbol1
        };
        var trace2 = {
            x: x2, 
            y: y2,
            name: symbol2
        };
        var trace3 = {
            x: x3, 
            y: y3,
            name: symbol3
        };
        var layout = {
            xaxis: {dtick: 30},
        };
        var traces = [trace1, trace2, trace3];
        Plotly.newPlot('stock_plot', traces, layout);
    };
    makeplot();
}


function compareAllSymbols(symbols) {
    symbol1 = symbols[0];
    symbol2 = symbols[1];
    symbol3 = symbols[2];
    symbol4 = symbols[3];

    function makeplot() {
        Plotly.d3.csv("files/"+symbol1+".csv", function(data){ processFirstData(data) } );
    };
        
    function processFirstData(allRows) {
        var x = [], y = [];

        for (var i=0; i<allRows.length; i++) {
            row = allRows[i];
            x.push( row['Hour'] );
            y.push( row['Close'] );
        }
        Plotly.d3.csv("files/"+symbol2+".csv", function(data){ processSecondData(data, x, y) } );
    }

    function processSecondData(allRows, x1, y1) {
        var x2 = [], y2 = [];

        for (var i=0; i<allRows.length; i++) {
            row = allRows[i];
            x2.push( row['Hour'] );
            y2.push( row['Close'] );
        }
        Plotly.d3.csv("files/"+symbol3+".csv", function(data){ processThirdData(data, x1, y1, x2, y2) } );
    }

    function processThirdData(allRows, x1, y1, x2, y2) {
        var x3 = [], y3 = [];

        for (var i=0; i<allRows.length; i++) {
            row = allRows[i];
            x3.push( row['Hour'] );
            y3.push( row['Close'] );
        }
        Plotly.d3.csv("files/"+symbol4+".csv", function(data){ processAllData(data, x1, y1, x2, y2, x3, y3) } );
    }

    function processAllData(allRows, x1, y1, x2, y2, x3, y3) {
        var x4 = [], y4 = [];

        for (var i=0; i<allRows.length; i++) {
            row = allRows[i];
            x4.push( row['Hour'] );
            y4.push( row['Close'] );
        }
        makePlotly(x1, y1, x2, y2, x3, y3, x4, y4);   
    }

    function makePlotly(x1, y1, x2, y2, x3, y3, x4, y4){
        var trace1 = {
            x: x1, 
            y: y1,
            name: symbol1
        };
        var trace2 = {
            x: x2, 
            y: y2,
            name: symbol2
        };
        var trace3 = {
            x: x3, 
            y: y3,
            name: symbol3
        };
        var trace4 = {
            x: x4, 
            y: y4,
            name: symbol4
        };
        var layout = {
            xaxis: {dtick: 30},
        };
        var traces = [trace1, trace2, trace3, trace4];
        Plotly.newPlot('stock_plot', traces, layout);
    };
    makeplot();
}


/*-----------------------------------------Functions used in charts.html------------------------------------*/

//Creates the plot of a stock, including its prediction
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