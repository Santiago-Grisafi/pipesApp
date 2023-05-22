import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'CutPipe'
})
export class CutPipe implements PipeTransform {
    transform(string: string): string[] {
        let stringArray: string[] = string.split("");
        return stringArray;
    }
}