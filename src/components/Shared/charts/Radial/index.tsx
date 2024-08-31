import ApexCharts from "apexcharts";
import { useEffect, useRef, useState } from "react";
import { ThemeColor } from "../../../../provider/theme";
import Chart from "react-apexcharts";

type propType = {
  config: ApexCharts.ApexOptions;
  plotOptions?: ApexCharts.ApexOptions["plotOptions"];
  chartKey: string;
};

const RadialChart = (props: propType) => {
  const {
    config,
    plotOptions = {
      radialBar: {},
    },
    chartKey,
  } = props;
  const ref = useRef<HTMLDivElement>(null!);
  const [height, setHeight] = useState(0);

  const chartOptions: ApexCharts.ApexOptions = {
    series: [44, 55, 67, 83],

    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "14px",
          },
          value: {
            fontSize: "16px",
            fontWeight: 700,
            color: ThemeColor.LIGHT_PURPLE,
          },
          total: {
            show: false,
          },
        },

        track: {
          show: true,
          background: ThemeColor.GRID,
          opacity: 1,
          margin: 5,
        },
        ...plotOptions.radialBar,
      },
    },

    stroke: {
      lineCap: "round",
      width: 1,
    },

    labels: ["Apples", "Oranges", "Bananas", "Berries"],
    ...config,
  };

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  return (
    <div ref={ref} className="h-full w-full flex justify-center items-center">
      {!!height && (
        <Chart
          key={chartKey}
          options={chartOptions}
          series={chartOptions.series}
          type="radialBar"
          width={"100%"}
          height={height}
        />
      )}
    </div>
  );
};

export default RadialChart;
