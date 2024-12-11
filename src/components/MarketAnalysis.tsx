import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';
import '../styles/MarketAnalysis.css';

const MarketAnalysisTool = () => {
  // Sample market data - in a real app, this would come from an API
  const marketTrends = [
    { month: 'Jan', price: 450000, inventory: 120, daysOnMarket: 25 },
    { month: 'Feb', price: 455000, inventory: 115, daysOnMarket: 23 },
    { month: 'Mar', price: 460000, inventory: 125, daysOnMarket: 22 },
    { month: 'Apr', price: 465000, inventory: 130, daysOnMarket: 20 },
    { month: 'May', price: 470000, inventory: 128, daysOnMarket: 19 },
    { month: 'Jun', price: 475000, inventory: 135, daysOnMarket: 18 }
  ];

  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('residential');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 });

  const marketMetrics = {
    averagePrice: 465000,
    priceChange: 5.2,
    averageDaysOnMarket: 21,
    inventoryLevel: 'Moderate',
    demandLevel: 'High',
    investmentRating: 'A'
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const MetricCard = ({ title, value, change, icon }) => (
    <div className="metric-card">
      <div className="metric-header">
        <span className="metric-icon">{icon}</span>
        <div className="metric-title">
          <h3>{title}</h3>
          <p className="metric-value">{value}</p>
        </div>
      </div>
      {change && <div className="metric-change">{change}</div>}
    </div>
  );

  return (
    <div className="market-analysis">
      <div className="header">
        <h1>Real Estate Market Analysis</h1>
        <p>Analyze current market trends, property values, and investment opportunities in your area.</p>
      </div>

      {/* Search and Filter Section */}
      <div className="filters">
        <div className="filter-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            placeholder="Enter ZIP code or city"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="propertyType">Property Type</label>
          <select
            id="propertyType"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="multi-family">Multi-Family</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="minPrice">Min Price</label>
          <input
            id="minPrice"
            type="number"
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            id="maxPrice"
            type="number"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
          />
        </div>
      </div>

      {/* Market Metrics Cards */}
      <div className="metrics-grid">
        <MetricCard
          title="Average Price"
          value={formatCurrency(marketMetrics.averagePrice)}
          change={`+${marketMetrics.priceChange}% from last month`}
          icon="📈"
        />

        <MetricCard
          title="Days on Market"
          value={`${marketMetrics.averageDaysOnMarket} days`}
          change={`${marketMetrics.inventoryLevel} inventory level`}
          icon="🏠"
        />

        <MetricCard
          title="Market Demand"
          value={marketMetrics.demandLevel}
          change={`Investment Grade: ${marketMetrics.investmentRating}`}
          icon="👥"
        />
      </div>

      {/* Charts Section */}
      <div className="charts-grid">
        <div className="chart-card">
          <h3>Price Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={marketTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="#F59E0B" 
                name="Average Price"
                strokeWidth={2} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Market Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={marketTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="inventory" fill="#8B5CF6" name="Inventory" />
              <Bar dataKey="daysOnMarket" fill="#EC4899" name="Days on Market" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Market Insights Section */}
      <div className="market-insights">
        <h3>Market Insights</h3>
        <div className="insights-grid">
          <div className="insight-card">
            <h4>Supply & Demand</h4>
            <p>Current market shows {marketMetrics.inventoryLevel.toLowerCase()} supply levels with {marketMetrics.demandLevel.toLowerCase()} buyer demand.</p>
          </div>
          <div className="insight-card">
            <h4>Price Trends</h4>
            <p>Property values have increased by {marketMetrics.priceChange}% in the last month, indicating a strong seller's market.</p>
          </div>
          <div className="insight-card">
            <h4>Investment Outlook</h4>
            <p>With an investment grade of {marketMetrics.investmentRating}, this market shows strong potential for value appreciation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysisTool;