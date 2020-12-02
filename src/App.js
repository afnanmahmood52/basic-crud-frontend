import React,{useEffect} from 'react'
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

import SaveIcon from '@material-ui/icons/Save';

import FoodCards from './FoodCards';

function App() {
  const [FoodName, setFoodName] = React.useState('')
  const [NoOfTimes , setNoOfTimes] = React.useState(0)
  const [FoodItems, setFoodItems] = React.useState([])

  useEffect(() => {

    Axios.get("http://localhost:4000/read")
    .then((response)=>{
      //console.log(response)
      setFoodItems(response.data)
    })

  }, [FoodItems])


  const getFoodName = (event) =>{
    setFoodName(event.target.value);
  }

  const getNoOfTimes = (event) =>{
    setNoOfTimes(event.target.value);
  }

  const addItemDb =()=>{
    const dbItem = {
      foodname: FoodName,
      days: NoOfTimes
    }
    
    Axios.post("http://localhost:4000/insert", dbItem)

  }


  const getValues = ()=>{
    console.log(FoodName)
    console.log(NoOfTimes)

    setFoodName('');
    setNoOfTimes('');

  }

  return (
    <div className="main_container">

      <h1>Food Eating Tracker</h1>
      <form className="input_form">
        <TextField className="food_name" id="standard-basic" type="text" label="Food Name.." onChange={getFoodName}/>
        <TextField className="no_times" id="standard-basic" type="number" label="No of Times.." onChange={getNoOfTimes}/>
        <Button className="submit_button" variant="contained" color="primary" onClick={addItemDb} startIcon={<SaveIcon/>}>Save Item</Button>
      </form>

      <div className="food_cards">
        { 
          //console.log(FoodItems.data)
          //console.log(typeof(FoodItems)
          FoodItems.map(item => <FoodCards key={item._id} id={item._id} foodName={item.foodname} noOfTimes={item.HowManyDaySinceIAte}/>)
        }
      </div>

    </div>
  );
}

export default App;
