import CountPost from "../../components/countUp/countPost";
import { createCountApi } from "../../apis/countPostApi";

function countPostContainer() {
  const createApi = async (body) => {
    await createCountApi(body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <CountPost createApi={createApi} />;
}

export default countPostContainer;
