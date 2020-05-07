import * as React from 'react';
import {useState, useEffect} from 'react'
import axios, {AxiosResponse} from 'axios'
import './App.css';

const API_URL: string = `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/`
const DEFAULT_QUERY: string = `popular.php`

interface Drink {
  idDrink: string,
  strDrink: string
}

const App: React.FC = () => {
  let [query, setQuery] = useState(DEFAULT_QUERY)
  let [data, setData] = useState({ hits : [] })
  let [tempQuery, setTempQuery] = useState(DEFAULT_QUERY)

  useEffect(() => {
    const getData = async () =>  {
      await axios.get<any, AxiosResponse>(API_URL + query)
      .then((r) => {
        const rdata = r.data ? r.data.drinks : []
        console.log('r.data', rdata, typeof rdata)
        setData({ hits: rdata })
      })
      .catch((err) => {
        console.log(err.message)
      })
    }
    getData()
  }, [query])

  useEffect(() => {
    //Handling query change
  }, [query])

  const search = (e: any) => {
    e.preventDefault()
    console.log(data)
    setQuery(tempQuery)
  }
  
  return (
    <div className="App">
        <form onSubmit={search}>
          <input type="text" onChange={e => setTempQuery(e.target.value)} value={tempQuery} placeholder="New Query" />
          <button type="submit">Search</button>
        </form>
        <ul>
          {data.hits.map((item: Drink) => (
            <li key={item.idDrink}>
              {item.strDrink}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;
