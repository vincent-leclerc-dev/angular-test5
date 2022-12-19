import { MetricKey } from "./metricKey";

export interface Metric {
    name: MetricKey;
    value: number;
}
