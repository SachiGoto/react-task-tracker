import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id:3,
        text:"Shopping"
    },
    {
        id:5,
        text:"go watch a movie"
    },
    {
        id:10,
        text:"do codewars"
    }
])
  
  return (
    <div className="container">
       {/* <Header title = "Hello"/> */}
       <Header/>
       <Tasks tasks={tasks} />
    </div>
  );
}


// class App extends React.Component{
//     render(){
//       return <h1>Hello from a class</h1>
//     }
// }

export default App;
