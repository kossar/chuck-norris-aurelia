import { IJoke } from "../domain/IJoke";

export class AppState{
    public jokes: readonly IJoke[] = [];

    getJokes(category: string): IJoke[]{
        console.log('Get jokes, cat: ' + category);
        return this.jokes.filter((elem) => elem.categories.some(el => el === category));
    }
    addJokes(jokes: IJoke[]): void{
        this.jokes = [...this.jokes, ...jokes];
    }
    addJoke(joke: IJoke): void {
        this.jokes = [...this.jokes, joke]
    }

    removeJoke(elemNo: number): void {
        this.jokes = this.jokes.filter((elem, index) => index !== elemNo);
    }

    countJokes(): number {
        return this.jokes.length;
    }
}