import { bindable, EventAggregator, IDisposable } from "aurelia";
import { IJoke } from "../domain/IJoke";

export class CarouselContainer{
    public data: IJoke[] = [];
    private subscriptions: IDisposable[] = [];

    constructor(private eventAggregator: EventAggregator) {
    
        this.subscriptions.push(
          this.eventAggregator.subscribe('data-loaded', (joke: IJoke) => this.data = [...this.data, joke])
        );
        // this.subscriptions.push(
        //     this.eventAggregator.subscribe('data-loaded', (joke: IJoke) => console.log("joke: " + joke.value))
        //   );
    
      }

      getUrl(number)
      {
        return require(`../assets/a${number}.jpg`);
      }
}