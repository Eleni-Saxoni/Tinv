/*This whole file is in working process */

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


//Used to create the plot of existing stock data in watchlist.html
function depictTimeSeries() {
    function makeplot() {
        Plotly.d3.csv("files/AMC.csv", function(data){ processData(data) } );
    };
        
    function processData(allRows) {

        console.log(allRows);
        var x = [], y = [], standard_deviation = [];

        for (var i=0; i<allRows.length; i++) {
            row = allRows[i];
            x.push( row['Dates'] );
            y.push( row['Close'] );
        }
        console.log( 'X', x, 'Y', y, 'SD',standard_deviation );
        makePlotly( x, y, standard_deviation );
    }

    function makePlotly( x, y, standard_deviation ){
        var plotDiv = document.getElementById("stock_plot");
        var traces = [{
            x: x, 
            y: y
        }];

        Plotly.newPlot('stock_plot', traces, 
            {title: 'AMC'});
    };
    makeplot();
}


//Used to create the plot of a stock, including its prediction, in charts.html
function predictTimeSeries() {
    function makeplot() {
        Plotly.d3.csv("files/AMC.csv", function(data){ processData(data) } );
    };
        
    function processData(allRows) {

        console.log(allRows);
        var x = [], y = [], standard_deviation = [];

        for (var i=0; i<allRows.length; i++) {
            row = allRows[i];
            x.push( row['Dates'] );
            y.push( row['Close'] );
        }
        console.log( 'X', x, 'Y', y, 'SD',standard_deviation );
        makePlotly( x, y, standard_deviation );
    }

    function makePlotly( x, y, standard_deviation ){
        var plotDiv = document.getElementById("plot");
        var traces = [{
            x: x, 
            y: y
        }];

        Plotly.newPlot('plot', traces, 
            {title: 'AMC'});
    };
    makeplot();
}