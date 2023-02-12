import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
      {/* <Counter></Counter> */}
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>External Users</h2>
      <p>users.length</p>
      {users.map((user) => (
        <User name={user.name} email={user.email}></User>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div style={{ border: "2px solid red", margin: "10px" }}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(33);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

// const products = [
//   { name: "laptop", price: 225000 },
//   { name: "Iphone", price: 175000 },
//   { name: "bike", price: 260000 },
// ];

// function Product(props) {
//   return (
//     <div className="product">
//       <h3>Name: {props.name}</h3>
//       <p>Price: {props.price}</p>
//     </div>
//   );
// }

// {products.map((product) => (
//   <Product name={product.name} price={product.price}></Product>
// ))}
{
  /* <Product name="laptop" price="225000"></Product>
<Product name="Iphone" price="160000"></Product> */
}

// function ExternalUsers() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);
//   return (
//     <div>
//       <h3>External Users</h3>
//       {users.map((user) => (
//         <User name={user.name} email={user.email} id={user.id}></User>
//       ))}
//     </div>
//   );
// }

// function User(props) {
//   return (
//     <div style={{ border: "2px solid red", margin: "20px" }}>
//       <h3>Name: {props.name}</h3>
//       <p>Email: {props.email}</p>
//       <p>Id: {props.id}</p>
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(33);
//   const increaseCount = () => setCount(count + 1);
//   const decreaseCount = () => setCount(count - 1);
//   // const increaseCount = () => {
//   //   const newCount = count + 1;
//   //   setCount(newCount);
//   // };
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>decrease</button>
//     </div>
//   );
// }

/*
{products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))}
      { <Product name="laptop" price="225000"></Product>
      <Product name="Iphone" price="175000"></Product> }
*/

/*
const products = [
    { name: "laptop", price: 225000 },
    { name: "Iphone", price: 165000 },
    { name: "bike", price: 260000 },
    { name: "tablet", price: 5000 },
  ];
  
 */

// function Product(props) {
//   return (
//     <div className="product">
//       <h3>Name: {props.name}</h3>
//       <p>Price: {props.price}</p>
//     </div>
//   );
// }

export default App;
