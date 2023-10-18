
const getAnimes = async (page: string) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime?page=${page}`);
    const jsonDATA = await response.json();
    return jsonDATA;
}

export default getAnimes;