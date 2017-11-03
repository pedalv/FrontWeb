import { NgModule, } from '@angular/core';
import { MyEmptyTextDirective } from './my-empty-text.directive';
import { MyEmptyTextService } from './my-empty-text.service';
@NgModule({
    imports: [],
    exports: [MyEmptyTextDirective],
    declarations: [MyEmptyTextDirective],
    providers: [MyEmptyTextService],
})
export class MyEmptyTextModule { }
