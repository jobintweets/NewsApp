import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of} from 'rxjs' ;
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  api_key = '62ba0e9001c24018ae6e06755fa61706' ;
  constructor(private http: HttpClient) { }
  initSources (): Observable<any> {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + `${this.api_key}`);
    
 }
 initArticles (): Observable<any> {
  return this.http.get('https://newsapi.org/v2/top-headlines?sources=time&apiKey=' + this.api_key);
 }
 getArticlesByID (source: String): Observable<any> {
  return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
 }

}
