import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import InputComponent from './component/InputComponent';
import ViewComponent from './component/ViewComponent';
import ViewList from './component/View';
import ParentComponent from './component/ParentComponent';


function App() {

  //task 1
  const [inputText, setInputText] = useState("");
  const handleChange = (e) => setInputText(e.target.value);

  //task 2
  const [inputText1, setInputText1] = useState("");
  const handleChange1 = (e) => setInputText1(e.target.value);
  const [buttonText, setButtonText] = useState("");
  const handleClick = () => {
    setButtonText(inputText1);
  };

  //task 3
  const [listText, setInputList] = useState([])
  const handleChange3 = (e) => setInputList(e.target.value);
  const [textList, setButtonList] = useState([]);
  const handleList = () => {
    setButtonList([...textList, listText,]);
    setInputList("");

  }

  return (
    <div>
      <h1>Type your text here:</h1>
      <input type="text" onChange={handleChange} value={inputText}></input>
      <p>{inputText}</p>
      <div>
        <h2>Type your text:</h2>
        <input type="text" onChange={handleChange1} value={inputText1}></input>
        <button type='button' onClick={handleClick}>Display</button>
        {buttonText}
        <div>
          <p>Type your text:</p>
          <input type='list' onChange={handleChange3} value={listText}></input>
          <button type='button' onClick={handleList} disabled={listText === ''}>Dispaly</button>
          <ViewList items={textList} />
        </div>
      </div>
      <p>Type your text:</p>
      <div><ParentComponent /></div>
    </div>
  )

}
export default App;