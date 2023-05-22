import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'CapitalizePipe',
})
export class CapitalizePipe implements PipeTransform {

    transform(string: string): string {
        return string.substring(0, 1).toUpperCase() + string.substring(1);
    }

}