import { h } from 'hyperapp'
import SearchBar from '../SearchBar'
import CountriesList from '../CountriesList'
import SortCheckbox from '../SortCheckbox'
import ChartCountries from '../ChartCountries'

const dataURL = 'https://restcountries.eu/rest/v2/all'

function initCountries (actions) {
  fetch(dataURL).then(res => res.json()).then((res) => actions.getCountries(res))
}

export default (state, actions) =>
  <div className='app' oncreate={() => initCountries(actions)} onclick={() => actions.setInputFocus(false)}>
    <div className='app__header' style={state.inputFocus ? {backgroundColor: 'rgba(145,137,126,0.05)'} : {backgroundColor: 'white'}}>
      <div className='app__headerSection'>
        <h1 className='app__title'>Gl<i className='material-icons'>public</i>balize</h1>
        <div className='app__refresh' onclick={() => actions.resetCountries()}><i className='material-icons'>refresh</i></div>
      </div>
      <SearchBar state={state} actions={actions}/>
    </div>
    <div className='app__body' style={state.inputFocus ? {backgroundColor: 'rgba(145,137,126,0.05)'} : {backgroundColor: 'white'}}>
      <SortCheckbox state={state} actions={actions}/>
      <CountriesList state={state} actions={actions}/>
      <ChartCountries state={state} actions={actions}/>
    </div>
  </div>
