import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "../store/counterSlice";
import Main from "../components";

function MainContainer() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const plus_func = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);

  const minus_func = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);

  return <Main count={count} plus={plus_func} minus={minus_func} />;
}

export default MainContainer;
