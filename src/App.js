import Actions from "./components/Actions/Actions";
import Display from "./components/Display/Display";
import Info from "./components/Info/Info";

function App() {
  return (
    <div className="container">
      <Info text={"Calling..."} />
      <main className="phone">
        <div className="keyboard-container">
          <ol className="keyboard">
            <li>
              <button className="key">1</button>
            </li>
            <li>
              <button className="key">2</button>
            </li>
            <li>
              <button className="key">3</button>
            </li>
            <li>
              <button className="key">4</button>
            </li>
            <li>
              <button className="key">5</button>
            </li>
            <li>
              <button className="key">6</button>
            </li>
            <li>
              <button className="key">7</button>
            </li>
            <li>
              <button className="key">8</button>
            </li>
            <li>
              <button className="key">9</button>
            </li>
            <li>
              <button className="key">0</button>
            </li>
            <li>
              <button className="key big">delete</button>
            </li>
          </ol>
        </div>
        <div className="actions">
          <Display number={"667359961"} />
          <Actions />
        </div>
      </main>
    </div>
  );
}

export default App;
