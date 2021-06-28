import { bindable } from "@aurelia/runtime-html";
import { IJoke } from "../domain/IJoke";

export class SimpletableElement{
    @bindable private data: IJoke[] = [];
    @bindable private category: string;
}