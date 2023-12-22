"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import chart from "chart.js";
import { ThemeColor } from "@/app/theme";

type propType = {
  configs?: chart.ChartConfiguration;
  options?: chart.ChartConfiguration["options"];
  data: number[];
};

const Radar = (prop: propType) => {
  const { configs = {}, options = { scales: { r: {} } }, data } = prop;
  const ref = useRef<HTMLCanvasElement>(null!);

  const chartData: chart.ChartData = {
    labels: [
      "Verbal Clarity",
      "Body Language",
      "Interaction",
      "Coherence",
      "Confidence",
    ],
    datasets: [
      {
        data: data,
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
    data: chartData,
    options: {
      maintainAspectRatio: false,
      aspectRatio: 1,
      scales: {
        // @ts-ignore
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
            callback: (label, index) => {
              return [label, `${index}`];
            },
            color: [ThemeColor.LIGHT_PURPLE, "red", "green", "pink", "blue"],
            font: {
              size: 15,
              weight: 500,
            },
          },
          min: 0,
          max: 100,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      ...options,
    },
    ...configs,
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
