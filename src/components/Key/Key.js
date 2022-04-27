const Key = ({ number, action }) => {
  return (
    <li>
      <button onClick={action} className="key">
        {number}
      </button>
    </li>
  );
};

export default Key;
