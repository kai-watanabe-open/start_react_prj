import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getUsersApi } from "../../store/usersSlice";
import UserProfile from "../../components/kokyakuUser/userProfile";

function KokyakuUserContainer() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getUserListApi = () => {
    const GET_USERS_URL = "https://jsonplaceholder.typicode.com/users";
    return axios.get(GET_USERS_URL);
  };

  const getUsers = async () => {
    await getUserListApi()
      .then((res) => {
        dispatch(getUsersApi(res.data));
      })
      .catch((err) => console.log(err));
  };
  return <UserProfile getUsersApi={getUsers} users={users} />;
}

export default KokyakuUserContainer;
