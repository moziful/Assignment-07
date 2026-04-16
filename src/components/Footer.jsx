import Link from "next/link";
import { MdOutlineHome } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="mx-auto w-full footer footer-horizontal footer-center bg-green-950 text-primary-content p-10 px-60">
      <div className="flex flex-col w-full">
        <div>
          <Link href="/" className="text-5xl font-normal flex gap-0">
            <span className="font-bold">Keen</span>Keeper
          </Link>
        </div>
        <p className="text-gray-300">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-medium">Social Links</p>
          <div className="grid grid-cols-3 gap-3 text-black font-medium">
            <div className="w-fit p-4 bg-white rounded-full">
              <Link href="/">
                <ImStatsDots />
              </Link>
            </div>
            <div className="w-fit p-4 bg-white rounded-full">
              <Link href="/">
                <ImStatsDots />
              </Link>
            </div>
            <div className="w-fit p-4 bg-white rounded-full">
              <Link href="/">
                <ImStatsDots />
              </Link>
            </div>
          </div>
        </div>
        <hr className="w-full my-8 border-t border-gray-700" />
        <div className="w-full flex justify-between">
          <p className="flex-1 text-left">
            &copy; 2026 KeenKeeper. All rights reserved.
          </p>
          <div>Privacy Policy Terms of Service Cookies</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
