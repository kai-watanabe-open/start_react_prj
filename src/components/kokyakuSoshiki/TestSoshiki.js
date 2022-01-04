import { MASTER_CONST } from "../../constants";

const TestSoshiki = (props) => {
  const { count } = props;
  return (
    <>
      <h3>{MASTER_CONST}</h3>
      <p>{count}</p>
    </>
  );
};

export default TestSoshiki;
