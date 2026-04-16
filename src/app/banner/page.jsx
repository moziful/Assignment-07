import LinkedButtonWithIcon from "@/components/LinkedButtonWithIcon";
import { FaPlus } from "react-icons/fa";

const primary = "bg-green-950";
const whiteText = "text-white";

const Banner = () => {
  return (
    <div className="w-full mx-auto flex flex-col justify-center items-center text-center gap-8 rounded-xl">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold">
          Friends to keep close in your life
        </h1>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the
          <br />
          relationships that matter most.
        </p>
      </div>
      <LinkedButtonWithIcon
        color={primary}
        textColor={whiteText}
        icon={FaPlus}
        label="Add Friend"
        href=""
      />
    </div>
  );
};

export default Banner;
