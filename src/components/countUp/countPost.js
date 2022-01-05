// https://jsonplaceholder.typicode.com/posts/${json.id}
import { useState } from "react";

function CountPost(props) {
  const { createApi } = props;
  const [count, setCount] = useState(0);
  const [countName, setCountName] = useState("");

  const numberChange = (e) => {
    setCount(e.target.value);
  };

  const textChange = (e) => {
    setCountName(e.target.value);
  };

  const createCount = () => {
    createApi(countName);
  };

  return (
    <div className="count-post">
      <h1>新規保存</h1>
      <input type="number" defaultValue={count} onBlur={numberChange} />
      <input type="text" defaultValue={countName} onBlur={textChange} />
      <div>
        <button
          onClick={() => {
            createCount();
          }}
        >
          保存
        </button>
      </div>
    </div>
  );
}

export default CountPost;
