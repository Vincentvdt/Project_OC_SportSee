import ChartContainer from "./ChartContainer.tsx";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { PerformanceData } from "../../interfaces";

interface PerformanceChartProps {
    data: PerformanceData;
}

const PerformanceChart = ({data}: PerformanceChartProps) => {

    const radarData = data?.data.map((activity) => ({
        value: activity.value,
        kind: data.kind[activity.kind as keyof typeof data.kind]?.charAt(0).toUpperCase() + data.kind[activity.kind as keyof typeof data.kind]?.slice(1) || "",
    }));

    return (
        <ChartContainer width={258} height={263} color={"#282D30"}>
            <RadarChart outerRadius={70} data={radarData}>
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="kind" tick={{
                    fill: "#FFF",
                    fontSize: "12px",
                    fontWeight: 500,
                }}/>
                <Radar dataKey="value" fill="#FF0101B2" fillOpacity={.7}/>
            </RadarChart>

        </ChartContainer>
    );
};

export default PerformanceChart;