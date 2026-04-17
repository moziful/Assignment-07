"use client";

import { useState } from "react";
import { FaRegMessage, FaVideo } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

import interactions from "@/data/interactions.json";

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const getInteractionIcon = (type) => {
  if (type === "call") {
    return IoCallOutline;
  }

  if (type === "text") {
    return FaRegMessage;
  }

  return FaVideo;
};

const getInteractionLabel = (type) => {
  if (type === "call") {
    return "Call";
  }

  if (type === "text") {
    return "Text";
  }

  return "Video";
};

const sortedInteractions = [...interactions].sort(
  (firstItem, secondItem) =>
    new Date(secondItem.date).getTime() - new Date(firstItem.date).getTime(),
);

const Timeline = () => {
  const [selectedType, setSelectedType] = useState("all");

  const filteredInteractions =
    selectedType === "all"
      ? sortedInteractions
      : sortedInteractions.filter(
          (interaction) => interaction.type === selectedType,
        );

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-slate-800">Timeline</h1>

        <select
          value={selectedType}
          onChange={(event) => setSelectedType(event.target.value)}
          className="select w-full max-w-xs rounded-xl border-slate-200 bg-white text-slate-500"
        >
          <option value="all">All Catagories</option>
          <option value="call">Calls</option>
          <option value="text">Texts</option>
          <option value="video">Video Calls</option>
        </select>
      </div>

      <div className="flex flex-col gap-4">
        {filteredInteractions.map((interaction) => {
          const Icon = getInteractionIcon(interaction.type);

          return (
            <div
              key={interaction.id}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-2xl text-slate-700">
                <Icon />
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-medium text-slate-700">
                  {getInteractionLabel(interaction.type)} with{" "}
                  {interaction.friendName}
                </h2>
                <p className="text-sm text-slate-500">
                  {formatDate(interaction.date)}
                </p>
              </div>
            </div>
          );
        })}

        {filteredInteractions.length === 0 && (
          <div className="rounded-xl border border-slate-200 bg-white px-5 py-6 text-slate-500 shadow-sm">
            No timeline entries found for this filter.
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
