import Key from "../Key/Key";

const Keyboard = ({ keyAction, deleteAction }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {numbers.map((number) => {
          return <Key key={number} number={number} action={keyAction} />;
        })}
        <li>
          <button onClick={deleteAction} className="key big">
            delete
          </button>
        </li>
      </ol>
    </div>
  );
};

export default Keyboard;
