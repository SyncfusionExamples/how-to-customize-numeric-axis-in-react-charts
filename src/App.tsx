import React from 'react';
import './App.css';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Legend, ColumnSeries, 
  Inject} from '@syncfusion/ej2-react-charts';
import {sampleData, sampleData2} from './data';
function App() {
  return (
    <div style={{textAlign:"center", margin:'5%'}}>
      {/* Add minimum:15, maximum:21, in primary x-axis property to set a custum range */}
      <ChartComponent width="70%" legendSettings={{visible:true}}
      title="England vs West Indies" useGroupingSeparator={true}
      primaryXAxis={{valueType:"Double", title:"Death Overs",
      interval:1, labelFormat:"Over-{value}", rangePadding:"None",
      edgeLabelPlacement:"Shift"}}
      primaryYAxis={{labelFormat:"p"}}>
        <Inject services={[ColumnSeries, Legend]}></Inject>
        <SeriesCollectionDirective>
          <SeriesDirective type="Column" name="England" dataSource={sampleData}
          xName="overs" yName="runs"></SeriesDirective>
          <SeriesDirective type="Column" name="West Indies" dataSource={sampleData2}
          xName="overs" yName="runs"></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}

export default App;
