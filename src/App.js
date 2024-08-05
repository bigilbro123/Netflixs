import './App.css'
import React from 'react'
import NavBar from './Components/NavBar'
import Banner from './Components/Banner/Banner'
import Row from './Components/Row/Row'
import { originals, ActionMovies, Romance, HorrorMovies, Documentaries, Comedy } from './urls'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Row title='Netflix Originals' Notitle url={originals} />
      <Row title='Action' isSamll url={ActionMovies} />
      <Row title='Romance' url={Romance} />
      <Row title='Horror' url={HorrorMovies} />
      <Row title='Comedy' url={Comedy} />
      <Row title='Documentaries' url={Documentaries} />
      <Footer />
    </div>
  )
}

export default App
// import React, { useState } from 'react'
// import axios from 'axios'

// function App() {
//   const [state, setState] = useState([])
//   return (
//     <div> <button onClick={() => {
//       axios.get('https://jsonplaceholder.typicode.com/posts').then((respones) => {
//         console.log(respones.data);
//         setState(respones.data)
//       })
//     }}>Click</button>

//       {state.map((obj, index) => {
//         return (
//           <div className="">
//             <h1>{index + 1}</h1>
//             <h4>{obj.title}</h4>
//             <p>{obj.body}</p>
//           </div>
//         )
//       })}

//     </div>
//   )
// }

// export default App