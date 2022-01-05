import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getUsersApi } from "../../store/usersSlice";
import UserProfile from "../../components/kokyakuUser/userProfile";
import { GET_USERS_URL } from "../../apis/usersGetApi";

function KokyakuUserContainer() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getUserListApi = () => {
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
