import Banner from "./banner/page";
import StatsCard from "./statscard/page";
import FriendCard from "./friendscard/page"

export default function Home() {
  return (
    <div className="flex flex-col gap-10 border-2 border-red-500 rounded-xl shadow">
      <Banner />
      <div className="grid grid-cols-4 gap-6">
        <StatsCard />
        <StatsCard />
        <StatsCard />
        <StatsCard />
      </div>
      <hr className="border-t border-gray-300" />
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold">Your Friends</h3>
        <div className="grid grid-cols-4 gap-6">
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
        </div>
      </div>
    </div>
  );
}
