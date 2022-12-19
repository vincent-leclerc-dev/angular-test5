import { MetricKey } from "./metricKey";
import { Metric } from "./metric.model";

export class CounterService {

    metrics: Metric[] = [
      {
        name: MetricKey.ENABLE_USER,
        value: 0
      },
      {
        name: MetricKey.DISABLE_USER,
        value: 0
      }
    ]

    increment(metricName: MetricKey) {
      const index = this.metrics.findIndex(metric => metric.name === metricName);
      const newMetric = {...this.metrics[index]};
      newMetric.value++;
      this.metrics[index] = newMetric;
    }

}
