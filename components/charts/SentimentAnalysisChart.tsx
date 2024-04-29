import React from 'react';
import {
  PolarChart,
  CommonSeriesSettings,
  Series,
  Export,
  Tooltip,
} from 'devextreme-react/polar-chart';
import { fruitSources, productionData } from './data';

export function SentimentAnalysisChart() {
  return (
    <PolarChart
      id="chart"
      dataSource={productionData}
      useSpiderWeb={true}
      title="Fruit Production in 2010 (Millions of Tons)"
    >
      <CommonSeriesSettings type="line" />
      {
        fruitSources.map((item) => <Series
          key={item.value}
          valueField={item.value}
          name={item.name} />)
      }
      <Export enabled={true} />
      <Tooltip enabled={true} />
    </PolarChart>
  );
}

