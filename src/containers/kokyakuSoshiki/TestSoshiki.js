import { useSelector } from "react-redux";
import TestSoshiki from "../../components/kokyakuSoshiki/TestSoshiki";

function TestSoshikiContainer() {
  const count = useSelector((state) => state.counter.count);
  return <TestSoshiki count={count} />;
}

export default TestSoshikiContainer;
