import { Link } from "react-router-dom";

const NavLink = () => {
  return (
    <div className="flex justify-center gap-4 bg-purple-300 py-2 mt-4">
      <Link className="font-medium text-white md:text-2xl" to="/">Home</Link>
      <Link className="font-medium text-white md:text-2xl" to="/addCoffee">Add Coffee</Link>
      <Link className="font-medium text-white md:text-2xl" to="/updateCoffee">Update Coffee</Link>
    </div>
  );
};

export default NavLink;