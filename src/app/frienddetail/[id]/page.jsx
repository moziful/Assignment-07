import Image from "next/image";
import { notFound } from "next/navigation";
import { FaBoxArchive, FaRegMessage, FaTrash } from "react-icons/fa6";
import { IoVideocamOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { RiNotificationSnoozeLine } from "react-icons/ri";

import friends from "@/data/friends.json";

export function generateStaticParams() {
  return friends.map((friend) => ({
    id: String(friend.id),
  }));
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const getStatusClasses = (status) => {
  if (status === "on-track") {
    return "bg-emerald-500 text-white";
  }

  if (status === "overdue") {
    return "bg-red-500 text-white";
  }

  return "bg-amber-400 text-slate-900";
};

const getStatusLabel = (status) => {
  if (status === "on-track") {
    return "On Track";
  }

  if (status === "overdue") {
    return "Overdue";
  }

  return "Almost Due";
};

const DetailStatCard = ({ value, label }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-6 py-7 text-center shadow-sm">
      <h2 className="text-3xl font-semibold tracking-tight text-green-950">
        {value}
      </h2>
      <p className="mt-2 text-lg text-slate-500">{label}</p>
    </div>
  );
};

const ActionButton = ({ icon: Icon, label, danger = false }) => {
  return (
    <button
      type="button"
      className={`flex w-full items-center justify-center gap-3 rounded-xl border bg-white px-5 py-4 text-lg font-semibold shadow-sm transition-colors ${
        danger
          ? "border-red-200 text-red-500 hover:bg-red-50"
          : "border-slate-200 text-slate-800 hover:bg-slate-50"
      }`}
    >
      <Icon className="text-xl" />
      <span>{label}</span>
    </button>
  );
};

const QuickActionCard = ({ icon: Icon, label }) => {
  return (
    <button
      type="button"
      className="flex min-h-36 flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-8 text-slate-800 transition-colors hover:bg-slate-100"
    >
      <Icon className="text-4xl" />
      <span className="text-2xl font-medium">{label}</span>
    </button>
  );
};

const FriendDetailPage = async ({ params }) => {
  const { id } = await params;
  const friend = friends.find((item) => item.id === Number(id));

  if (!friend) {
    notFound();
  }

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[290px_minmax(0,1fr)]">
      <div className="flex flex-col gap-4">
        <div className="flex-1 grid grid-cols-1 justify-center items-center rounded-2xl bg-white px-8 py-8 text-center shadow">
          <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
            <Image
              src={friend.picture}
              alt={friend.name}
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>

          <h1 className="text-3xl font-semibold text-slate-800">
            {friend.name}
          </h1>

          <div
            className={`flex rounded-full mx-auto justify-center items-center px-4 py-1 text-sm font-semibold ${getStatusClasses(friend.status)}`}
          >
            {getStatusLabel(friend.status)}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {friend.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="font-semibold italic text-slate-500">
            &quot;{friend.bio}&quot;
          </p>

          <p className="text-base font-semibold text-slate-500">
            {friend.email}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <ActionButton
            icon={RiNotificationSnoozeLine}
            label="Snooze 2 Weeks"
          />
          <ActionButton icon={FaBoxArchive} label="Archive" />
          <ActionButton icon={FaTrash} label="Delete" danger />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="grid gap-4 md:grid-cols-3">
          <DetailStatCard
            value={friend.daysSinceContact}
            label="Days Since Contact"
          />
          <DetailStatCard value={friend.goal} label="Goal (Days)" />
          <DetailStatCard
            value={formatDate(friend.nextDueDate)}
            label="Next Due"
          />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-medium text-green-950">
                Relationship Goal
              </h2>
              <p className="mt-4 text-2xl text-slate-500">
                Connect every{" "}
                <span className="font-semibold text-slate-900">
                  {friend.goal} days
                </span>
              </p>
            </div>

            <button
              type="button"
              className="rounded-lg border border-slate-200 px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Edit
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-4xl font-medium text-green-950">
            Quick Check-In
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <QuickActionCard icon={IoCallOutline} label="Call" />
            <QuickActionCard icon={FaRegMessage} label="Text" />
            <QuickActionCard icon={IoVideocamOutline} label="Video" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailPage;
