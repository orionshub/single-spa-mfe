import { BehaviorSubject } from "rxjs"

class Counter {

    private counter: BehaviorSubject<number>;

    constructor(defaultStartingValue: number = 0) {
        this.counter = new BehaviorSubject(defaultStartingValue);
    }

    setDefaultStartingValue(value: number) {
        this.setCounter(value);
    }
    
    setCounter (value: number) {
        this.counter.next(value);
    }
    
    getCounter() {
        return this.counter.asObservable();
    }
}

export const counter = new Counter(0);
