import {GamesServices} from "../service/GamesServices";

export const GamesHandler = {

  

    loadGames(){
        return GamesServices.getAllGames();
    }
   
}

