import { MdOutlineHome } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between bg-white shadow-sm px-16">
      <div className="">
        <Link href="/" className="btn btn-ghost text-xl font-normal flex gap-0">
          <span className="font-bold">Keen</span>Keeper
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <Link href="/" className="flex gap-1 items-center">
              <MdOutlineHome />
              Home
            </Link>
          </li>
          <li>
            <Link href="/timeline" className="flex gap-1 items-center">
              <CiClock2 />
              Timeline
            </Link>
          </li>
          <li>
            <Link href="/stats" className="flex gap-1 items-center">
              <ImStatsDots />
              Stats
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
