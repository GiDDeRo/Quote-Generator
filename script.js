var quote = document.getElementById("quote");
var author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");
const btnTweet = document.getElementById("tweet");
const copy = document.querySelector(".copy");
const footer = document.querySelector("footer");
const link = document.querySelector("#p-link")

const api_url = "https://api.quotable.io/random"

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();

    quote.innerHTML = `"${data.content}"`;
    author.innerHTML = "- " + data.author;

    console.log(data)
}

getQuote(api_url)

btnTweet.addEventListener("click", e=> {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML)
});

copy.addEventListener("click", e=> {
    navigator.clipboard.writeText(quote.innerHTML)
});

footer.addEventListener("mouseover", e=> {
    link.style.color = "white";
})

footer.addEventListener("mouseout", e=> {
    link.style.color = "black";
    link.style.fontWeight = "600";
})


