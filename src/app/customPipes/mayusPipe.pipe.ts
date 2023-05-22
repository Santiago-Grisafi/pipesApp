import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'MayusPipe'
})
export class MayusPipe implements PipeTransform {
    transform(string: string): string {
        return string.toUpperCase();
    }

}