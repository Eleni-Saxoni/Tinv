//createListItem, search: used for search bar functionality
function createListItem(newItem) {
    let li = document.createElement('li');
    li.textContent = newItem;
    return li;
}

function search(searchCode) {
    if (searchCode=="news") {
        let stringToSearch = document.getElementById('news_query').value;
        stringToSearch = stringToSearch.toLowerCase();
        const availableNews =  document.getElementsByClassName('news_title');

        var news_found_list = document.getElementById("news_found_list");
        var listItem = document.getElementById("li");
    
        for (i = 0; i < availableNews.length; i++) { 
            if (availableNews[i].innerHTML.toLowerCase().includes(stringToSearch)) {
                news_found_list.appendChild(createListItem(availableNews[i].innerHTML));
            }
        }
    }
    if (searchCode=="symbols") {


    }  
}

//Creates the plot of existing stock data in watchlist.html
function depictTimeSeries() {

    //Creates the actual plots
    function makeplot() {
        Plotly.d3.csv("files/AMC.csv", function(data){ processData(data) } );
    };
        
    //Loads the data from the csv
    function processData(allRows) {
        var x = [], y = [];

        for (var i=0; i<allRows.length; i++) {
            row = allRows[i];
            x.push( row['Hour'] );
            y.push( row['Close'] );
        }
        makePlotly( x, y );
    }

    //Creates the axes using the data loaded
    function makePlotly( x, y ){
        var traces = [{
            x: x, 
            y: y
        }];
        var layout = {
            xaxis: {dtick: 30},
        }
        Plotly.newPlot('stock_plot', traces, layout);
    };
    makeplot();
}


//Creates the plot of a stock, including its prediction, in charts.html
function predictTimeSeries(symbol, time) {
    console.log("You just called me with arguments", symbol, time); //--------------------------------------------TO GO!!!

    function makeplot() {
        Plotly.d3.csv("files/"+symbol+".csv", function(data){ processData(data, time) } );
    };
        
    function processData(allRows, timeToPredict) {
        var x = [], y = [];

        for (var i=0; i<allRows.length; i++) {
            row = allRows[i];
            x.push( row['Hour'] );
            y.push( row['Close'] );
        }
        makePlotly( x, y);
    }

    function makePlotly(x, y){
        var traces = [{
            x: x, 
            y: y
        }];
        var layout = {
            xaxis: {dtick: 30},
            title: symbol
        }
        Plotly.newPlot('plot', traces, layout);
    };
    makeplot();
}