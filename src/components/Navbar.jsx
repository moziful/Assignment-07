import LinkedButtonWithIcon from "./LinkedButtonWithIcon";
import { MdOutlineHome } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between bg-white shadow-sm px-16">
      <div>
        <Link href="/" className="btn btn-ghost text-xl font-normal flex gap-0">
          <span className="font-bold">Keen</span>Keeper
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <LinkedButtonWithIcon icon={MdOutlineHome} label="Home" href="/" />
          </li>

          <li>
            <LinkedButtonWithIcon
              icon={IoMdTime}
              label="Timeline"
              href="/timeline"
            />
          </li>

          <li>
            <LinkedButtonWithIcon
              icon={ImStatsDots}
              label="Stats"
              href="/stats"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
