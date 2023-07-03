const BAST_PATH = "https://gateway.marvel.com:443"
const API_KEY = process.env.REACT_APP_PUBLIC_KEY

export async function comicsList() {
    return await fetch(`${BAST_PATH}/v1/public/comics?apikey=${API_KEY}`).then(res =>
        res.json()
    )
}

export async function eventsList() {
    return await fetch(`${BAST_PATH}/v1/public/events?apikey=${API_KEY}`).then(res =>
        res.json()
    )
}

export async function charactersList(props) {
    const customLimit = props.queryKey[1].numLimit
    const page = props.queryKey[1].page
    const offset = (page - 1) * customLimit + 1
    return await fetch(`${BAST_PATH}/v1/public/characters?limit=${customLimit}&offset=${offset}&apikey=${API_KEY}`).then(res =>
        res.json()
    )
} 
