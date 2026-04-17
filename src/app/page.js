import Banner from "./banner/page";
import StatsCard from "./statscard/page";
import FriendCard from "@/components/FriendCard";
import friends from "../data/friends.json";

export default function Home() {
  const totalFriends = friends.length;
  const onTrackCount = friends.filter(
    (friend) => friend.status === "on-track"
  ).length;
  const needAttentionCount = friends.filter(
    (friend) => friend.status === "overdue"
  ).length;
  const interactionsThisMonthCount = friends.filter(
    (friend) => friend.daysSinceContact <= 30
  ).length;

  return (
    <div className="flex flex-col gap-10 rounded-xl">
      <Banner />
      <div className="grid grid-cols-4 gap-6">
        <StatsCard count={totalFriends} name="Total Friends" />
        <StatsCard count={onTrackCount} name="On Track" />
        <StatsCard count={needAttentionCount} name="Need Attention" />
        <StatsCard count={interactionsThisMonthCount} name="Interactions This Month" />
      </div>
      <hr className="border-t border-gray-300" />
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold">Your Friends</h3>
        <div className="grid grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
}
