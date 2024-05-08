import dots from './инклинометрия';
import ReactECharts from "./components/ReactECharts";
import './App.css';
import { useEffect } from 'react';
import { ChartWidget } from './lib/widgets/chart/ui/chart';
import GanttChart from './lib/entities/ganttChart/ui/ganttChart';
;

export const ganttData =
  [
    {category: 'Task1', startDate: 1331323200000, endDate: 1331923200000},
    {
      category: 'Task 2',
      startDate: '2012/03/02',
      endDate: '2012/03/05',
    },
    {
      category: 'Task 3',
      startDate: '2012/03/04',
      endDate: '2012/03/07',
    },
    {
      category: 'Task 4',
      startDate: '2012/03/06',
      endDate: '2012/03/08',
    },
    {
      category: 'Task 5',
      startDate: '2012/03/05',
      endDate: '2012/03/10',
    },
  ]

function App() {
  return (
    <div className="App">
       {/* @ts-ignore*/}
        {/* <ReactECharts option={option1}  />  */}
        {/* <ChartWidget dots={dots} style={{width:'1600px', height: '800px'}}/> */}
        <GanttChart data={ganttData} />
    </div>
  );
}

export default App;
