import React, { useState } from 'react'
import Javascript from './Javascript'

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
            body: <Javascript />
        },
        {
            name: "Java",
            body: <div>Java Content</div>
        },
        {
            name: "Python",
            body: <div>Python Content</div>
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
            <div data-index={i} onClick={() => handleTabClick(i)}>{t.name}</div>
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
    <div>
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
