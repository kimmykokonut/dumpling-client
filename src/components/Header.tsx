import './css/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div id="header">
        <h1>the dump truck</h1>
        <nav id="nav">
          <Link to="/create-dumpling">Add dumpling</Link>
          <Link to="/dumplings">See dumplings</Link>
          <Link to="/">Sign out</Link>
        </nav>
      </div>
      <hr />
    </>
  );
}
export default Header;