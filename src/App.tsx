import dots from './инклинометрия';
import ReactECharts from "./components/ReactECharts";
import './App.css';
import { useEffect } from 'react';
import { ChartWidget } from './lib/widgets/chartWidget/ui/chartWidget';
;

const option1 = {
  xAxis: {
    type: 'value',
  },
  yAxis: {
    type: 'value'
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 10
    },
    {
      start: 0,
      end: 10
    }
  ],
  series: [
    {
      data: dots.data.map(item=> [item.x, item.y]),
      type: 'line'
    }
  ]
};

const option = {
  tooltip: {},
  backgroundColor: '#fff',
  xAxis3D: {
    type: 'value'
  },
  yAxis3D: {
    type: 'value'
  },
  zAxis3D: {
    type: 'value'
  },
  grid3D: {
    viewControl: {
      projection: 'orthogonal'
    },
    axisPointer: {
      show: false
    }
  },
  series: [
    {
      type: 'line3D',
      data: dots.data.map(item=> [item.x, item.y, item.z]),
      symbolSize: 2.5,
      lineStyle: {
        width: 2,
        color: 'black'
      }
    }
  ]
};

function App() {
  return (
    <div className="App">
      <div className='echart'>
       {/* @ts-ignore*/}
        {/* <ReactECharts option={option1}  />  */}
        <ChartWidget dots={dots} />
      </div>
    </div>
  );
}

export default App;
