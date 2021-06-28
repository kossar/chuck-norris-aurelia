import { IJoke } from "../domain/IJoke";
import { JokesService } from "../services/jokes-service";
import { AppState } from "../state/app-state";

export class PoliticalView{
    private readonly CATEGORY = "political";
    private data: IJoke [] = [];

    constructor(
        private jokesService: JokesService,
        private appState: AppState
        ){

    }

    async attached(){
        console.log("Political view attached");
        this.data = await this.jokesService.getJokes(this.CATEGORY);
        // for (let index = 0; index < 5; index++) {
        //     this.data.push(await this.jokesService.getJoke(this.CATEGORY));
            
        // }
        
    }

    unbinding() {
        this.appState.addJokes(this.data);
        console.log("political detached"); 
    }
}