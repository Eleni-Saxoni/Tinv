window.onload = main;

function main() {
    searchNews("etherium");

    document.querySelector("#news_search_btn").addEventListener("click", function(event) {
        let newsQuery = document.getElementById("news_query").value;

        searchNews(newsQuery);
        event.preventDefault();
}, false);
}

let myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

let init = {
    method: "GET",
    headers: myHeaders
}


function searchNews(q) {

    let url = "https://newsapi.org/v2/everything?q="+encodeURIComponent(q)+"&sortBy=popularity&apiKey=f23497267b0c4ad5b2a77fd6b0ff79e4";


    fetch(url, init)
        .then(responce => responce.json())
        .then(data => { displayResults(data) })
        .catch(error => {
            console.log(error)
        })
}

function displayResults(data) {
   // var source = document.getElementById("news-template").innerHTML;
    var template = Handlebars.compile(`
    <h1>News</h1>
    <div class="news_flexbox">
        <div class="news_box">
            {{#each articles}}
                <div class="news_box">
                    <img class="news_img" src="{{this.urlToImage}}" width=30% max-width=30% height=100% max-height=100% alt="">
                    <p class="news_title"> <a href="{{this.url}}"> {{this.title}} </a></p>
                    <p class="news_text_preview">{{this.description}}</p>
                    <p id="hours_posted">🕒 4h</p>
                    <button id="share_btn">🌐 Share</button>
                </div>
            {{/each}}
        </div>
    </div>
    `);
    
    console.log(data)
    document.getElementById("news-results").innerHTML = template(data);
}

function clearList(id) {
    document.getElementById(id).innerHTML = "";
}