import react,{useEffect,useState} from "react"
import './App.css';
import axios from 'axios'
import { Container, Switch, withStyles } from "@material-ui/core";
import Header from "./components/Header/Header";
import Definitions from "./components/Header/Definitions/Definitions";
function App() {
  const [word,setWord] = useState("")
  const [meanings,setMeanings] = useState([])
  const [category,setCategory] = useState("en")
  const [dark, setDark] = useState(true)
  const DarkMode = withStyles({
    switchBase: {
      color: "gray",
      '&$checked': {
        color: "#000",
      },
      '&$checked + $track': {
        backgroundColor: "#000",
      },
    },
    checked: {},
    track: {},
  })(Switch);
  const dictionaryApi= async()=>{
    try {
      const data=await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      console.log(data)
      setMeanings(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    dictionaryApi()
  },[category,word])
  return (
    <div className="App" style={{background:dark? "#282c34" :"#FFF",color:dark? "#FFF" :"#000",transition:"all 0.7s linear"}}>
      <Container maxWidth="md" stylr={{display:"flex",flexDirection:"column",height:"100vh"}} >
        <div style={{postion:"absolute",top:0,right:50,padding:"10px 0 0 0"}}>
          <span>{!dark ?"Light mode":"Dark mode"}</span>
          <DarkMode checked={dark} onChange={()=>setDark(!dark)} />
          </div>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} dark={dark}/>
        {meanings &&<Definitions word={word} meanings={meanings} category={category} dark={dark}/>}
      </Container>
    </div>
  );
}

export default App;
