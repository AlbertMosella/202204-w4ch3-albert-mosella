import Actions from "./components/Actions/Actions";
import Display from "./components/Display/Display";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  return (
    <div className="container">
      <Info text={"Calling..."} />
      <main className="phone">
        <Keyboard />
        <div className="actions">
          <Display number={"667359961"} />
          <Actions />
        </div>
      </main>
    </div>
  );
}

export default App;
