import React, {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
function PieChartComponent() {
    const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF", "#6495ED"];
    const location = useLocation();
    const basket = location.state;
    const [pieData, setPieData] = useState([]);

    useEffect(() => {
        let temp = [];
        basket.cryptoAlloc.map(allocation => {
            let obj = {
            "name": allocation.cryptoSymbol,
            "value": allocation.weight
            }
            temp.push(obj);
        })
        setPieData(temp);
    },[basket.cryptoAlloc]) //will only be executed again when 'basket.cryptoAlloc' changes
    //Set the action on mouseover
    const CustomTooltip = ({ active, payload }) => {
        if (active) {
            return (
            <div
                className="custom-tooltip"
                style={{
                backgroundColor: "#ffff",
                padding: "5px",
                border: "1px solid #cccc"
                }}
            >
                <label className="font11">{`${payload[0].name} : ${payload[0].value}%`}</label>
            </div>
            );
        }
        return null;
    };

    return (
        <div style={{ width: '100%', height: 210 }}>
            <ResponsiveContainer>{/*A container component to make charts adapt to the size of parent container. */}
                <PieChart>
                    <Pie
                        data={pieData}
                        color="#000000"
                        dataKey="value"
                        nameKey="name"
                        cx="50%" //The x-coordinate of center
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                    >
                        {pieData.map((entry, index) => (
                            <Cell  //specify attributes of each child
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{fontSize: "12px"}} iconSize={7}/>
                </PieChart>
        </ResponsiveContainer>
        </div>
    );
}
export default PieChartComponent;