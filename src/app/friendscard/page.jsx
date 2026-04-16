const FriendCard = () => {
  return (
    <div className="p-6 flex flex-col gap-2 justify-center items-center rounded-xl shadow">
      <div className="w-20 h-20 flex justify-center items-center rounded-full">
        A
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-semibold">David Kim</h4>
        <p className="text-xs text-center text-gray-600">62d ago</p>
      </div>
      <button className="text-xs font-medium badge rounded-full bg-green-300">
        WORK
      </button>
      <button className="text-xs font-medium badge rounded-full text-white bg-yellow-500">
        Almost Due
      </button>
    </div>
  );
};

export default FriendCard;
