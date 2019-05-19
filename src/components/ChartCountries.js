import { h } from 'hyperapp'
import Chart from 'chart.js'

function renderChart (props) {
  return (<canvas className='chartCountries__canvas' oncreate={ (element) => {
    return (new Chart(element.getContext('2d'), {
      type: 'bar',
      data: {
        labels: props.state.countries.filter((element) => element.checked).map((element) => element.name),
        datasets: [{
          label: 'Population data',
          backgroundColor: 'rgb(15,172,243)',
          borderColor: 'rgb(15,172,243)',
          data: props.state.countries.filter((element) => element.checked).map((element) => element.population)
        }]
      },
      options: {}
    }))
  }
  }/>)
}

export default (props) => {
  return (<div className='chartCountries'>
    { renderChart(props) }
  </div>)
}
