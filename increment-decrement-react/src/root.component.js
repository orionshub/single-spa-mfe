import { useState, useEffect } from "react";
import { counter } from "@orionshub/shared-state";
import Increment from "./components/increment.component";
import Decrement from "./components/decrement.component";
import "./index.css";

const DashboardActions = (/* props */) => { // props are single spa props here

  let counterSub = null;
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    counter.setCounter(count + 1);
  };

  const decrementCount = () => {
    counter.setCounter(count - 1);
  };

  useEffect(() => {
    counterSub = counter.getCounter().subscribe((value) => {
      setCount(value);
    });

    return () => {
      if (counterSub) {
        counterSub.unsubscribe();
        counterSub = null;
      }
    };
  }, []);

  return (
    <div className="action-comps">
      <Increment actionFn={incrementCount} />
      <Decrement actionFn={decrementCount} />
    </div>
  );
}

export default DashboardActions;
