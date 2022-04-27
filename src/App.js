import { useState } from "react";
import Actions from "./components/Actions/Actions";
import Display from "./components/Display/Display";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  const [callStatus, setCallStatus] = useState(true);

  const [numbers, setNumbers] = useState([6, 7, 8, 9]);

  const [infoText, setInfoText] = useState("Iphone de Albert");

  const actionCall = () => {
    setCallStatus(true);
    setInfoText("Calling...");
  };

  const actionHang = () => {
    setInfoText("Iphone de Albert");
    setNumbers([]);
  };

  const addNumber = (number) => {
    if (numbers.length === 9) {
      return;
    }
    if (numbers.length === 8) {
      setCallStatus(false);
    }
    setNumbers([...numbers, number]);
  };

  const deleteNumbers = () => {
    setNumbers([]);
  };

  return (
    <div className="container" id="phone">
      <Info text={infoText} />
      <main className="phone">
        <Keyboard deleteAction={deleteNumbers} keyAction={addNumber} />
        <div className="actions">
          <Display number={numbers} />
          <Actions
            actionCall={actionCall}
            actionHang={actionHang}
            callStatus={callStatus}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
