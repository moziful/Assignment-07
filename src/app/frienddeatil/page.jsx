const FriendDetails = ({ friend }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      This is the Friend Details page
      <h1 className="text-3xl font-bold">{friend.name}</h1>
      <p className="text-gray-600">{friend.bio}</p>
    </div>
  );
};

export default FriendDetails;
