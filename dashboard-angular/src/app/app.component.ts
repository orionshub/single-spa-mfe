import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { counter } from "@orionshub/shared-state";
import { ParcelModule } from "single-spa-angular/parcel";
import { mountRootParcel } from 'single-spa';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ParcelModule]
})
export class AppComponent implements OnInit, OnDestroy {

  count: number = 0;
  counterSub: Subscription | null = null;
  mountParcel = mountRootParcel;
  reactParcelConfig: any;

  ngOnInit() {
    this.counterSub = counter.getCounter().subscribe((value: number) => {
      this.count = value;
    });
    this.reactParcelConfig = (window as any).System.import("@orionshub/dashboard-actions");
  }

  resetCounter() {
    counter.setCounter(0);
  }

  ngOnDestroy() {
    if (this.counterSub) {
      this.counterSub.unsubscribe();
      this.counterSub = null;
    }
  }
}
