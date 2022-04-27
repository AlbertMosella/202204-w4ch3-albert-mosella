const Key = ({ number, action }) => {
  return (
    <li>
      <button onClick={() => action(number)} className="key">
        {number}
      </button>
    </li>
  );
};

export default Key;
