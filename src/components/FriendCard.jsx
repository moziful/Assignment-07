import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ friend }) => {
  return (
    <Link
      href={`/frienddetail/${friend.id}`}
      className="p-6 flex flex-col gap-2 justify-center items-center rounded-xl shadow bg-white hover:shadow-md transition-shadow"
    >
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
          {friend.daysSinceContact}d ago
        </p>
      </div>
      <div className="flex flex-wrap text-xs justify-center gap-1">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium badge uppercase rounded-full bg-green-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <span
        className={`text-xs font-medium badge rounded-full text-white ${friend.status === "on-track" ? "bg-green-500" : friend.status === "overdue" ? "bg-red-500" : "bg-yellow-500"}`}
      >
        {friend.status}
      </span>
    </Link>
  );
};

export default FriendCard;
