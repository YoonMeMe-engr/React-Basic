// import React from 'react';

// const App = () => {
//   return (
//     <>
//       <h1>Hello World!</h1>
//       <p style={{color: 'white', 
//         backgroundColor: 'lightblue',
//         fontSize: '36px'}}>This is my first.</p>
//     </>
//   )
// };

// export default App

// import React from 'react'

// function App() {
//   const inlineCSS = {
//     color: 'white',
//     backgroundColor: 'lightblue',
//     fontSize: '36px'
//   }
//   return (
//     <div>
//       <h1>Hello World!</h1>
//       <p style={inlineCSS}>This is my first.</p>
//     </div>
//   )
// }

// export default App

// import React from 'react';
// import Navbar from './Navbar/Navbar';
// import { Route, Routes } from 'react-router-dom';
// import Home from './home/Home';
// import About from './about/About';
// import Contact from './contact/Contact';

// function App() {
//   return (
//     <React.Fragment>
//       <Navbar></Navbar>
//       <Routes>
//         <Route path='/' element={<Home />}></Route>
//         <Route path='/about' element={<About />}></Route>
//         <Route path='/contact' element={<Contact />}></Route>
//       </Routes>
//     </React.Fragment>
//   )
// }

// export default App

// import React from 'react'
// import Profile from './profile/Profile'
// // props => to pass/send data from one component to another

// const App = () => {
//   return (
//     <div className='container'>
//       <Profile name='Ms. Yoon Me Me' age='33' job='Engineer'></Profile>
//       <Profile name='Engr. Yoon Me Me' age='33' job='Engineer'></Profile>
//       <Profile name='Technology Group' age='33' job='Engineer/Developer'></Profile>
//       <Profile name='Ms. Yoon Me Me' age='33' job='Engineer'></Profile>
//       <Profile name='Engr. Yoon Me Me' age='33' job='Engineer'></Profile>
//       <Profile name='Technology Group' age='33' job='Engineer/Developer'></Profile>
//       <Profile name='Ms. Yoon Me Me' age='33' job='Engineer'></Profile>
//       <Profile name='Engr. Yoon Me Me' age='33' job='Engineer'></Profile>
//       <Profile name='Technology Group' age='33' job='Engineer/Developer'></Profile>
//       <Profile name='Ms. Yoon Me Me' age='33' job='Engineer'></Profile>
//       <Profile name='Engr. Yoon Me Me' age='33' job='Engineer'></Profile>
//       <Profile name='Technology Group' age='33' job='Engineer/Developer'></Profile>
//       <Profile name='Ms. Yoon Me Me' age='33' job='Engineer'></Profile>
//       <Profile name='Engr. Yoon Me Me' age='33' job='Engineer'></Profile>
//       <Profile name='Technology Group' age='33' job='Engineer/Developer'></Profile>
//       <Profile name='Ms. Yoon Me Me' age='33' job='Engineer'></Profile>
//       <Profile name='Engr. Yoon Me Me' age='33' job='Engineer'></Profile>
//       <Profile name='Technology Group' age='33' job='Engineer/Developer'></Profile>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Counter from './counter/Counter'

// const App = () => {
//   return (
//     <div className='container'>
//       <Counter></Counter>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Example from './Example'


const App = () => {
  return (
    <div className='container'>
      <Example></Example>
    </div>
  )
}

export default App