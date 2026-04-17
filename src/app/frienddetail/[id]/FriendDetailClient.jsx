"use client";

import Image from "next/image";
import { FaBoxArchive, FaRegMessage, FaTrash } from "react-icons/fa6";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { RiNotificationSnoozeLine } from "react-icons/ri";

import { useToast } from "@/components/ToastProvider";
import { formatInteractionLabel, saveInteraction } from "@/lib/interactions";

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const getStatusClasses = (status) => {
  if (status === "on-track") {
    return "bg-green-500 text-white";
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
    <div className="rounded-2xl shadow bg-white px-6 py-7 text-center shadow-sm">
      <h2 className="text-3xl font-semibold tracking-tight text-green-950">
        {value}
      </h2>
      <p className="mt-2 text-lg text-gray-500">{label}</p>
    </div>
  );
};

const ActionButton = ({ icon: Icon, label, danger = false, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-center gap-3 rounded-xl shadowbg-white px-5 py-4 text-lg font-semibold shadow-sm transition-colors ${
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

const QuickActionCard = ({ icon: Icon, label, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-h-36 flex-col items-center justify-center gap-4 rounded-2xl shadowborder-slate-200 bg-slate-50 px-6 py-8 text-slate-800 transition-colors hover:bg-slate-100"
    >
      <Icon className="text-3xl" />
      <span className="text-2xl font-medium">{label}</span>
    </button>
  );
};

const FriendDetailClient = ({ friend }) => {
  const { showToast } = useToast();

  const handleQuickCheckIn = (type) => {
    const interactionLabel = formatInteractionLabel(type);
    const nextInteraction = {
      id: Date.now(),
      friendId: friend.id,
      friendName: friend.name,
      type,
      date: new Date().toISOString().slice(0, 10),
    };

    saveInteraction(nextInteraction);
    showToast(`${interactionLabel} with ${friend.name} added to timeline.`);
  };

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[290px_minmax(0,1fr)]">
      <div className="flex flex-col gap-4">
        <div className="flex-1 grid grid-cols-1 gap-2 items-center justify-center rounded-2xl bg-white px-8 py-8 text-center shadow">
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
            className={`mx-auto flex items-center justify-center rounded-full px-4 py-1 text-sm font-semibold ${getStatusClasses(friend.status)}`}
          >
            {getStatusLabel(friend.status)}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {friend.tags.map((tag, index) => (
              <span
                key={`${friend.id}-${tag}-${index}`}
                className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-800"
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
            onClick={() => showToast(`Snoozed ${friend.name} for 2 weeks.`)}
          />
          <ActionButton
            icon={FaBoxArchive}
            label="Archive"
            onClick={() => showToast(`${friend.name} archived.`)}
          />
          <ActionButton
            icon={FaTrash}
            label="Delete"
            danger
            onClick={() => showToast(`Delete clicked for ${friend.name}.`)}
          />
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

        <div className="rounded-2xl shadowborder-slate-200 bg-white p-6 shadow-sm">
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
              onClick={() => showToast(`Edit goal clicked for ${friend.name}.`)}
              className="rounded-lg shadowborder-slate-200 px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Edit
            </button>
          </div>
        </div>

        <div className="rounded-2xl shadowborder-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-medium text-green-950">
            Quick Check-In
          </h2>

          <div className="mt-5 grid grid-cols-3 gap-2">
            <QuickActionCard
              icon={IoCallOutline}
              label="Call"
              onClick={() => handleQuickCheckIn("call")}
            />
            <QuickActionCard
              icon={FaRegMessage}
              label="Text"
              onClick={() => handleQuickCheckIn("text")}
            />
            <QuickActionCard
              icon={IoVideocamOutline}
              label="Video"
              onClick={() => handleQuickCheckIn("video")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailClient;
