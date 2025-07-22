// components/PieChart.tsx
"use client";

import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

export default function Chart2() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy previous chart if exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const newChart = new Chart(chartRef.current, {
      type: "pie",
      data: {
        labels: ["Apple", "Banana", "Grapes", "Orange"],
        datasets: [
          {
            label: "Fruits Sales",
            data: [5, 15, 30, 20],
            backgroundColor: ["#f87171", "#fbbf24", "#a78bfa", "#34d399"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
          title: {
            display: true,
            text: "Fruit Sales - Pie Chart",
          },
        },
      },
    });

    chartInstanceRef.current = newChart;
  }, []);

  return (
    <>
      <div>
        <h1>test 1</h1>
        <canvas ref={chartRef} />
        <h1>test 2</h1>
      </div>
    </>
  );
}
