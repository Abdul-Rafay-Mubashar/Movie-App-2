import './App.css';
import NavBar from './NavBar';
import SideBar from './SideBar';
import { useEffect, useState } from 'react';
function App() {
  const[text ,setText]=useState();
  const[main ,setmain]=useState();
  const[name1 ,setname1]=useState();
  const[actors ,setactors]=useState();
  const[array1,setarray1]=useState();
  const[check,setcheck]=useState(false);
  const name=(event)=>{
      setText(event.target.value);
      console.log(text)
  }
const data=()=>{
  var url='https://online-movie-database.p.rapidapi.com/auto-complete?q='+text
  console.log(url)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0f7ce9d7dbmshfad9572257facf7p1cc103jsn371c92257f31',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };
  
  fetch(url, options)
    .then(res => {
      return res.json();
    })
    .then(data => {
      var a=data.d[0]
      setmain(a.i.imageUrl)
      setname1(a.l)
      setactors(a.s)
      return data.d.slice(1,5)
    })
    .then(array=>{
      setarray1(array)
      setcheck(true)
      console.log(array1)
    })
}
return (
  <>
    <NavBar name={name} text={text} data={data}/>
    <SideBar pic={main} name={name1} actor={actors} array={array1} check={check}/>
  </>
);
}

export default App;
