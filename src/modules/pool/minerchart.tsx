import React, {useState, useEffect} from 'react';
import useSWR from "swr";
import axios from "axios";
import {apiUrl, abbreviateNumber} from "../../modules/utils";
import Cookies from "js-cookie";
import Moment from "react-moment";
import moment from "moment-timezone";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const MinerChart = () => {
  const fetcher = (url: string) => axios.get(url).then(res => res.data)
  const api = {
    //Miner Hashrate
    minerHash: useSWR(apiUrl + "miner/" + Cookies.get("wallet") + "/chart/hashrate/allWorkers", fetcher, {refreshInterval: 1000 * 60}),
  }

  const data = {
    labels: api.minerHash.data?.global?.map(x => moment(x.ts).local().format('h:mma')),
    datasets: [
      {
        type: 'line',
        label: 'Total Hashrate',
        data: api.minerHash.data?.global?.map(x => x.hs),
        backgroundColor: "#36a2eb",
        fill: "start",
        reverse: true,
        pointStyle: "circle",
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        pointBorderColor: "rgba(0, 0, 0, 0)",
      },
      /*{
        type: 'line',
        label: 'Your Average Hashrate',
        data: api.minerHash.data?.global?.map(x => x.hs / 86400000),
        borderColor: 'rgba(188, 194, 228, 0.5)',
        fill: "start",
        reverse: true,
        pointStyle: "circle",
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        pointBorderColor: "rgba(0, 0, 0, 0)",
        },*/
    ],
  };
  
  const options = {
    responsiveAnimationDuration: 0,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        reverse: false,
        grid: {
          display: true,
        },
        ticks: {
          callback: function (value) {
            return abbreviateNumber(value);
          }
        }
      },
      x: {
        reverse: true,
        grid: {
          display: true,
        }
      }
    },
    hover: {
      mode: 'index',
      intersect: false,
      animationDuration: 0,
    },
    animation: {
      duration: 0,
    },
	}

  return(
    <>
      <Chart data={data} options={options} />
    </>
  )
};

export default MinerChart;