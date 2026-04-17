"use client";

import interactions from "@/data/interactions.json";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const interactionConfig = [
  { key: "text", label: "Text", color: "#7C3AED" },
  { key: "call", label: "Call", color: "#255A4A" },
  { key: "video", label: "Video", color: "#3DBB69" },
];

const chartData = interactionConfig.map((item) => ({
  ...item,
  value: interactions.filter(
    (interaction) => interaction.type.toLowerCase() === item.key,
  ).length,
}));

const Stats = () => {
  return (
    <div className="flex flex-col gap-6 pb-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-800">
        Friendship Analytics
      </h1>
      <div className="rounded-2xl bg-white px-6 py-7 shadow-sm">
        <p className="text-lg font-semibold text-green-950">
          By Interaction Type
        </p>

        <div className="mt-8 flex flex-col items-center gap-8">
          <div className="h-70 w-full max-w-100">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="label"
                  innerRadius="62%"
                  outerRadius="88%"
                  startAngle={210}
                  endAngle={-150}
                  paddingAngle={5}
                  cornerRadius={8}
                  stroke="#FFFFFF"
                  strokeWidth={6}
                >
                  {chartData.map((entry) => (
                    <Cell key={entry.key} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
            {chartData.map((item) => (
              <div key={item.key} className="flex items-center gap-2">
                <span
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
