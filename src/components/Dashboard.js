import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-main">
        <div className="dashboard-summary">
          <div className="dashboard-card">
            <h2>Orders</h2>
            <p>150</p>
          </div>
          <div className="dashboard-card">
            <h2>Delivered</h2>
            <p>120</p>
          </div>
          <div className="dashboard-card">
            <h2>Total Stocks Available</h2>
            <p>500</p>
          </div>
          <div className="dashboard-card">
            <h2>Alert Value Threshold</h2>
            <p>10%</p>
          </div>
        </div>
        <div className="dashboard-recent-activities">
          <h2>Recent Activities</h2>
          <ul>
            <li>Order #1023 delivered successfully. <span>2 hours ago</span></li>
            <li>Stock replenishment completed. <span>1 day ago</span></li>
            <li>Threshold alert triggered for Item #45. <span>3 days ago</span></li>
          </ul>
        </div>
      </div>
  );
};

export default Dashboard;
