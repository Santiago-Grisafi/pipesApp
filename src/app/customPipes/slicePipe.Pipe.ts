import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'SlicePipe'
})
export class SlicePipe implements PipeTransform {
    transform(string: string, value: number): string {
        return string.slice(0, value);
    }
}