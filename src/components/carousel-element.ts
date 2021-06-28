import { bindable } from "@aurelia/runtime-html";
import { IJoke } from "../domain/IJoke";

export class CarouselElement{
    @bindable public itemNo:number;
    @bindable public item: IJoke;
}