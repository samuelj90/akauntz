import { Link } from "react-router-dom";
import { FiHome, FiUsers } from "react-icons/fi";

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4">
        <h2 className="text-xl font-bold">My App</h2>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li className="p-4">
            <Link
              to="/"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <FiHome className="mr-2" />
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="/new"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <FiUsers className="mr-2" />
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
