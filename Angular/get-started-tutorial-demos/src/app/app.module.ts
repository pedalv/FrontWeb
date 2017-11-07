import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './root/root.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { HeroesComponent } from './heroes/heroes.component';

import { LoggerService } from './logger.service';

@NgModule({
  declarations: [
    AppComponent,
    WellcomeComponent,
    HeroesComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ 
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }