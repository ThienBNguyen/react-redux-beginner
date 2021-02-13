import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../src/actions/index";
import { decrement } from "../src/actions/index";
function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> counter {counter}</h1>

      <button onClick={() => dispatch(increment(5))}>increase</button>
      <button onClick={() => dispatch(decrement())}>decrease</button>
      {isLogged ? <h3>Valuable Information I shouldnt see</h3> : <h3>none</h3>}
      <button class="btn btn-primary" type="button">
        <i class="fas fa-search fa-sm">jkdfndgklsjd</i>
      </button>
    </div>
  );
}

export default App;
