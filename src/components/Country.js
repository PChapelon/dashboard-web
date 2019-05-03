import { h } from 'hyperapp'

function renderCountry (item) {
  return (
    <ul className='country'>
      <lh>{ item.name }</lh>
      <li className='detailCountry'>
        <span className='spanTitle'>Capital</span>
        <span>{ item.capital }</span>
      </li>
      <li className='detailCountry latlng'>
        <span className='spanTitle'>Lat</span>
        <span>{ item.latlng[0] }</span>
        <span className='spanTitle'>Long</span>
        <span>{ item.latlng[1] }</span>
      </li>
      <li className='detailCountry'>
        <span className='spanTitle'>Area</span>
        <span>{ item.area }km&#xB2;</span>
      </li>
      <li className='detailCountry'>
        <span className='spanTitle'>Population</span>
        <span>{ item.population }</span>
      </li>
      <li className='detailCountry'>
        <span className='spanTitle'>Population Density</span>
        <span>{ (item.population + '/' + item.area).toFixed(2) }</span>
      </li>
      <li className='detailCountry'>
        <span className='spanTitle'>Language</span>
        <span>{ item.languages[0]['name'] }</span>
      </li>
      <li className='detailCountry'>
        <span className='spanTitle'>Gini</span>
        <span>{ item.gini }</span>
      </li>
      <li className='detailCountry'>
        <span className='spanTitle'>Currencies</span>
        <span>{ item.currencies[0]['name'] }</span>
      </li>
    </ul>)
}

export default (props) =>
  <div className='countriesList_content' onclick={() => { console.log(props.state) }}>
    { props.state.countries.map((item) => item.checked ? renderCountry(item) : console.log())}
  </div>
