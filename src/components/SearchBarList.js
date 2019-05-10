import { h } from 'hyperapp'
function renderItem (item, props) {
  return (<label className={(props.state.nbSelectedCountries >= 5 && !item.checked) ? 'searchBarList__item disabled' : 'searchBarList__item'} key={item.numericCode} for={'searchBarItem__' + item.numericCode}>
    <span className='country__titleFlag' style={{backgroundImage: 'url(https://www.countryflags.io/' + item.alpha2Code.toLowerCase() + '/flat/64.png)'}}></span>
    <span className='searchBarList__itemText'>{item.name}</span>
    <input id={'searchBarItem__' + item.numericCode} disabled={(props.state.nbSelectedCountries >= 5 && !item.checked) ? 'disabled' : ''} onchange={ () => { props.actions.toggleCountry(item.numericCode); props.actions.countSelectedCountries() }} type='checkbox' checked={item.checked ? 'checked' : ''}/>
    <i className='material-icons'>{item.checked ? 'check_box' : 'check_box_outline_blank'}</i>
  </label>)
}
export default (props) =>
  <div className='searchBarList'>
    {props.state.inputValue.length >= 2 && props.state.inputFocus &&
    props.state.countries.map((item) => item.includes && item.startsWith && renderItem(item, props))}
    {props.state.inputValue.length >= 3 && props.state.inputFocus &&
    props.state.countries.map((item) => item.includes && !item.startsWith && renderItem(item, props))}
  </div>
