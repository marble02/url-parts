import { useEffect, useState } from 'react'
import Languages from './components/Languages'

function App() {
  const [valid, setValid] = useState(true)
  const [url, setUrl] = useState("")
  const [urlObj, setUrlObj] = useState(parseURL())

  const keys = [
    "hash",
    "host", 
    "hostname",
    "href",
    "origin",
    "password",
    "pathname",
    'port',
    "protocol",
    "search",
    "searchParams",
    "username"
  ]

  function parseURL() {
    try {
      if (url == "") return ""
      const urlObject = new URL(url)
      return urlObject}
    catch (err) { 
      // console.error(err);
      return 'error'
    }
  }

  function handleChange(event) {
    setUrl(event.target.value)
  }

  useEffect(() => {
    setUrlObj(parseURL(url))
    // console.log(urlObj)
  }, [url])

  useEffect(() => {
    if (urlObj == 'error') {
      setValid(false)
    }
    else {
      setValid(true)
    }
  }, [urlObj])

  function doSearchParam() {
    let arr = []

    if (urlObj.searchParams) {
      // push headings for search params cell
      arr.push(<tr>
        <th>param</th>
        <th>value</th>
      </tr>)
  
      // push each search param
      for (const p of urlObj.searchParams) {
        arr.push(<tr>
          <td>{p[0]}</td>
          <td>{p[1]}</td>
          </tr>)
      }
    }

    return (<table className='inner-table'><tbody>
      {arr}
      </tbody></table>)
  }

  const allParts = keys.map( (k, i) => 
    <tr key={k}>
      <th>{k}</th>
      {k === "searchParams" ? <td>{doSearchParam()}</td> : <td>{urlObj[k]}</td>}
    </tr>
  )

  return (
    <div className="App">
      <div className="header">
        <h2>URL Parts</h2>
      </div>
      <div className="container">
        <input type="text" placeholder="Enter url string here..." onChange={e => handleChange(e)}></input>
        {!valid && <div style={{color: "red", fontFamily: "sans-serif"}}>Invalid URL</div>}
        {/* <button onClick={parseURL}>Parse</button> */}
        <table>
          <tbody>
            {allParts}
          </tbody>
        </table>
        <Languages />
      </div>
    </div>
  )
}

export default App
