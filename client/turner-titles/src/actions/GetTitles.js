
require('dotenv').config()

const getTitles = async(query) => {
    let url 
    if(query !== undefined && query.length !== 0){
        url = `http://localhost:3001/titles/${query}`
    } 
    else{
        return []
    }
  
    let data = await fetch(url).catch(err => console.log(err))
    let arr = data.json()
    return arr
}


export default getTitles