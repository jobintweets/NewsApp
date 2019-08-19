import { Component , OnInit } from '@angular/core';
import { NewsApiService } from './services/news-api.service';
import { map, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'news-application';
  Articles: Array<any>;
  Sources: Array<any>;
  constructor(private newsapi: NewsApiService ) {

  }
  ngOnInit() {
    // load articles
  this.newsapi.initArticles().subscribe(data => this.Articles = data['articles']);
  

// load news sources
this.newsapi.initSources().subscribe(data => this.Sources = data['sources']);

}
searchArticles(source) {
  console.log('selected source is: ' + source);
  this.newsapi.getArticlesByID(source).subscribe(data => this.Articles = data['articles']);
}
}

