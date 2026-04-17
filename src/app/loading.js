export default function Loading() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 rounded-xl bg-white shadow-sm">
      <span className="loading loading-dots loading-xl"></span>
      <p className="text-lg font-medium text-slate-600">Loading friends...</p>
    </div>
  );
}
