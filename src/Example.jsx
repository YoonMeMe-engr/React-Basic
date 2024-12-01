import React, { useState } from 'react'

const Example = () => {
    const [text, setText] = useState("Hello World");
    const textChange = (e) => {
        setText(e.target.value);
    }
  return (
    <div>
        <h1>{text}</h1>
        {/* <input value={text} onChange={(e) => setText(e.target.value)} type="text" /> */}
        <input value={text} onChange={textChange} type="text" />
    </div>
  )
}

export default Example