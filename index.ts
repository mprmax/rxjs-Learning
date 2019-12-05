import { Observable } from "rxjs";
import { fromEvent, interval } from "rxjs";
import { switchMapTo, takeUntil } from "rxjs/operators"
//import { sample } from 'rxjs/operators';

//emit value every 1s
//const source = interval(1000);
//sample last emitted value from source every 2s
//const example = source.pipe(sample(interval(2000)));
//output: 2..4..6..8..
//const subscribe = example.subscribe(val => console.log(val));

const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

const start$ = fromEvent(startButton, "click");
const stop$ = fromEvent(stopButton, "click");
const interval$ = interval(1000);
const intervalThatStops$ = interval$.pipe( takeUntil(stop$) );

start$
.pipe(
  switchMapTo( intervalThatStops$ )
).subscribe((x)=>console.log(x));
