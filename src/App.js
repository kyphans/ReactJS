import { useState } from 'react'
import Content from './Content'


function App() {
  const [toggle,setToggle] = useState(false)


  const handelToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App" style={{padding:20}}>
     <button onClick={handelToggle}>Toggle</button>
     {toggle && <Content/>}
    </div>
  );
}

export default App;
