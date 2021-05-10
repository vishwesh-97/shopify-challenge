import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiHandlerService } from '../services/api-handler.service';

@Component({
    selector: 'app-search-movie',
    templateUrl: './search-movie.component.html',
    styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

    loading: boolean = false;
    searchMovieName: any = null;
    // resData: any = null;
    movieList = [];
    nominationList = [];
    movieIdList = [];

    constructor(private router: Router,
        private http: ApiHandlerService,
        private toastr: ToastrService) { }

    ngOnInit(): void {
    }

    searchMovie() {
        if (this.searchMovieName) {
            console.log(this.searchMovieName);
            this.http.get(`https://www.omdbapi.com/?s=${this.searchMovieName}&apikey=302dcd3c`).subscribe(res => {
                console.log(res);
                this.movieList = res.Search;
            }, err => {
                console.log("error while fetching data", err);
            });
        }
    }

    addNomination(id, title) {
        if (id && title) {
            if (!this.movieIdList.includes(id)) {
                this.nominationList.push({
                    "id": id,
                    "movie_title": title
                });
                this.movieIdList.push(id);
                this.toastr.success('', 'Nomination added!', {
                    timeOut: 2000,
                });
            }
        }
    }

    removeNomination(id) { 
        if (id && this.nominationList.length > 0) {
            for (let i = 0; i < this.nominationList.length; i++) {
                if (this.nominationList[i].id === id) {
                    this.nominationList.splice(i, 1);
                    let index = this.movieIdList.indexOf(id);
                    this.movieIdList.splice(index, 1);
                    this.toastr.error('', 'Nomination removed!', {
                        timeOut: 2000,
                    });
                }
            }
        }
    }

}
