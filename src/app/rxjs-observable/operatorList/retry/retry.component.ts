import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan, tap } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  data1 : any
  loading1 :boolean = false
  status1 = "No data"
  data2 : any
  loading2 :boolean = false
  status2 = "No data"
  constructor(
    private http : HttpClient
  ) { }

  ngOnInit(): void {
  }

  fetchDetails(){
    this.loading1 = true
    this.data1 = null
    this.status1 = "Data Fetching...."
    this.http.get<any>('https://fake-json-api.mock.beeceptor.com/users').pipe(retry(3))
    .subscribe((res)=>{
      this.loading1 = false
      this.data1 = res
      this.status1 = "data Fetched"
      },
      (err)=>{
        this.loading1 = false
        this.status1 = 'Error while fetching Data'
        throw Error(err)
      }
    )
  }

  fetchDetailswhen(){
    this.loading2 = true
    this.data2 = null
    this.status2 = "Data Fetching...."
    this.http.get<any>('https://fake-json-api.mock.beeceptor.com/users').pipe(
      retryWhen(
      err=> err.pipe(
        delay(3000),
        scan((retryCount)=>{
          if(retryCount >= 3){
            throw err;
          }else{
            retryCount = retryCount + 1;
            console.log(retryCount)
            this.status2 = "Retry Attempt" + " " + retryCount;
            return retryCount;
          }
        },0)
      )
    ))
    .subscribe((res)=>{
      this.loading2 = false
      this.data2 = res
      this.status2 = "data Fetched"
      },
      (err)=>{
        this.loading2 = false
        this.status2 = 'Error while fetching Data'
        throw Error(err)
      }
    )
  }

}

/*
What is retry in RxJS?
retry is an error-handling operator that resubscribes to the source observable if it encounters an error. 
You can specify how many times it should retry before finally failing.

Interview Answer Template:
retry is an RxJS operator used to automatically resubscribe to a failed observable up to a specified number of times. It's helpful when dealing with transient errors like network failures or unstable APIs. 
It prevents the stream from failing immediately and gives it a chance to succeed again.

Syntax :
retry(count: number): MonoTypeOperatorFunction<T>


Q: What happens if all retries fail?
The observable will emit an error after all retry attempts are exhausted.

Q: Does retry reset on success?
Yes. Once a retry is successful, it does not remember previous failures.

Q: What if I want to delay between retries?
Use retryWhen, which allows custom logic like exponential backoff.





retryWhen – Custom Retry Strategy

💬 Interview Answer:
"retryWhen lets you customize retry logic by taking in the error observable and returning a notifier observable that controls when and how retries should happen. 
It's powerful for handling retries with delays, exponential backoff, or conditional retrying."


scan – Accumulate Like reduce

💬 Interview Answer:
"scan is similar to reduce but works over time — it emits the accumulated value after each emission. 
It's useful for running totals, counters, or state accumulation in a reactive way."


 delay – Delay Each Emission

💬 Interview Answer:
"delay shifts the emission of each value forward by the given time. 
It's useful for simulating network latency or introducing artificial delays in streams."
*/
