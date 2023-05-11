let wordnikAPI = "https://api.github.com/users/jeresig"
let github = "https://api.giphy.com/v1 /clips/search?api_key={API_KEY}&q=cats&limit=5"


function setup() {
    fetch(wordnikAPI)
        .then(response => { return response.json(); })
        .then(json => {
            createImg(json.word);
            return fetch(giphyAPI + json.word)
        })

        .then(response => { return response.json(); })

        .then(json => {
            createImg(json.data[0].images['fixed_height_small'].url);
        })
        .catch((err) => console.log(err));
}