import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { computeHeadingLevel } from '@testing-library/react';

function App() {

  let name = "Dr Mahfuz";
  const names = ['Bahadur Shah', 'Ratul Sannal', 'Komola Banu', 'Ranu mandol']

  const productList = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Illustrator', price: '$89.99'},
    {name: 'PDF Reader', price: '$9.99'},
    {name: 'PDF Reader pre', price: '$69.99'},
  ]

  // const productItem = productList.map(product => product.name);
  // const productItem2 = productList.map(product => product);
  // console.log('Product name: ', productItem);
  // console.log('Product name: ', productItem2);]

  const userName = names.map(name => name);
  console.log('name: ', userName);

  var style={
    color: 'red',
    fontSize: '35px',
    backgroundColor: 'white',
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter></Counter>

        <Users></Users>

        <ul>
          {
            names.map(name => <li>{name}</li>)
          }
          
          {
            productList.map(product => <li>{product.name} <br></br> {product.price}</li>)
          }


          {/* <li>{names[0]}</li>
          <li>{names[1]}</li>
          <li>{names[2]}</li> */}
        </ul>

        {/* <Product name = {productList[0].name} price={productList[0].price}></Product>
        <Product name = {productList[1].name} price={productList[1].price}></Product> */}

        {
          productList.map(product => <Product product={product}></Product>)
        }

        <Product product = {productList[2]}></Product>

        <Person name={names[0]} country='Bangladesh'></Person>
        <Person name={names[2]} country='Bangladesh'></Person>
        <Person name='Rubel Hosen' country='Pakistan'></Person>
        <Person name='Zakir Hossain' country='Bangladesh'></Person>
        <Person name='Rubel Hosen' country='Pakistan'></Person>
        <Person2 name='Virat kohli' country='India' job='Cricketer/Batsman'></Person2>
        <Person2 name='Sakib Al Hasan' country='Bangladesh'  job='Cricketer/Allrounder'></Person2>

        <h1 style={style}>Singer name: {name}</h1>
        <p style={{color: 'tomato'}}>my first react paragraph</p>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(data => setUser(data))
  }, [])

  return(
    <div>
      <h3>Users Count: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name} : {user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){

  const [count, setCount] = useState(0);
  // const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Product(props){
  const styleProduct = {
    height: '300px',
    width: '300px',
    backgroundColor: 'gray',
    margin: '5px',
    borderRadius: '10px',
    color: 'black',
    float: 'left',
  }
  console.log(props);

  const {name, price} = props.product;
  return (
    <div style={styleProduct}>
      {/* <h1>{props.name}</h1>
      <h3>{props.price}</h3> */}

      {/* <h1>{props.product.name}</h1>
      <h3>{props.product.price}</h3> */}

      <h1>{name}</h1>
      <h3>{price}</h3>

      <br/>
      <button>Buy now</button>
    </div>
  )
}

function Person(props) {
  return (
  <div style={{border: '2px solid red', margin: '10px'}}>
    <h1>Name: {props.name}</h1>
    <p>form {props.country}</p>
  </div>
  )
}

function Person2(props) {
  const newStyle = {
    border: '2px solid white',
    margin: '10px',
    padding: '15px',
  }

  return (
    <div style={newStyle}>
      <h1>Name: {props.name}</h1>
      <p>from {props.country}</p>
      <p>Job: {props.job}</p>
    </div>
  )
}

export default App;
