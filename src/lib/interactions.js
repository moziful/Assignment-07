import interactions from "@/data/interactions.json";

export const CUSTOM_INTERACTIONS_STORAGE_KEY = "keenkeeper-custom-interactions";
export const INTERACTIONS_UPDATED_EVENT = "keenkeeper:interactions-updated";

export const formatInteractionLabel = (type) => {
  if (type === "call") {
    return "Call";
  }

  if (type === "text") {
    return "Text";
  }

  return "Video";
};

export const sortInteractionsByDate = (interactionList) =>
  [...interactionList].sort(
    (firstItem, secondItem) =>
      new Date(secondItem.date).getTime() - new Date(firstItem.date).getTime(),
  );

export const getStoredInteractions = () => {
  if (typeof window === "undefined") {
    return [];
  }

  const savedInteractions = window.localStorage.getItem(
    CUSTOM_INTERACTIONS_STORAGE_KEY,
  );

  if (!savedInteractions) {
    return [];
  }

  try {
    const parsedInteractions = JSON.parse(savedInteractions);
    return Array.isArray(parsedInteractions) ? parsedInteractions : [];
  } catch {
    return [];
  }
};

export const getAllInteractions = () =>
  sortInteractionsByDate([...interactions, ...getStoredInteractions()]);

export const saveInteraction = (newInteraction) => {
  if (typeof window === "undefined") {
    return;
  }

  const updatedInteractions = [newInteraction, ...getStoredInteractions()];

  window.localStorage.setItem(
    CUSTOM_INTERACTIONS_STORAGE_KEY,
    JSON.stringify(updatedInteractions),
  );

  window.dispatchEvent(new Event(INTERACTIONS_UPDATED_EVENT));
};
