import { h } from 'hyperapp'

function renderCountry (item) {
  return (<div className='country'>{ item.name }</div>)
}

export default (props) =>
  <div onclick={() => { console.log(props.state) }}>
    { props.state.countries.map((item) => item.checked ? renderCountry(item) : console.log())}
  </div>
