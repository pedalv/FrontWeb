import { Directive,ElementRef,AfterViewInit } from '@angular/core';
import { MyEmptyTextService } from './my-empty-text.service';
@Directive({ selector: '[myemptytext]' })
export class MyEmptyTextDirective implements AfterViewInit{
    
    constructor(private el:ElementRef,
        private empservice:MyEmptyTextService) {

    }

    ngAfterViewInit(){
        
        let content:string = this.el.nativeElement.innerHTML;
       
        if(!content){
            //if there is no content,show message getting from EmptyTextService
            this.el.nativeElement.innerHTML = this.empservice.get();
        }
    }
}