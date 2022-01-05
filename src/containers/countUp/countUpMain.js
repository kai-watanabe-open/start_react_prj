import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "../../store/counterSlice";
import CountUpMain from "../../components/countUp/countUpMain";

function CountUpContainer() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const plus_func = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);

  const minus_func = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);

  return <CountUpMain count={count} plus={plus_func} minus={minus_func} />;
}

export default CountUpContainer;
