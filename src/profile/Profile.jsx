// import React from 'react'
// import './Profile.css'

// // props က Object

// const Profile = (props) => {
//     console.log(props)
//   return (
//     <div className='profile-div'>
//       <h2>Name: {props.name}</h2>
//       <h2>Age: {props.age}</h2>
//       <h2>Job: {props.job}</h2>
//     </div>
//   )
// }

// export default Profile

// import React from 'react'
// import './Profile.css'

// // props က Object

// const Profile = (props) => {
//     const { name, age, job } = props;
//   return (
//     <div className='profile-div'>
//       <h2>Name: {name}</h2>
//       <h2>Age: {age}</h2>
//       <h2>Job: {job}</h2>
//     </div>
//   )
// }

// export default Profile

import React from 'react'
import './Profile.css'

// props က Object

const Profile = ({name, age, job}) => {
  return (
    <div className='profile-div'>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      {/* <h2>Job: {job ? job : 'Good Luck!'}</h2> */}
      <h2>Job: {job || "Good Luck!"}</h2>
    </div>
  )
}

export default Profile