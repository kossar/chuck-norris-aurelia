import { bindable } from "aurelia";
import { IJoke } from "../domain/IJoke";

export class JokeElement{
    @bindable public item: IJoke;
    @bindable public itemNo: number;

    getitemNo(): number{
        return this.itemNo + 1;
    }

}