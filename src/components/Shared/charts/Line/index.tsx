"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import chart from "chart.js";
import { ThemeColor } from "@/app/theme";
const Line = () => {
  const ref = useRef<HTMLCanvasElement>(null!);
  const data: chart.ChartData = {
    labels: ["one", "two", "three", "four", "five", "six"],
    datasets: [
      {
        data: [65, 59, 80, 56, 66, 71],
        fill: false,
        borderColor: ThemeColor.PINK,
        cubicInterpolationMode: "monotone",
        borderWidth: 4,
        tension: 0.1,
      },
      {
        data: [44, 59, 80, 40, 56, 80],
        fill: false,
        borderColor: ThemeColor.PURPLE,
        cubicInterpolationMode: "monotone",
        borderWidth: 4,
        tension: 0.1,
      },
    ],
  };
  const config: chart.ChartConfiguration = {
    type: "line",
    data: data,
    options: {
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: {
          display: false,
        },
      },
      elements: {
        point: {
          radius: 0,
        },
      },
      scales: {
        y: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 20,
            maxTicksLimit: 100,
            color: ThemeColor.LIGHT_PURPLE,
            font: {
              size: 15,
              weight: 500,
            },
          },
          pointLabels: {
            color: ThemeColor.LIGHT_PURPLE,
            font: {
              size: 15,
              weight: 500,
            },
          },
          grid: {
            color: [ThemeColor.GRID],
            lineWidth: 2,
          },
        },
        x: {
          ticks: {
            color: ThemeColor.LIGHT_PURPLE,
            font: {
              size: 15,
              weight: 500,
            },
          },
          pointLabels: {
            color: ThemeColor.LIGHT_PURPLE,
            font: {
              size: 15,
              weight: 500,
            },
          },
          grid: {
            color: [ThemeColor.GRID],
            lineWidth: 2,
          },
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
  return (
    <div className="h-[300px]">
      <canvas ref={ref} height={"300"} width={"600"} />
    </div>
  );
};
export default Line;
