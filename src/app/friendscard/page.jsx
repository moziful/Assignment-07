import FriendCard from "@/components/FriendCard";
import friends from "@/data/friends.json";

const FriendsCardPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">All Friends</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsCardPage;
