import './App.css';
import { Chart } from 'react-google-charts';

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 8],
  ["Eat", 3],
  ["Sleep", 8],
  ["Studies", 5],
];

function App() {
  return (
    <div className="App">
    <Chart
    chartType="PieChart"
    data={data}
    width={"100%"}
    height={"600px"}
    />
    </div>
  );
}

export default App;
