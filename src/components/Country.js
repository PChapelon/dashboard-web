import { h } from 'hyperapp'

function renderCountry (item) {
  return (
    <ul className='country' style={{order: item.index}}>
      <lh className='country__title'>{ item.name }</lh>
      <li className='country__detail'>
        <div className='country__flag' style={{backgroundImage: 'url(https://www.countryflags.io/' + item.alpha2Code.toLowerCase() + '/flat/64.png)'}}></div>
      </li>
      <li className='country__detail'>
        <span className='country__detailTitle'>Capital</span>
        <span>{ item.capital }</span>
      </li>
      <li className='country__detail latlng'>
        <span className='country__detailTitle'>Lat</span>
        <span>{ item.latlng[0] }</span>
        <span className='country__detailTitle'>Long</span>
        <span>{ item.latlng[1] }</span>
      </li>
      <li className='country__detail'>
        <span className='country__detailTitle'>Area</span>
        <span>{ item.area === null ? 'NOT SPECIFIED' : item.area } km<sup>2</sup></span>
      </li>
      <li className='country__detail'>
        <span className='country__detailTitle'>Population</span>
        <span>{ item.population }</span>
      </li>
      <li className='country__detail'>
        <span className='country__detailTitle'>Population Density</span>
        <span>{ item.population === null || item.area === null ? 'NOT SPECIFIED' : (item.population / item.area).toFixed(2) }</span>
      </li>
      <li className='country__detail'>
        <span className='country__detailTitle'>Language</span>
        <span>{ item.languages[0]['name'] }</span>
      </li>
      <li className='country__detail'>
        <span className='country__detailTitle'>Gini</span>
        <span>{ item.gini === null ? 'NOT SPECIFIED' : item.gini }</span>
      </li>
      <li className='country__detail'>
        <span className='country__detailTitle'>Currencies</span>
        <span>{ item.currencies[0]['name'] }</span>
      </li>
    </ul>)
}

export default (props) =>
  <div className='countriesList_content' onclick={() => { console.log(props.state) }}>
    { props.state.countries.map((item) => item.checked && renderCountry(item)) }
  </div>
