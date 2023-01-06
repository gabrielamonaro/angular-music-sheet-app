import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { ResultsComponent } from './pages/results/results.component';
import { BtnComponent } from './components/btn/btn.component';
import { CardComponent } from './components/card/card.component';
import { TitleComponent } from './components/title/title.component';
import { PointsComponent } from './components/points/points.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    ResultsComponent,
    BtnComponent,
    CardComponent,
    TitleComponent,
    PointsComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
