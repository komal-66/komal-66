// import logo from './logo.svg';
// import './App.css';
// import React, { useState, useEffect } from 'react';

// const axios = require('axios');

// function App() {

//     const [val,setval] = useState([]);


//   useEffect(() => {
//      axios.get('https://dummyjson.com/products')
//   .then(function (res) {
//     // handle success
//     console.log(res.data.products);
//     setval(res.data.products);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   },[]);
 
//   return (
//     <div className="App">
//       {
//         val.map((index) =>{

//           return(
//             <>
//                 <img src={index.thumbnail}></img>
//             </>
//           )

//         }

//         )
//       }
//     </div>
//   );
// }

// export default App;


// ======================================================================================================

// ===================================================================================================


import React, { useState, useEffect } from 'react';

const axios = require('axios');

const App = () => 
{

  const [val,setval] = useState([]);  

  useEffect(() => {
    axios.get('http://localhost/krishna/krishna.php')
    .then(function (res) {
      // handle success
      console.log(res.data);
      setval(res.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  },[]);
  return(
      <>
      <table border={1}>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>email</td>
          <td>password</td>
        </tr>
        {
          val.map((index)=> {
            return(
              <>
                <tr>
                  <td>{index.id}</td>
                  <td>{index.name}</td>
                  <td>{index.email}</td>
                  <td>{index.password}</td>
                  <td><button>Delete</button></td>
                </tr>
              </>
            )
          })
        }
        </table>
      </>
  )
}

export default App;