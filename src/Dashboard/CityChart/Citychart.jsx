// import React, { PureComponent } from 'react';
// import {
//   ComposedChart,
//   Line,
//   Area,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';



// function Citychart() {
//     const data = [
//         {
//           name: 'Page A',
//           uv: 590,
//           pv: 800,
//           amt: 1400,
//         },
//         {
//           name: 'Page B',
//           uv: 868,
//           pv: 967,
//           amt: 1506,
//         },
//         {
//           name: 'Page C',
//           uv: 1397,
//           pv: 1098,
//           amt: 989,
//         },
//         {
//           name: 'Page D',
//           uv: 1480,
//           pv: 1200,
//           amt: 1228,
//         },
//         {
//           name: 'Page E',
//           uv: 1520,
//           pv: 1108,
//           amt: 1100,
//         },
//         {
//           name: 'Page F',
//           uv: 1400,
//           pv: 680,
//           amt: 1700,
//         },
//       ];
      
//     return (
//         <ResponsiveContainer width="100%" height="100%">
//         <ComposedChart
//           layout="vertical"
//           width={500}
//           height={400}
//           data={data}
//           margin={{
//             top: 20,
//             right: 20,
//             bottom: 20,
//             left: 20,
//           }}
//         >
//           <CartesianGrid stroke="#f5f5f5" />
//           <XAxis type="number" />
//           <YAxis dataKey="name" type="category" scale="band" />
//           <Tooltip />
//           <Legend />
//           <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
//           <Bar dataKey="pv" barSize={20} fill="#413ea0" />
//           <Line dataKey="uv" stroke="#ff7300" />
//         </ComposedChart>
//       </ResponsiveContainer>
//     );
// }

// export default Citychart;


// import "./styles.css";
import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380
  }
];

export default function Citychart() {
  return (
    <ComposedChart
    className="overflow-x-auto"
      layout="vertical"
      width={450}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" scale="band" />
      <Tooltip />
      <Legend />
      <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
  );
}
