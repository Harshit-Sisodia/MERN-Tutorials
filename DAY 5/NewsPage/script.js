console.log("......APP STARTED......");

function callAPI() {
  fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9252a3637a3842038275e1cd589a79c9"
  )
    .then((res) => {
      // console.log(res);
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      renderUI(data);
    });
}

function renderUI(data) {
  // got the articles from data
  const articles = data.articles;

  console.log(articles);

  const root = document.getElementById("root");

  // single article from the array
  for (let i = 0; i < articles.length; i++) {
    const ar = articles[i];

    // const ar = articles[0];
    // console.log(ar);

    //created parent div
    const div = document.createElement("div");
    div.setAttribute("class", "news-card");

    const h3 = document.createElement("h3");
    div.innerText = ar.title;
    div.appendChild(h3);

    const img = document.createElement("img");
    img.src = ar.urlToImage;
    div.appendChild(img);

    const a = document.createElement

    root.appendChild(div);
  }
}
callAPI();

// renderUI();
