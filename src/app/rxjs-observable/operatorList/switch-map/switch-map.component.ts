import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, Observable, of, throwError } from 'rxjs';
import { catchError, concatMap, debounceTime, delay, distinctUntilChanged, map, mergeMap, switchAll, switchMap, tap } from 'rxjs/operators';
import { RxjsServiceService } from 'src/services/rxjs-service.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit , AfterViewInit {
  @ViewChild('inputText1') inputText1! : ElementRef<any>
  loading: boolean = false;
  youtubeVideos :any =[]

  constructor(private rxjs : RxjsServiceService,
    private http : HttpClient
  ) { }

  ngOnInit(): void {
    const source = from(['tech', 'comedy', 'news']);

    //Ex :1 | Map

    source.pipe(map(res=>this.getData(res))).subscribe((res)=>res.subscribe((res2)=>{
      this.rxjs.LiAppend(res2,"elId1")
    }))


    //Ex :2 | Map + Switch All

    source.pipe(map(res=>this.getData(res)),switchAll()).subscribe((res)=>{
      this.rxjs.LiAppend(res,"elId2")
    })

    //Ex :3 | SwtichMap

    source.pipe(switchMap(res=>this.getData(res))).subscribe((res)=>{
      this.rxjs.LiAppend(res,"elId3")
    })

    // Ex : 4 | comparision between concatMap , MergeMap , switchMap
    source.pipe(mergeMap(res=>this.getData(res))).subscribe((res)=>{
      this.rxjs.LiAppend(res,"elId4")
    })

    source.pipe(concatMap(res=>this.getData(res))).subscribe((res)=>{
      this.rxjs.LiAppend(res,"elId5")
    })

    source.pipe(switchMap(res=>this.getData(res))).subscribe((res)=>{
      this.rxjs.LiAppend(res,"elId6")
    })
  }

  ngAfterViewInit(): void {
    // Ex : 5 | search Youtube videos
    fromEvent(this.inputText1.nativeElement,'keyup').pipe(
      debounceTime(500),
      map((event: any) => event.target.value),
      distinctUntilChanged(),
      tap(() => this.loading = true),
      tap(() => this.youtubeVideos = []),
      switchMap((term : any)=>{
        if(!term){
          this.loading = false;
          return of([])
        }
        return this.getDatafromService(term)
      })).subscribe((res:any)=>{
        this.youtubeVideos = res;
        this.loading = false;
      },(err)=>{
        throwError(err)
      }
    )
  }  

  getData(data:any) : Observable<any>{
    return of(data + ' ' + 'Videos Uploaded').pipe(delay(2000))
  }

  getDatafromService(term:any) : Observable<any> {
    let apiKey = 'AIzaSyB3QPLUVOo5SZMuGBkqId9emaWkr7KQpsw';
    return this.http.get<any>(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${encodeURIComponent(term)}&key=${apiKey}`).pipe(
      map(res => res.items.map((item: any) => ({
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`
      }))),
      catchError((error:HttpErrorResponse)=>{
       return throwError((error))
      })
    )
  }

}


/*
✅ RxJS switchMap – Interview-Ready Explanation
💬 Interview Answer:
"switchMap is a higher-order mapping operator in RxJS that maps each source value to an inner observable and automatically unsubscribes from the previous inner observable when a new value is emitted. 
It's ideal for handling scenarios like user input where only the latest result matters."



| Use Case                         | Why `switchMap`?                            |
| -------------------------------- | ------------------------------------------- |
| 🔍 Real-time search bar          | Cancel previous queries when input changes  |
| ✅ Auto-complete / live filtering | Keep only latest data                       |
| 📬 Debounced form submissions    | Prevent overlapping HTTP requests           |
| 🧪 Route param change → API call | Cancel old request if route changes quickly |



| Operator     | Cancels Previous | Order Preserved | Use When                        |
| ------------ | ---------------- | --------------- | ------------------------------- |
| `switchMap`  | ✅ Yes            | ❌ No            | Latest value only (live search) |
| `mergeMap`   | ❌ No             | ❌ No            | All requests should complete    |
| `concatMap`  | ❌ No             | ✅ Yes           | Sequential execution needed     |
| `exhaustMap` | ✅ Ignores new    | ❌ No            | Prevent duplicate submissions   |

*/