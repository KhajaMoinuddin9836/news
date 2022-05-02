// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();


const countries = {

    "in": "Indai",
    "ch": "china",
    "us": "Usa",
    "uk": "United Kingdom",
    "nz": "New Zealand"
}

const url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}"


const news = document.querySelector("search_input");

news.forEach(tag => {
    for(const country_code in countries)
    {
        console.log(country_code)
    }
})
