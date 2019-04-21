import { h } from 'hyperapp'
import SearchBarList from '../components/SearchBarList'

export default (props) =>
  <div>
    <input className="searchBar" type="text" placeholder="Add countries..." oninput={ (e) => { props.actions.setInputValue(e.target.value); props.actions.filterCountries() }}/>
    <div className="searchBar__list">
      <SearchBarList state={props.state} actions={props.actions}/>
    </div>
  </div>
