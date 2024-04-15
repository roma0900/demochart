import dots from './инклинометрия';
import LinePlotXY from "./components/LinePlotXY";
import LinePlotXZ from "./components/LinePlotXZ";
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h3>Проекция графика XY</h3>
        <LinePlotXY data={dots.data}/>
      </div>
      <div>
        <h3>Проекция графика XZ</h3>
        <LinePlotXZ data={dots.data}/>
      </div>
    </div>
  );
}

export default App;
