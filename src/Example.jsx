// import React, { useState } from 'react'

// const Example = () => {
//     const [text, setText] = useState("Hello World");
//     const textChange = (e) => {
//         setText(e.target.value);
//     }
//   return (
//     <div>
//         <h1>{text}</h1>
//         {/* <input value={text} onChange={(e) => setText(e.target.value)} type="text" /> */}
//         <input value={text} onChange={textChange} type="text" />
//     </div>
//   )
// }

// export default Example

// import React, { useState } from 'react'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

// const Example = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   function menuOpenFunction(){
//     setMenuOpen(!menuOpen);
//   }
//   return (
//     <div>
//       <button onClick={menuOpenFunction}>
//         <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
//       </button>
//       {menuOpen && (
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       )}
//     </div>
//   )
// }

// export default Example

import React, { useState } from 'react'

const Example = () => {
  const [list, setList] = useState([1,2,3])
  return (
    <div>
      <ul>
        {list.map((item, index) => {
          console.log(index)
          return <li key={index}>{item}</li>
        })}
      </ul>
      <button onClick={() => (setList([...list, list.length + 1]))}>Click me</button>
    </div>
  )
}

export default Example