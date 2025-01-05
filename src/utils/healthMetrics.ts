import { HealthMetric } from '../types/health';

// Mock data generator for health metrics
export function getHealthMetrics(
  patientId: string,
  metric: string,
  timeRange: string
): HealthMetric[] {
  const now = new Date();
  const months = timeRange === '1m' ? 1 : 
                timeRange === '3m' ? 3 : 
                timeRange === '6m' ? 6 : 12;
  
  const data: HealthMetric[] = [];
  const readings = months * 4; // One reading per week

  for (let i = readings - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - (i * 7));

    let value: number;
    switch (metric) {
      case 'bloodSugar':
        // Mock blood sugar values between 80-180 mg/dL
        value = 80 + Math.random() * 100;
        break;
      case 'bloodPressure':
        // Mock systolic blood pressure between 110-140 mmHg
        value = 110 + Math.random() * 30;
        break;
      case 'weight':
        // Mock weight with small variations
        value = 70 + Math.random() * 2;
        break;
      case 'cholesterol':
        // Mock total cholesterol between 150-220 mg/dL
        value = 150 + Math.random() * 70;
        break;
      default:
        value = 0;
    }

    data.push({
      date: date.toLocaleDateString(),
      value: Math.round(value * 10) / 10
    });
  }

  return data;
}