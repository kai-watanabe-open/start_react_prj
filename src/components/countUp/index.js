import CountUpContainer from "../../containers/countUp/countUpMain";
import CountPostContainer from "../../containers/countUp/countPost";

function CountUp() {
  return (
    <div className="count-up">
      <CountUpContainer />
      <CountPostContainer />
    </div>
  );
}

export default CountUp;
