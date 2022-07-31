import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addJoks } from "./reudx/actions/action"
import { useSelector } from "react-redux";
import './style/style.css'
function App() {
  const [kind , setKind] = useState("Programming");
  const api = `https://v2.jokeapi.dev/joke/${kind}` 
  const dispatch = useDispatch()
  
    const fetchingData = async ()=>{
        const responce = await axios
        .get(api)
        .catch((err)=>{
          throw Error("fuck")
        })
        console.log(responce.data);
        dispatch(addJoks(responce.data))
        if(responce.data){
          console.log(responce.data);
        }
      }

      const cheack = (e)=>{
          console.log(e.target.value);
          setKind(e.target.value)
      }
      
    useEffect(()=>{
        fetchingData();
    },[api])

    const jokeStore = useSelector(state => state.jokes)
  return (
      <Router>
    <div className="App">
      <h2 className="h2">
        Joke generator
      </h2>
        <Routes>
          <Route exact path="/" element={(
            <div className="main_ask">
            <select className="se" onChange={(e)=>cheack(e)} name="" id="">
                <option >default is programming</option>
                <option value="Dark">Dark</option>
                <option value="Programming">programming</option>
                <option value="Miscellaneous">Music</option>
                <option value="Pun">Pun</option>
                <option value="Spooky">Spooky</option>
                <option value="Christmas">christmas</option>
            </select>
            <Link className="linkHome" to="/home">go get a joke</Link>
        </div>
          )}></Route>
          <Route path="/home" element={(          
            <div className="main_ask">
              <h2>{jokeStore.setup}</h2>
              <h2>{jokeStore.joke}</h2>
              <h2>{jokeStore.delivery}</h2>
              <button onClick={fetchingData}>new joke</button>
            </div>
          )}></Route>
          </Routes>
    </div>
      </Router>
  );
}

export default App;
