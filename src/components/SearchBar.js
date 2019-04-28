import { h } from 'hyperapp'
import SearchBarList from '../components/SearchBarList'

export default (props) =>
  <div>
    <div className='searchBar' onclick={(e) => { e.stopPropagation(); props.actions.setInputFocus(true) }}>
      <div className={props.state.inputFocus ? 'searchBar__input focus' : 'searchBar__input'}>
        <input type='text' placeholder={props.state.nbSelectedCountries === 5 ? 'Change countries...' : 'Add countries...'} oninput={ (e) => { props.actions.setInputValue(e.target.value); props.actions.filterCountries() }}/>
        <div className='searchBar__counter'><span className={props.state.nbSelectedCountries === 5 ? 'searchBar__counterFull' : ''}>{props.state.nbSelectedCountries}</span><span>/5</span></div>
      </div>
      <div className='searchBar__list'>
        <SearchBarList state={props.state} actions={props.actions}/>
      </div>
    </div>
    <div className='searchBar__background' style={props.state.inputFocus ? {display: 'flex'} : {display: 'none'}}></div>
  </div>
