import { NgModule } from "@angular/core";
import { MayusPipe } from "./mayusPipe.pipe";
import { CommonModule } from "@angular/common";
import { CapitalizePipe } from "./capitalizePipe.pipe";
import { SlicePipe } from "./slicePipe.Pipe";
import { CutPipe } from "./cutStringPipe.pipe";
import { OrderArrayPipe } from "./order-array.pipe";

@NgModule({
    declarations: [
        MayusPipe,
        CapitalizePipe,
        SlicePipe,
        CutPipe,
        OrderArrayPipe
    ],
    exports: [
        MayusPipe,
        CapitalizePipe,
        SlicePipe,
        CutPipe,
        OrderArrayPipe
    ],
    imports: [
        CommonModule
    ]
})

export class CustomPipesModule { }