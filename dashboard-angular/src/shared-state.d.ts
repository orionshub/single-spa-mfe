declare module "@orionshub/shared-state" {
    declare class Counter {
        private counter;
        constructor(defaultStartingValue?: number);
        setDefaultStartingValue(value: number): void;
        setCounter(value: number): void;
        getCounter(): import("rxjs").Observable<number>;
    }
    export declare const counter: Counter;
};
