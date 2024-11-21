// import React from "react";

import { Children, useState } from "react";
import { TextInput } from "../components/TextInput";

// Class Components
// Render means JSX Code to HTML changing
// class Go extends React.Component {
//   render() {
//     return <h1>Class Component</h1>
//   }
// }

// export default Go

// or

// Function Components Real world Use
// function App() {
//   return (
//    <div className="">
//     <h1>React Components</h1>
//    </div>
//   );
// }
// export default App

// or

// const App = () => {
//   return (
//    <div className="">
//     <h1>React Components</h1>
//     <Phone brand="iPhone"/>
//    </div>
//   );
// };

// const Phone = (props) => { //props ကို Component 1ခုကနေ နောက်ထပ် Component ၁ခုကို Data ပေးပို့ချင်ရင်သုံး
//   // return <h1>Hello Phone {props.brand} </h1>;
//   // or
//   // const numbers = ["one", "two", "three"];
//   // const [a,b,c] = numbers;
//   // console.log(a);
//   //or
//   // const {brand} = props;
//   // return <h1>{brand}</h1>;
//   // console.log(brand);
//   // or
//   // return <h1>{brand}</h1>; // props နေရာမှာ {brand} ထည့်
//   // console.log(brand);
// };

// export default App

// or
// const Phone = (props) => {
//   // console.log(props);

//   return <h1>{props.children}</h1>;
// };

// or
// const Phone = ({children}) => {
//   return <h1>{children}</h1>;
// }

// const App = () => {
//   return (
//     <>
//       <div className="">React Props</div>
//       <Phone>
//         <h1>iPhone</h1>
//         <h2>14</h2>
//         <h3>ios</h3>
//       </Phone>
//     </>
//   )
// };

// export default App

// React Conditional
// If Statement
// const App = () => {
//   const money = true;
//   if(money) {
//     return (
//       <>
//       <h1>If I have money,</h1>
//        <h1>I will stay happily each day.</h1>
//       </>
//     )
//   }

//   return (
//     <>
//      <h1>If I don't have any income,</h1>
//     <h1>I can't be happy everyday and I can't live without you.</h1>
//     </>
//   )
// }

// export default App

// Logical Operator &&
// const App = () => {
//   const money = true;

//   return (
//     <>
//     {money && <h1>I am happiest girl in the world.</h1>}
//     </>
//   )
// }

// export default App

// Ternary Operator (conditional ? true : false)
// const App = () => {
//   const money = true;

//   return (
//     <>
//     {money ? <h1>If I have money, I am one of the happiest girl.</h1> : <h1>If I don't have money, I can't be happy everyday.</h1>} 
//     {/* {!money ? <h1>If I have money, I am one of the happiest girl.</h1> : <h1>If I don't have money, I can't be happy everyday.</h1>}   <! သုံးလိုက်တဲ့အတွက် false ပြောင်းစရာမလိုတော့ဘူး> */}
//     </>
//   );
// }

// export default App

// const App = () => {
//   const shopping = ['BMW', 'Ford', 'Audi', 'Tesla', 'Land Cruiser'];

//   return (
//     <>
//     <ul>
//       {shopping.map((sh,index) => (
//         <li key={index}>{sh}</li>
//       ))}
//     </ul>
//     </>
//   )
// };

// export default App

const App = () => {
  const [inputs, setInputs] = useState({});

  // const [inputs, setInputs] = useState({
  //   username: 'Aung Gyi'
  // });

  // console.log(useState())
  // inputs က နောက်ဆုံးရရှိတဲ့ Data , setInputs က အဲ Data ကို ပြုပြင်ဖို့

  // Destructuring
  // const fruits = ['apple', 'orange', 'mango'];
  // const [a,b,c] = fruits;
  // console.log(a);

  const handleChange = (e) => {
    // const name = event.target.name;
    // const value = event.target.value; 

    const {name,value} = event.target;
    setInputs((prev) => ({...prev, [name]: value}))
  }

  const handleSubmit = (e) => {
    event.preventDefault()
    console.log(inputs)
  }

  return (
    <>
    <h1>React Form</h1>
    <form action="" onSubmit={handleSubmit}>
      {/* <input name="username" type="text" onChange={handleChange} /> */}
      <TextInput onChange={handleChange} name="username"></TextInput>
      <TextInput onChange={handleChange} name="email"></TextInput>
      <button>Sign Up</button>
    </form>
    </>
  )
};

export default App