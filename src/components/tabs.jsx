import { useState } from 'react'
import content from '../content/content.js'

function Tabs() {
  const [activeContentIndex, setActiveContentIndex] = useState(0)

  return (
    <div className="tabs">

      <div className="tabs-buttons">
        {content.map((_, index) => (
          <button
            key={index}
            className={index === activeContentIndex ? 'tab active' : 'tab'}
            onClick={() => setActiveContentIndex(index)}
          >
            تب {index + 1}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {content[activeContentIndex].map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default Tabs