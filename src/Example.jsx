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

// import React, { useState } from 'react'

// const Example = () => {
//   const [list, setList] = useState([1,2,3])
//   return (
//     <div>
//       <ul>
//         {list.map((item, index) => {
//           console.log(index)
//           return <li key={index}>{item}</li>
//         })}
//       </ul>
//       <button onClick={() => (setList([...list, list.length + 1]))}>Click me</button>
//     </div>
//   )
// }

// export default Example

// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'

// const Example = () => {
//   const [count, setCount] = useState(0);
//   const [colorChange, setColorChange] = useState('khaki');

//   function countValue() {
//     // setCount(count + 1);
//     // or
//     setCount(val=> val + 1);
//   }

//   // useEffect(()=> {
//   //   console.log(`count value is ${count}. Color is ${colorChange}.`)
//   // },[count, colorChange])
//   // or

//   console.log(`count value is ${count}. Color is ${colorChange}.`)

//   const changeColor = () => {
//     setColorChange(colorChange === 'khaki' ? 'lightblue' : 'khaki')
//   }

//   return (
//     <div>
//       <h1 style={{color: colorChange}}>{count}</h1>
//       <button onClick={countValue}>+ 1</button>
//       <button onClick={changeColor}>Change Color</button>
//     </div>
//   )
// }

// export default Example

// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'

// const Example = () => {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(()=> {
//     window.addEventListener("resize", changeWidth);
//     console.log('Event listener is added.');
//     return ()=>{
//       window.removeEventListener("resize", changeWidth);
//       console.log('Event listener is removed.');
//     }
//   },[])

//   function changeWidth(){
//     setWidth(window.innerWidth);
//   }
//   return (
//     <div>
//       <h1>{width} px</h1>
//     </div>
//   )
// }

// export default Example

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Users.css'

const Example = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const fetchUsers = async()=>{
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      setUsers(data);
      console.log(users);
    }
    fetchUsers();
  },[])

  return (
    <div className='user-list'>
      <h1>GitHub User Lists</h1>
      <ul>
        {users.map(user=>(
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <div className="">
              <p>{user.login}</p>
              <a href={user.html_url}>
                <button>GitHub Repo</button>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Example