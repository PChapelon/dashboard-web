import { h } from 'hyperapp'

function renderCheckbox (item, props) {
  return (<div className='navigationBar__item'>
    <span className={item.checked ? 'navigationBar__flag selected' : 'navigationBar__flag'} style={{backgroundImage: 'url(https://www.countryflags.io/' + item.alpha2Code.toLowerCase() + '/flat/64.png)'}}></span>
    <label className='navigationBar__checkboxLabel' key={item.numericCode} for={'navigationBar__checkbox' + item.numericCode}>
      <input id={'navigationBar__checkbox' + item.numericCode} onchange={ () => { props.actions.toggleCountry(item.numericCode); props.actions.countSelectedCountries(); props.actions.sortBy({property: props.state.order.lastProperty, sameOrder: true}) }} type='radio'/>
      <span className='navigationBar__checkbox'>
        <i className='material-icons'>check_box</i>
      </span>
    </label>
  </div>)
}

export default (props) =>
  <div className='navigationBar'>
    {props.state.countries.map((item) => item.checked === true && renderCheckbox(item, props))}
  </div>
