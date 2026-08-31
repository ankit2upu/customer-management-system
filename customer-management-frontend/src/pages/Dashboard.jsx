import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

import { getDashboardStats } from "../services/dashboardService";

function Dashboard() {

  const [stats, setStats] = useState({
    totalCustomers: 0,
    activeCustomers: 0,
    pendingCustomers: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);


  const fetchDashboardStats = async () => {
    try {
      const response = await getDashboardStats();

      setStats(response.data);

    } catch (error) {
      console.error("Error fetching dashboard data:", error);

    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <Navbar />

      <div className="dashboard-container">

        <h1>Dashboard</h1>

        <p className="dashboard-subtitle">
          Overview of your customer management system
        </p>

        {loading ? (
          <p>Loading dashboard...</p>
        ) : (

          <div className="dashboard-cards">

            <DashboardCard
              title="Total Customers"
              value={stats.totalCustomers}
              icon="👥"
            />

            <DashboardCard
              title="Active Customers"
              value={stats.activeCustomers}
              icon="✅"
            />

            <DashboardCard
              title="Pending Customers"
              value={stats.pendingCustomers}
              icon="⏳"
            />

          </div>

        )}

      </div>
    </>
  );
}

export default Dashboard;