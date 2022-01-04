import { Link } from "react-router-dom";

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Count</Link>
      </li>
      <li>
        <Link to="/users">users</Link>
      </li>
    </ul>
  );
}

export default Header;
