import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchMovieComponent } from './search-movie/search-movie.component';

const routes: Routes = [
    // default route
    { 
        path: "", 
        component: SearchMovieComponent 
    },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
