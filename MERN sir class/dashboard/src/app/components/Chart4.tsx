"use client";

import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

export default function Chart3() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const labels = ["Apple", "Banana", "Grapes", "Orange"];
    const dataValues = [25, 15, 30, 20];
    const backgroundColors = ["#f87171", "#fbbf24", "#a78bfa", "#34d399"];

    const newChart = new Chart(chartRef.current, {
      type: "pie",
      data: {
        labels,
        datasets: [
          {
            label: "Fruit Sales",
            data: dataValues,
            backgroundColor: backgroundColors,
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                const total = context.dataset.data.reduce(
                  (a: any, b: any) => a + b,
                  0
                );
                const value = context.raw;
                const percentage = ((value / total) * 100).toFixed(1);
                return `${context.label}: ${value} (${percentage}%)`;
              },
            },
          },
        },
      },
    });

    chartInstanceRef.current = newChart;
  }, []);

  return <canvas ref={chartRef} />;
}
