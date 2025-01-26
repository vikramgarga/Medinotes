import { useState } from 'react';
import { LineChart, TrendingUp, Calendar } from 'lucide-react';
import { getHealthMetrics } from '../../../utils/healthMetrics';
import { MetricChart } from './MetricChart';

interface HealthTrendsProps {
  patientId: string;
  showTips: boolean;
}

export function HealthTrends({ patientId, showTips }: HealthTrendsProps) {
  const [selectedMetric, setSelectedMetric] = useState('bloodSugar');
  const [timeRange, setTimeRange] = useState('6m'); // 6 months

  const metrics = getHealthMetrics(patientId, selectedMetric, timeRange);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-[#07404b]" />
          <h2 className="text-xl font-semibold text-[#07404b]">Health Trends</h2>
        </div>
        
        <div className="flex gap-4">
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#07404b]"
          >
            <option value="bloodSugar">Blood Sugar</option>
            <option value="bloodPressure">Blood Pressure</option>
            <option value="weight">Weight</option>
            <option value="cholesterol">Cholesterol</option>
          </select>

          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#07404b]"
          >
            <option value="1m">Last Month</option>
            <option value="3m">Last 3 Months</option>
            <option value="6m">Last 6 Months</option>
            <option value="1y">Last Year</option>
          </select>
        </div>
      </div>

      <div className="h-[300px]">
        <MetricChart data={metrics} metric={selectedMetric} />
      </div>

      {showTips && 
      (<div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-700">
          <strong>Tip:</strong> Regular monitoring of your health metrics helps identify trends and make informed decisions about your health. Share these trends with your healthcare provider during consultations.
        </p>
      </div>)}
    </div>
  );
}