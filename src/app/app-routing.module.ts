import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { NumbersComponent } from "./pipes/numbers/numbers.component";
import { WordsComponent } from "./pipes/words/words.component";
import { DatesComponent } from "./pipes/dates/dates.component";
import { NotcommonpipesComponent } from "./pipes/notcommonpipes/notcommonpipes.component";
import { CustomPipesComponent } from "./pipes/custom-pipes/custom-pipes.component";

const routes: Routes = [
    { path: "number", component: NumbersComponent },
    { path: "word", component: WordsComponent },
    { path: "date", component: DatesComponent },
    { path: "notcommon", component: NotcommonpipesComponent },
    { path: "custompipes", component: CustomPipesComponent },
    { path: "**", redirectTo: "number", pathMatch: "full" }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ],
})

export class AppRoutingModule { }