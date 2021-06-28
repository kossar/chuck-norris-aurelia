import { HttpClient, inject } from "aurelia";
import { IJoke } from "../domain/IJoke";

@inject()
export class JokesService{

    private dataList: IJoke[] = [];

    constructor(private httpClient: HttpClient){

    }

    async getJoke(category: string): Promise<IJoke> {

        const response = await this.httpClient.get("https://api.chucknorris.io/jokes/random?category=" + category, {cache: "no-store"});
        console.log(response);
        if(response.ok){
            const data = (await response.json()) as IJoke;
            return data;
        }
        return null;
    }

    async getJokes(category: string): Promise<IJoke[]>{
        this.dataList = [];
        let queryCount: number = 5;
        for (let index = 0; index < queryCount; index++) {
            let joke: IJoke = await this.getJoke(category);
            if (this.containsJoke(joke, this.dataList)) {
                console.log("JokesService -> getJokes -> contains");    
                queryCount++;
            }else{
                this.dataList = [...this.dataList, joke];
            }
           
        }   
        return this.dataList;
    }

    containsJoke(joke: IJoke, jokes: IJoke[]): boolean{
        return jokes.some(elem => elem.id === joke.id);
    }
}