import { Link } from "react-router";

const SiteHeader = () => {
  return (
    <header className="border-b">
      <div className="container flex justify-around">
        <ul className="flex items-center h-14  space-x-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default SiteHeader;
