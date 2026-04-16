import Image from "next/image";

const FriendCard = ({ friend }) => {
  return (
    <div className="p-6 flex flex-col gap-2 justify-center items-center rounded-xl shadow">
      <div className="w-20 h-20 flex justify-center items-center rounded-full overflow-hidden">
        <Image
          src={friend.picture}
          alt={friend.name}
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-semibold">{friend.name}</h4>
        <p className="text-xs text-center text-gray-600">
          {friend.days_since_contact}d ago
        </p>
      </div>
      <button className="text-xs font-medium badge rounded-full bg-green-300">
        {friend.tags[0]}
      </button>
      <button
        className={`text-xs font-medium badge rounded-full text-white ${friend.status === "on-track" ? "bg-green-500" : friend.status === "overdue" ? "bg-red-500" : "bg-yellow-500"}`}
      >
        {friend.status}
      </button>
    </div>
  );
};

export default FriendCard;
