"use client";
import { ThemeColor } from "../../../../provider/theme";
import chart from "chart.js";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

type propType = {
  configs?: chart.ChartConfiguration;
  options?: chart.ChartConfiguration["options"];
  data: number[];
  labels: string[];
};

const Radar = (prop: propType) => {
  const { configs = {}, options = { scales: { r: {} } }, data, labels } = prop;
  const ref = useRef<HTMLCanvasElement>(null!);

  const chartData: chart.ChartData = {
    labels: labels,
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
