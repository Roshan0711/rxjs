import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-reply',
  templateUrl: './share-reply.component.html',
  styleUrls: ['./share-reply.component.scss']
})
export class ShareReplyComponent implements OnInit {
Laptop :any =[]
allProdcut :any =[
  {
    "description": "sdskf sdjfsdkf",
    "id": "p1",
    "imgUrl": "https://placeimg.com/400/250/any?t=1593468069167",
    "name": "Mobile",
    "price": 5500,
    "type": "product"
  },
  {
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque facere.",
    "id": "p2",
    "imgUrl": "https://placeimg.com/400/250/any?t=1593468069168",
    "name": "Laptop- dell",
    "price": 45000,
    "type": "product"
  },
  {
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque facere.",
    "id": "p3",
    "imgUrl": "https://placeimg.com/400/250/any?t=1593468068167",
    "name": "Laptop- apple",
    "price": 45000,
    "type": "product"
  },
  {
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque facere.",
    "id": "p4",
    "imgUrl": "https://placeimg.com/400/250/any?t=1593468069167",
    "name": "Mobile - Iphone",
    "price": 8500,
    "type": "mobile"
  },
  {
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque facere.",
    "id": "p5",
    "imgUrl": "https://placeimg.com/400/250/any?t=1593788069167",
    "name": "Mobile - Samsung",
    "price": 8500,
    "type": "mobile"
  },
  {
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque facere.",
    "id": "p6",
    "imgUrl": "https://placeimg.com/400/250/any?t=1593468065557",
    "name": "Mobile - Android",
    "price": 8500,
    "type": "mobile"
  },
  {
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque facere.",
    "id": "p7",
    "imgUrl": "https://placeimg.com/400/250/any?t=1598888069167",
    "name": "Washing Machine",
    "price": 8500,
    "type": "product"
  },
  {
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque facere.",
    "id": "p8",
    "imgUrl": "https://placeimg.com/400/250/any?t=1512168069167",
    "name": "Television",
    "price": 8500,
    "type": "product"
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}

/*
✅ RxJS shareReplay – Interview-Ready Explanation
Interview Answer:
"shareReplay is a multicasting and caching operator in RxJS that shares a single subscription to a source observable and replays the latest emitted values to new subscribers. 
It’s commonly used to cache API responses and avoid duplicate HTTP calls in Angular."

source$.pipe(shareReplay({ bufferSize: 1, refCount: false }))

bufferSize: number of past values to cache
refCount: true: automatically unsubscribe when there are no subscribers
refCount: false: keeps source alive after first subscription (good for caching)


| Feature              | Description                                      |
| -------------------- | ------------------------------------------------ |
| 🧠 Multicasts        | Shares single source subscription                |
| 🧠 Replays value     | Sends last emitted values to **new** subscribers |
| ✅ Avoids duplication | Prevents duplicate HTTP/API calls                |
| 🧠 Perfect for       | Angular services & caching scenarios             |

Q: Why use shareReplay with HTTP requests?
To avoid multiple API calls for the same data when multiple components or pipes subscribe.


| Feature    | `share()`              | `shareReplay()`                    |
| ---------- | ---------------------- | ---------------------------------- |
| Caching    | ❌ No                   | ✅ Yes (with bufferSize)            |
| Replay old | ❌ New subs get nothing | ✅ New subs get last value(s)       |
| Use case   | Event streams          | HTTP caching, latest state sharing |


Q: What’s refCount?
refCount: true — the source will auto-unsubscribe when no subscribers are left (good for memory).
refCount: false — source stays alive even if there are no subscribers (good for full caching).

| Feature                  | Description                            |
| ------------------------ | -------------------------------------- |
| Type                     | Multicasting + Replay                  |
| Use case                 | Caching, optimizing HTTP/data services |
| Replays values?          | ✅ Yes (set via `bufferSize`)           |
| Prevents re-subscription | ✅ Yes                                  |
| Best in Angular          | ✅ Services, API wrappers               |

*/
