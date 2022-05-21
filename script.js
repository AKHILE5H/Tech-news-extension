function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

fetch('https://gnews.io/api/v4/search?q=tech%20India&token=(YOUR TOKEN HERE)&lang=en')
    .then(data => data.json())
    .then(newsData => {

        //title
        const totalNum =  10;
        const articeNum = getRandomInt(totalNum);
        const newsTitletext = newsData.articles[articeNum].title;
        const newsTitle = document.getElementById('newsTitle');
        document.getElementById("newsLink").href= newsData.articles[articeNum].url;
        document.getElementById("newsLink").innerHTML="Link";
        newsTitle.innerHTML = newsTitletext;

        //image
        const imgurl= newsData.articles[articeNum].image;
        document.getElementById("newsImg").src=imgurl;

        //description
        const newsdesctext = newsData.articles[articeNum].description;
        const newsDesc = document.getElementById('newsDesc');
        newsDesc.innerHTML = newsdesctext;
    })

