import React, { useState } from 'react'
import Javascript from './Javascript'
import Java from './Java'
import Python from './Python'
import javalogo from '../assets/Java_logo.png'
import pylogo from '../assets/py_logo.svg'
import jslogo from '../assets/js_logo.png'

export default function Languages() {
    const [activeTab, setActiveTab] = useState(0)
    // const langs = [
    //     "javascript",
    //     "java",
    //     "python"
    // ]

    const langs = [
        { 
            name: "JavaScript",
            body: <Javascript />,
            logo: jslogo,
        },
        {
            name: "Java",
            body: <Java />,
            logo: javalogo,
        },
        {
            name: "Python",
            body: <Python />,
            logo: pylogo,
        }
    ]

    // function capitalizeFirst(text) {
    //     return text.charAt(0).toUpperCase() + text.slice(1)
    // }

    function handleTabClick(index) {
        setActiveTab(index)
    }

    const tabs = langs.map( (t, i) => {
        return (<div key={i} className={activeTab === i ? `tab-title active-tab` : `tab-title`}>
            <div data-index={i} onClick={() => handleTabClick(i)}><img className="logo" src={t.logo}/>{t.name}</div>
        </div>)
    })

    const tabContents = langs.map( (t, i) => {
        return (
            <div key={i} className={activeTab === i ? `active-content content` : `content`}>
                {t.body}
            </div>
        )
    })

  return (
    <div className="languages-container">
        <h2>References for URL Parsing</h2>
        <div className="tabs-container">
            {tabs}
        </div>
        <div className="tab-content-container">
            {tabContents}
        </div>
        {/* <div className={`${langs[0]} language`}>
            <h2>{capitalizeFirst(langs[0])}</h2>
            <div>Content</div>
        </div>
        <div className={`${langs[1]} language`}>
            <h2>{capitalizeFirst(langs[1])}</h2>
            <div>Content</div>
        </div> */}
    </div>
  )
}
