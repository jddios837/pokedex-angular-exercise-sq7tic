import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PokedexModule } from './modules/pokedex.module';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule, 
    PokedexModule,
    //FormsModule,
    //ReactiveFormsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
