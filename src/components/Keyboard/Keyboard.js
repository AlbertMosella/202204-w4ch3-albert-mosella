import Key from "../Key/Key";

const Keyboard = () => {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        <Key className={"key"} text={1} />
        <Key className={"key"} text={2} />
        <Key className={"key"} text={3} />
        <Key className={"key"} text={4} />
        <Key className={"key"} text={5} />
        <Key className={"key"} text={6} />
        <Key className={"key"} text={7} />
        <Key className={"key"} text={8} />
        <Key className={"key"} text={9} />
        <Key className={"key"} text={0} />
        <Key className={"key big"} text={"delete"} />
      </ol>
    </div>
  );
};

export default Keyboard;
