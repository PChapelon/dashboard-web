import { h } from 'hyperapp'
import SearchBar from '../SearchBar'

const dataURL = 'https://restcountries.eu/rest/v2/all'

function initCountries (actions) {
  fetch(dataURL).then(res => res.json()).then((res) => actions.getCountries(res))
}

export default (state, actions) =>
  <div className='app' oncreate={() => initCountries(actions)} onclick={() => actions.setInputFocus(false)}>
    <div className='app__header'>
      <h1 className='app__title'>Gl<i className='material-icons'>public</i>balize</h1>
      <SearchBar state={state} actions={actions}/>
    </div>
  </div>
