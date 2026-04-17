import { notFound } from "next/navigation";

import friends from "@/data/friends.json";

import FriendDetailClient from "./FriendDetailClient";

export function generateStaticParams() {
  return friends.map((friend) => ({
    id: String(friend.id),
  }));
}

const FriendDetailPage = async ({ params }) => {
  const { id } = await params;
  const friend = friends.find((item) => item.id === Number(id));

  if (!friend) {
    notFound();
  }

  return <FriendDetailClient friend={friend} />;
};

export default FriendDetailPage;
