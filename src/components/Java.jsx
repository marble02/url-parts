import React from 'react'

export default function Java() {
  return (
    <div>
        <h4>Resource</h4>
        <ul>
            <li><a target="_blank" href="https://docs.oracle.com/javase/tutorial/networking/urls/urlInfo.html">Oracle</a></li>
        </ul>
        <div>
            <pre>
                <code>
{`
Code Snippet
------------
import java.net.*;
import java.io.*;

public class ParseURL {
    public static void main(String[] args) throws Exception {

        URL aURL = new URL("http://example.com:80/docs/books/tutorial"
                           + "/index.html?name=networking#DOWNLOADING");

        System.out.println("protocol = " + aURL.getProtocol());
        System.out.println("authority = " + aURL.getAuthority());
        System.out.println("host = " + aURL.getHost());
        System.out.println("port = " + aURL.getPort());
        System.out.println("path = " + aURL.getPath());
        System.out.println("query = " + aURL.getQuery());
        System.out.println("filename = " + aURL.getFile());
        System.out.println("ref = " + aURL.getRef());
    }
}


Stdout
------
protocol = http
authority = example.com:80
host = example.com
port = 80
path = /docs/books/tutorial/index.html
query = name=networking
filename = /docs/books/tutorial/index.html?name=networking
ref = DOWNLOADING


`}
                </code>
            </pre>
        </div>
    </div>
  )
}
