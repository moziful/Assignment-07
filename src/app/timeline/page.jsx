"use client";

import { useEffect, useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import {
  IoCallOutline,
  IoClose,
  IoSearchOutline,
  IoVideocamOutline,
} from "react-icons/io5";

import {
  formatInteractionLabel,
  getAllInteractions,
  INTERACTIONS_UPDATED_EVENT,
} from "@/lib/interactions";
import { useToast } from "@/components/ToastProvider";

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

  return IoVideocamOutline;
};

const Timeline = () => {
  const { showToast } = useToast();
  const [selectedType, setSelectedType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [allInteractions, setAllInteractions] = useState([]);

  useEffect(() => {
    const loadInteractions = () => {
      setAllInteractions(getAllInteractions());
    };

    loadInteractions();
    window.addEventListener(INTERACTIONS_UPDATED_EVENT, loadInteractions);
    window.addEventListener("storage", loadInteractions);

    return () => {
      window.removeEventListener(INTERACTIONS_UPDATED_EVENT, loadInteractions);
      window.removeEventListener("storage", loadInteractions);
    };
  }, []);

  const normalizedSearchQuery = searchQuery.trim().toLowerCase();

  const filteredInteractions = allInteractions.filter((interaction) => {
    const matchesType =
      selectedType === "all" || interaction.type === selectedType;

    if (!matchesType) {
      return false;
    }

    if (!normalizedSearchQuery) {
      return true;
    }

    const interactionLabel = formatInteractionLabel(interaction.type);
    const searchableText = [
      interaction.friendName,
      interaction.type,
      interactionLabel,
      formatDate(interaction.date),
      `${interactionLabel} with ${interaction.friendName}`,
      interaction.date,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedSearchQuery);
  });

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-slate-800">Timeline</h1>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <select
            value={selectedType}
            onChange={(event) => setSelectedType(event.target.value)}
            className="select w-full rounded-xl border-slate-200 bg-white text-slate-500 md:max-w-xs"
          >
            <option value="all">All Catagories</option>
            <option value="call">Calls</option>
            <option value="text">Texts</option>
            <option value="video">Video Calls</option>
          </select>

          <label className="input flex w-full items-center gap-2 rounded-xl border-slate-200 bg-white focus-within:outline-none">
            <IoSearchOutline className="text-lg text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search timeline"
              className="grow text-slate-700 placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  showToast("Cleared");
                }}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
                aria-label="Clear search"
              >
                <IoClose className="text-base" />
              </button>
            )}
          </label>
        </div>
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
                  {formatInteractionLabel(interaction.type)} with{" "}
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
            No timeline entries found!
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
