import { useState } from 'react';
import './App.css'
function App() {
  const [data, setData] = useState("");
  const [showdata, setShowData] = useState([]);
  const [updateValue,setUpdateValue] = useState("");
  const [tag ,setTag] = useState("")
  function addFunc() {
    setShowData([...showdata, data]);
    setData('');
    if(data==''){
      alert("Please add something!")
    }
  };

  function dltFunc(index){
    const newList = showdata.filter((item,key)=>{
      return key!==index;
    });
  setShowData(newList);  
  }

  function edtFunc(e){
    console.log(e)
      const newEle = showdata.map((item,index)=>{
        if(index ===e){
          return showdata[index] = < input type="text" key={index} />
        }
        else{
          return showdata[index] = item;
        }
      });console.log(tag)
      setShowData(newEle);  
  }

  function updatedItem(items,element){
    const newUpdateValue = showdata.map((item,index)=>{
      if(element===index && updateValue!==0){
        return showdata[index] = updateValue;
      }
      else{
        return showdata[index] = item;
      }
    });
    setShowData(newUpdateValue);
  }
  return (
    <>
      <div className="container">
        <div className="main-container">
          <h1>To Do Application Using Reactjs</h1>
          <div className="input-section">
            <input type="text" onChange={(e) => setData(e.target.value)} value={data}/>
            <button onClick={addFunc}>Add Item</button>
          </div>
          <div className="list-section">
            <ul>
              {showdata.map((item,index)=>{
                 if(item.type=='input'){
                  return <div>< input type="text" onChange={(e)=>setUpdateValue(e.target.value)}  key={index} />
                  <i id='crsbtn' className="fa-solid fa-xmark"></i>
                  <i onClick={()=>updatedItem(item,index)} id='chkbtn' className="fa-solid fa-check"></i></div>
                 }
                 else if(item==''){
                   return ;
                 }
                 else{
                  return <li key={index}>{item}
                  <i id='dlt' onClick={()=>dltFunc(index)} className="icon-style fa-solid fa-trash-can"></i>
                  <i onClick={()=>edtFunc(index)} className="icon-style1 fa-solid fa-pen-to-square"></i></li>
                 }
              })}
              {console.log(showdata)}
              </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
