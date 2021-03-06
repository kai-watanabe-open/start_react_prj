function CountUpMain(props) {
  const { plus, minus, count } = props;

  const handleClick = (type) => {
    type === "PLUS" ? plus() : minus();
  };

  return (
    <div className="count-up">
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          handleClick("PLUS");
        }}
      >
        Up
      </button>
      <button
        onClick={() => {
          handleClick("MINUS");
        }}
      >
        Down
      </button>
    </div>
  );
}

export default CountUpMain;
