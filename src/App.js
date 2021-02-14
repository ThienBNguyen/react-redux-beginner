import "./App.scss";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../src/actions/index";
import { decrement } from "../src/actions/index";
import { Line } from "react-chartjs-2";
import { getData } from "./actions/bitcoinAction";
function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  const state = useSelector(state => state.bitcoin);
  const [num, setNum] = React.useState(15);

  const fetchData = time => {
    //Fetch data from redux using time
    dispatch(
      getData({
        time: time,
        number: num
      })
    );
  };
  return (
    <div className="App">
      <h1> counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>increase</button>
      <button onClick={() => dispatch(decrement())}>decrease</button>
      {isLogged ? <h3>Valuable Information I shouldnt see</h3> : <h3>none</h3>}
      <button class="btn btn-primary" type="button">
        <i class="fas fa-search fa-sm">jkdfndgklsjd</i>
      </button>

      <div className={"btns-wrapper"}>
        <button onClick={() => fetchData("1min")}>1 Min</button>
        <button onClick={() => fetchData("5min")}>5 Min</button>
        <button onClick={() => fetchData("15min")}>15 Min</button>

        <input onChange={e => setNum(e.target.value)} />
        {state.loading && <p>Loading...</p>}
      </div>
      <div className={"chart-wrapper"}>
        <Line data={state.data} />
      </div>
    </div>
  );
}

export default App;
