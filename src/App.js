import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [
    { name: "laptop", price: 225000 },
    { name: "Iphone", price: 165000 },
    { name: "bike", price: 260000 },
    { name: "tablet", price: 5000 },
  ];
  return (
    <div className="App">
      {products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))}
      {/* <Product name="laptop" price="225000"></Product>
      <Product name="Iphone" price="175000"></Product> */}
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  );
}

export default App;
