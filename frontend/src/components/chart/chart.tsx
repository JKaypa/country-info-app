import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import './chart.css'


const Chart: React.FC<{ years: number[], population: number[] }> = ({ years, population }) => {
  return (

    <div className='chart'>
      <Bar data={{
        labels: years,
        datasets: [{
          label: 'Population',
          data: population,
          backgroundColor: 'rgba(68, 96, 218, 0.4)',
        }]
      }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }} />
    </div>
  )
}

export { Chart };