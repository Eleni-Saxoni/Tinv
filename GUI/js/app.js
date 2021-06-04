/*This whole file is in working process */

/*Functions used for search bar functionality*/
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

function createListItem(newItem) {
    let li = document.createElement('li');
    li.textContent = newItem;
    return li;
}

function search_news() {
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