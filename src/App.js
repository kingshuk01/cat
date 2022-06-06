
import './App.css';
import axios from 'axios'
import { useState } from 'react'
import { FaAngleRight, FaCat, FaAngleLeft } from "react-icons/fa";

function App() {

  const [img, setimg] = useState("")
  const [loading, setloading] = useState(false)

  const cat = () => {
    setloading(true)
    axios.get(`  https://api.thecatapi.com/v1/images/search`)

      .then(res => {
        console.log(res);
        setimg(res.data[0].url)
        setloading(false)
      })

      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1>CAT IMAGE<FaCat></FaCat></h1>
      <div className="cat-box">
        <div className="next-btn left">
          {loading?(<></>):(<FaAngleLeft onClick={cat}></FaAngleLeft>)}
        </div>
        {loading? (<h1>Loading</h1>):(<img width={400} height={400} src={img}></img>)}
        <div className="next-btn right">
          {loading?(<></>):(<FaAngleRight onClick={cat}></FaAngleRight>)}
        </div>

      </div>

    </div>
  );
}

export default App;
