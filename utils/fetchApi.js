import axios from "axios";
export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'b9563930f5mshe9b7eed2e8f041ap1ae11bjsn29fccc716433'
        }
    })
    return data
}