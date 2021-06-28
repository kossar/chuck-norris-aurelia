import { EventAggregator, IDisposable } from "aurelia";
import { IJoke } from "../domain/IJoke";
import { JokesService } from "../services/jokes-service";
import { AppState } from "../state/app-state";

export class AnimalView {
    private readonly CATEGORY = "animal";
    private data: IJoke [] = [];

    private subscriptions: IDisposable[] = [];
    
    constructor(
        private jokesService: JokesService,
        private appState: AppState,
        private eventAggregator: EventAggregator
        ){

    }

    async attached(){
        console.log("animal view attached");
        //this.data = await this.jokesService.getJoke(this.CATEGORY);
        for (let index = 0; index < 5; index++) {
            let joke: IJoke = await this.jokesService.getJoke(this.CATEGORY);
            this.data.push(joke);
            this.eventAggregator.publish('data-loaded', joke);   
        }   
        
    }
    
    unbinding() {
        this.appState.addJokes(this.data);
        this.subscriptions.forEach(subscription => subscription.dispose());
        this.subscriptions = [];
        console.log("career detached"); 

    }
}