import { Link } from "react-router-dom";

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Count</Link>
      </li>
      <li>
        <Link to="/about">Soshiki</Link>
      </li>
    </ul>
  );
}

export default Header;
