const StatsCard = ({ count, name }) => {
  return (
    <div className="flex flex-col gap-2 bg-white text-center rounded-xl shadow py-8">
      <h2 className="text-4xl font-bold">{count}</h2>
      <p className="text-lg text-center text-gray-600">{name}</p>
    </div>
  );
};

export default StatsCard;
