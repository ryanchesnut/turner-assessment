

let getData = async(query) => {
    let poster = ''
    let url = `http://www.omdbapi.com/?t=${query}&apikey=e3ff4b66`
    let data = await fetch(url)
    data = data.json()
    data = await data.then(data => callBack(data))
    console.log(data.Poster)
    poster = data.Poster 
    return poster
}

const getPoster = (query) => {

    let poster = getData(query) 
    return poster
}

function callBack(data){
    return data;
}




export default getPoster