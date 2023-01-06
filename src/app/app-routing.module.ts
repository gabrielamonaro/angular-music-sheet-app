import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { ResultsComponent } from './pages/results/results.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'main', component: MainComponent
  },
  {
    path: 'result', component: ResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
