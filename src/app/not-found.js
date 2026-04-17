import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-10 h-80 flex flex-col text-center justify-center items-center gap-10  rounded-xl bg-white shadow">
      <h1 className="text-6xl text-green-950 font-semibold">404</h1>
      <p className="text-xl text-green-950">We Did Not Find The Page You Requested!</p>
      <Link href="/" className="text-green-950 btn btn-ghost w-fit">
        Go To Home
      </Link>
    </div>
  );
}
