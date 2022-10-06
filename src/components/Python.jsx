import React from 'react'

export default function Python() {
  return (
    <div>
      <h4>Resource</h4>
      <ul>
          <li><a target="_blank" href="https://docs.python.org/3/library/urllib.parse.html">Python Docs</a></li>
      </ul>
      <div>
        <pre>
          <code>
            {`
Code Snippet
------------
from urllib.parse import urlparse

urlparse("scheme://netloc/path;parameters?query#fragment")
url = urlparse("http://docs.python.org:80/3/library/urllib.parse.html?highlight=params#url-parsing")

print(url)
print("scheme: ", url.scheme)
print("netloc: ", url.netloc)
print("hostname: ", url.hostname)
print("port: ", url.port)
print("path: ", url.path)
print("query: ", url.query)
print("params: ", url.params)
print("fragment: ", url.fragment)


Stdout
------
ParseResult(scheme='http', netloc='docs.python.org:80', path='/3/library/urllib.parse.html', params='', query='highlight=params', fragment='url-parsing')
scheme:  http
netloc:  docs.python.org:80
hostname:  docs.python.org
port:  80
path:  /3/library/urllib.parse.html
query:  highlight=params
params:  
fragment:  url-parsing
`
  }
          </code>
        </pre>
      </div>
    </div>
  )
}
