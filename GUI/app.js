function search_everything() {
    let input = document.getElementById('home_and_charts_query').value
    input=input.toLowerCase();
    let x = ["AMC"];
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

function search_news() {
    let input = document.getElementById('home_and_charts_query').value
    input=input.toLowerCase();
    let x = ["AMC"];
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

function search_symbols() {
    let input = document.getElementById('home_and_charts_query').value
    input=input.toLowerCase();
    let x = ["AMC"];
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}