import React from 'react'

export default function Javascript() {
  return (
    <div>
        <div>
            <h4>Resource</h4>
            <ul>
                <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/URL">MDN</a></li>
            </ul>
        </div>
        <div>
            <pre>
                <code>
{`
Code Snippet
------------
const url = 'http://example.com:4000/docs/books/tutorial/index.html?name=networking#DOWNLOADING';
const urlObject = new URL(url);
console.log("hash:", urlObject.hash);
console.log("host:", urlObject.host);
console.log("hostname:", urlObject.hostname);
console.log("href:", urlObject.href);
console.log("origin:", urlObject.origin);
console.log("password:", urlObject.password);
console.log("pathname:", urlObject.pathname);
console.log("port:", urlObject.port);
console.log("protocol:", urlObject.protocol);
console.log("search:", urlObject.search);
console.log("searchParams:", urlObject.searchParams);
console.log("username:", urlObject.username);


Stdout
------
hash: #DOWNLOADING
host: example.com:4000
hostname: example.com
href: http://example.com:4000/docs/books/tutorial/index.html?name=networking#DOWNLOADING
origin: http://example.com:4000
password: 
pathname: /docs/books/tutorial/index.html
port: 4000
protocol: http:
search: ?name=networking
searchParams: URLSearchParams { 'name' => 'networking' }
username: 

`}
                </code>
            </pre>
        </div>
    </div>
  )
}
