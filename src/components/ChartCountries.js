import { h } from 'hyperapp'
import Chart from 'chart.js'

function renderChart (props) {
  console.log('re')
  return (<canvas className='countriesChart' oncreate={ (element) => {
    return (new Chart(element.getContext('2d'), {
      type: 'bar',
      data: {
        labels: props.state.countries.filter((element) => element.checked).map((element) => element.name),
        datasets: [{
          label: 'Population data',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: props.state.countries.filter((element) => element.gini).map((element) => element.gini)
        }]
      },
      options: {}
    }))
  }
  }/>)
}

export default (props) => {
  return (<div className='chartComparator'>
    { renderChart(props) }
  </div>)
}
