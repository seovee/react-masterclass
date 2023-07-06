import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ReactApexChart from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  if (!data?.length) {
    return <h1>차트 데이터가 없습니다.</h1>;
  }

  const chartData = data?.map((data) => {
    return {
      x: new Date(data.time_close),
      y: [data.open, data.high, data.low, data.close],
    };
  });

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ReactApexChart
          type="candlestick"
          series={[
            {
              data: chartData,
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["brown"] },
            },
            colors: ["gold"],
          }}
        />
      )}
    </div>
  );
}

export default Chart;
