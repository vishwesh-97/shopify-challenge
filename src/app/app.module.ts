import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { ApiHandlerService } from './services/api-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      closeButton: true,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'increasing',
    }),
  ],
  providers: [
    ApiHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
