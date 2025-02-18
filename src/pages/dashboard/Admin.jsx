import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend,ResponsiveContainer} from "recharts";
import 'animate.css';

const Admin = () => {
  const [stats, setStats] = useState({
    totalBiodataCount: 0,
    maleBiodataCount: 0,
    femaleBiodataCount: 0,
    premiumBiodataCount: 0,
    totalRevenue: 0, 
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("https://assignment-12-server-five-opal.vercel.app/admin-stats"); // Adjust URL as necessary
        setStats(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div>Loading stats...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Prepare data for the pie chart
  const pieChartData = [
    { name: "Total Biodata", value: stats.totalBiodataCount },
    { name: "Male Biodata", value: stats.maleBiodataCount },
    { name: "Female Biodata", value: stats.femaleBiodataCount },
    { name: "Premium Biodata", value: stats.premiumBiodataCount },
    { name: "Total Revenue ($)", value: stats.totalRevenue },
  ];

  // Colors for the pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#845EC2"];

  return (
    <div className="">
      <h1 className="animate__animated animate__fadeInDown">Welcome to Dashboard!!</h1>
      <div className="mt-5 ml-10">
      <h1> Statistics</h1>
      <ul className="text-pretty">
        <li>
          <strong>Total Biodata Count: </strong>  {stats.totalBiodataCount}
        </li>
        <li>
          <strong>Male Biodata Count:</strong>  {stats.maleBiodataCount}
        </li>
        <li>
          <strong>Female Biodata Count:</strong> {stats.femaleBiodataCount}
        </li>
        <li>
          <strong>Premium Biodata Count:</strong> {stats.premiumBiodataCount}
        </li>
        
      </ul>
      </div>

      {/* Pie Chart */}
      <div className="mt-5" >
        <h2 className="text-center">Biodata Stats Visualization</h2>
        <ResponsiveContainer width="100%" height={400}>

        <PieChart>
          <Pie
            data={pieChartData}
            cx="50%" 
            cy="50%" 
            labelLine={false}
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
};

export default Admin;
