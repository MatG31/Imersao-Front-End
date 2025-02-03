//Artist Search consts
const searchInput = document.getElementById('artist-search-input');
const resultsArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

//Music Search consts
const searchMusicInput = document.getElementById('music-search-input');
const resultMusic = document.getElementById('result-music');

//Artist Search

function requestApi(userSearch){
    const url = `http://localhost:3000/artists?name_like=${userSearch}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result){
    resultPlaylist.classList.add('hidden');
    resultMusic.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');
    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    })
    resultsArtists.classList.remove('hidden');
}

document.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    if(searchTerm === ''){
        resultPlaylist.classList.add('hidden');
        resultMusic.classList.add('hidden');
        resultsArtists.classList.remove('hidden');
        return;
    }
    requestApi(searchTerm);
})

/*
//Musics Search

function requestMusicApi(userSearch2){
    console.log(userSearch2)
    const url2 = `http://localhost:3000/musics?title_like=${userSearch2}`;
    console.log(url2);
    fetch(url2)
        .then((toConvert) => toConvert.json())
        .then((finalResult) => displayMusicResult(finalResult))
        .catch((error) => console.log(error))
}

function displayMusicResult(resultToReceive){
    resultPlaylist.classList.add('hidden');
    resultsArtists.classList.add('hidden');
    const musicImg = document.getElementById('music-img');
    const musicTitle = document.getElementById('music-title');
    const musicAuthor = document.getElementById('music-author');
    resultToReceive.forEach((item) => {
        musicImg.src = item.urlImg;
        musicTitle.innerText = item.title;
        musicAuthor.innerText = item.artist;
    })
    resultMusic.classList.remove('hidden');
}

document.addEventListener('input', () => {
    const searchedMusic = searchMusicInput.value.toLowerCase();
    if(searchedMusic === ''){
        resultsArtists.classList.add('hidden');
        resultPlaylist.classList.add('hidden');
        resultMusic.classList.remove('hidden');
        return;
    }
    requestMusicApi(searchedMusic);
})*/
