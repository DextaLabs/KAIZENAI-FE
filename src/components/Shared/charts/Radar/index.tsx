"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import chart from "chart.js";
import { ThemeColor } from "@/app/theme";

const Radar = () => {
  const ref = useRef<HTMLCanvasElement>(null!);
  const data: chart.ChartData = {
    labels: [
      "Verbal Clarity",
      "Body Language",
      "Interaction",
      "Coherence",
      "Confidence",
    ],
    datasets: [
      {
        data: [50, 70, 92, 72, 85],
        fill: true,
        backgroundColor: ThemeColor.WATER_PURPLE,
        borderColor: ThemeColor.PURPLE,
        pointBackgroundColor: ThemeColor.PINK,
        pointBorderColor: ThemeColor.PINK,
        pointHoverBackgroundColor: ThemeColor.WHITE,
        pointHoverBorderColor: ThemeColor.PINK,
      },
    ],
  };

  const config: chart.ChartConfiguration = {
    type: "radar",
    data: data,
    options: {
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        r: {
          grid: {
            color: [ThemeColor.GRID],
            lineWidth: 3,
          },
          ticks: {
            color: "transparent",
            backdropColor: "transparent",
            stepSize: 20,
            maxTicksLimit: 100,
          },
          angleLines: {
            color: "transparent",
          },
          pointLabels: {
            color: ThemeColor.LIGHT_PURPLE,
            font: {
              size: 15,
              weight: 500,
            },
          },
          min: 0,
          max: 100,
        },
      },
    },
  };

  useEffect(() => {
    const chart = new Chart(ref.current, config);
    return () => {
      chart.destroy();
    };
  }, []);

  return <canvas ref={ref} />;
};

export default Radar;
