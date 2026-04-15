import { MdOutlineHome } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between bg-base-100 shadow-sm px-16">
      <div className="">
        <a className="btn btn-ghost text-xl font-normal flex gap-0">
          <span className="font-bold">Keen</span>Keeper
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <a>
              <MdOutlineHome />
              Home
            </a>
          </li>
          <li>
            <a>
              <CiClock2 />
              Timeline
            </a>
          </li>
          <li>
            <a>
              <ImStatsDots />
              Stats
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
