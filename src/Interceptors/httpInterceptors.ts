import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { HelperFunctionService } from "src/services/helper-function.service";

@Injectable()
export class httpInterceptors implements HttpInterceptor{
    constructor(
        private helperFunctionService : HelperFunctionService
    ){}

    intercept(req : HttpRequest<any> , next : HttpHandler) :Observable<HttpEvent<any>>{
        req = req.clone({
            headers : req.headers.append("timeStamp",''+Date.now().toString()),
        });

        req = req.clone({
            body: this.helperFunctionService.encryption(req.body),
        });

        return next.handle(req).pipe(
            map((event:HttpEvent<any>)=>{
                if(event instanceof HttpResponse){
                    const modifyResponse ={
                        dataList : event.body,
                        createdBy : "Roshan Ghuge"
                    }
                    return event.clone({body:modifyResponse})
                }
                return event
            }),catchError((err)=>{
                return throwError(err.error.message)
            })
        )
    }
} 