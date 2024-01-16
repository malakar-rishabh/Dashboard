import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell , LineChart ,Line , ScatterChart, Scatter, ZAxis, AreaChart, Area } from 'recharts';
import './CSS/adminhome.css'
const data = [
    { name: 'Q1', uv: 35, pv: 44, amt: 24 },
    { name: 'Q2', uv: 51, pv: 6, amt: 49 },
    { name: 'Q3', uv: 15, pv: 25, amt: 30 },
    { name: 'Q4', uv: 60, pv: 50, amt: 15 },
];

const pieData = [
    { name: 'Group A', value: 600 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];


const scatterData = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function AdminHome(props) {
    return (
        <>
            <div className='container'>
                <div className='charts'>
                    <BarChart
                        width={300}
                        height={300}
                        data={data}
                        margin={{
                            top: 5, right: 20, left: 0, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>

                </div>
              
                <div className='charts'>
                <PieChart width={300} height={300}>
                    <Pie
                        data={pieData}
                        cx={150}
                        cy={150}
                        innerRadius={60}
                        outerRadius={120}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {
                            pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                    <Tooltip />
                </PieChart>

                </div>

                <div className='charts'>
                <LineChart
                    width={300}
                    height={300}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>

                </div>

                <div className='charts'>
                <AreaChart
                    width={300}
                    height={300}
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                </div>


            </div>


        </>
    );
}