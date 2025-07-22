'use client';

import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

export default function Chart3() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const labels = ['Apple', 'Banana', 'Grapes', 'Orange'];
    const dataValues = [25, 15, 30, 20];
    const backgroundColors = ['#f87171', '#fbbf24', '#a78bfa', '#34d399'];

    const newChart = new Chart(chartRef.current, {
      type: 'pie',
      data: {
        labels,
        datasets: [
          {
            label: 'Fruit Sales',
            data: dataValues,
            backgroundColor: backgroundColors,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              generateLabels: (chart) => {
                const dataset = chart.data.datasets[0];
                return chart.data.labels!.map((label, i) => {
                  const value = dataset.data[i] as number;
                  return {
                    text: `${label} — ${value}`,
                    fillStyle: dataset.backgroundColor[i],
                    strokeStyle: dataset.backgroundColor[i],
                    lineWidth: 1,
                    hidden: chart.getDatasetMeta(0).data[i].hidden,
                    index: i,
                  };
                });
              },
            },
          },
          title: {
            display: true,
            text: 'Fruit Sales - Pie Chart',
          },
        },
      },
    });

    chartInstanceRef.current = newChart;
  }, []);

  return <canvas ref={chartRef} />;
}
