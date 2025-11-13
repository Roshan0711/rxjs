import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn : "root"
})
export class CanLoadGaurd implements CanLoad{
    canLoad(route: Route, segments: UrlSegment[]):  boolean {
        console.log(route,segments)
        throw new Error("Method not implemented.");
    }

}