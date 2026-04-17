"use client";

import { FaPlus } from "react-icons/fa";
import { useToast } from "@/components/ToastProvider";

const Banner = () => {
  const { showToast } = useToast();

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
      <button
        type="button"
        onClick={() => showToast("Friend added!")}
        className="btn w-fit flex gap-1 items-center bg-green-950 text-white hover:bg-green-900"
      >
        <FaPlus />
        Add Friend
      </button>
    </div>
  );
};

export default Banner;
