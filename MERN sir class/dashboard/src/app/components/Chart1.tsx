// components/BarChart.tsx
"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function Chart1() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy previous chart instance if any
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const newChart = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green"],
        datasets: [
          {
            label: "Sales",
            data: [12, 19, 3, 5],
            backgroundColor: ["#ef4444", "#3b82f6", "#facc15", "#10b981"],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true, position: "top" },
          title: { display: true, text: "Bar Chart - Chart.js Only" },
        },
      },
    });

    chartInstanceRef.current = newChart;
  }, []);

  return <canvas ref={chartRef} />;
}
