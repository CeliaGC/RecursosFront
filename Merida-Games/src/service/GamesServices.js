
import axios from "axios";

 const apiClient = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})


export const GamesServices = {

async getAllGames() {
    let response = await apiClient.get("/games");
    let allGames = response.data;
    return allGames;
}


}