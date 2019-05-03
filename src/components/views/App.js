import { h } from 'hyperapp'
import SearchBar from '../SearchBar'
import CountriesList from '../CountriesList'

const dataURL = 'https://restcountries.eu/rest/v2/all'

function initCountries (actions) {
  fetch(dataURL).then(res => res.json()).then((res) => actions.getCountries(res))
}

export default (state, actions) =>
  <div className='app' oncreate={() => initCountries(actions)} onclick={() => actions.setInputFocus(false)}>
    <div className='app__header'>
      <div className='app__headerSection'>
        <h1 className='app__title'>Gl<i className='material-icons'>public</i>balize</h1>
        <div className='app__refresh' onclick={() => actions.resetCountries()}><i className='material-icons'>refresh</i></div>
      </div>
      <SearchBar state={state} actions={actions}/>
    </div>
    <div className='app__body'>
      <CountriesList state={state} actions={actions}/>
    </div>
  </div>
