function makeAnimeCard(name, img, score, synopsis) {
    let cardEl = document.createElement("article");
    cardEl.className = "anime_card";

    let imgEl = document.createElement("img");
    imgEl.src = img;
    imgEl.className = "anime_img";
    imgEl.alt = "Anime Image";
    cardEl.appendChild(imgEl);

    let containerEl = document.createElement("div");
    containerEl.className = "anime_info";

    let titleEl = document.createElement("h2");
    titleEl.className = "anime_title";
    titleEl.innerText = name;
    containerEl.appendChild(titleEl);

    let synEl = document.createElement("p");
    synEl.className = "anime_synopsis";
    synEl.innerText = synopsis;
    containerEl.appendChild(synEl);
    
    let scoreEl = document.createElement("div");
    scoreEl.className = "anime_score";
    scoreEl.innerText = score;
    containerEl.appendChild(scoreEl);

    cardEl.appendChild(containerEl);

    let bodyEl = document.querySelector("body");
    bodyEl.appendChild(cardEl);
}

let url = "https://api.jikan.moe/v4/anime?type=tv";

async function fetchAnime(){
    let response = await fetch(url);
    let json = await response.json();

    for(let i = 0; i < 10; i++) {
        let animeData = json.data[i];
        makeAnimeCard(animeData.title, animeData.images.webp.large_image_url, animeData.score, animeData.synopsis);
}
}
fetchAnime();