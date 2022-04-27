const Actions = ({ actionCall, actionHang, callStatus }) => {
  return (
    <>
      {callStatus && (
        <>
          <a onClick={actionCall} href="#phone" className="off">
            Call
          </a>
          <a onClick={actionHang} href="#phone" className="hang active">
            Hang
          </a>
        </>
      )}
      {!callStatus && (
        <>
          <a onClick={actionCall} href="#phone" className="call active">
            Call
          </a>
          <a onClick={actionHang} href="#phone" className="off">
            Hang
          </a>
        </>
      )}
    </>
  );
};

export default Actions;
