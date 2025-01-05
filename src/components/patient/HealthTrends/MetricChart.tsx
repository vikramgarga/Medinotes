import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { HealthMetric } from '../../../types/health';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MetricChartProps {
  data: HealthMetric[];
  metric: string;
}

export function MetricChart({ data, metric }: MetricChartProps) {
  const chartData = {
    labels: data.map(d => d.date),
    datasets: [
      {
        label: getMetricLabel(metric),
        data: data.map(d => d.value),
        fill: false,
        borderColor: '#07404b',
        tension: 0.1,
        pointBackgroundColor: '#07404b'
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const
      },
      tooltip: {
        enabled: true,
        mode: 'index' as const,
        intersect: false
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: getMetricUnit(metric)
        }
      }
    }
  };

  return <Line data={chartData} options={options} />;
}

function getMetricLabel(metric: string): string {
  const labels: Record<string, string> = {
    bloodSugar: 'Blood Sugar',
    bloodPressure: 'Blood Pressure',
    weight: 'Weight',
    cholesterol: 'Cholesterol'
  };
  return labels[metric] || metric;
}

function getMetricUnit(metric: string): string {
  const units: Record<string, string> = {
    bloodSugar: 'mg/dL',
    bloodPressure: 'mmHg',
    weight: 'kg',
    cholesterol: 'mg/dL'
  };
  return units[metric] || '';
}