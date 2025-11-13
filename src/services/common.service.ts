import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  })
  constructor(
    private http : HttpClient
  ) { }

  getApi(url:string , config? : any) : Observable<any> {
    return this.http.get<any>(url,{headers:this.headers , observe : 'response'}).pipe(
     map((data:any)=>{
      if(data.status == 200){
        return data.body
      }
     }),catchError(this.handleError)
    )
  }
  postApi(url:string,req:any) : Observable<any> {
    return this.http.post<any>(url,req,{headers:this.headers , observe : 'response'}).pipe(
     map((data:any)=>{
      if(data.ok){
        return data.body
      }
     }),catchError(this.handleError)
    )
  }

  private handleError(error : HttpErrorResponse){
    return throwError(error)
  }
}
