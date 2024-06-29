import { useEffect, useState } from "react";
import { counter } from "@orionshub/shared-state";
import "./header.component.css";

const Header = () => {
  const [count, setCount] = useState(0);
  let counterSub = null;

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
    <nav className="nav-wrapper">
      <div className="header-title">OrionsHub</div>
      <div className="header-count">Click Count: {count}</div>
    </nav>
  );
};

export default Header;
