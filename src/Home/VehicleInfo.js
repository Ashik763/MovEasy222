import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom';
import { MyContext } from '../App';
// import bike from '../images/bike.png';
// import bus from '../images/bus.png';
// import car from '../images/car.png';
// import train from '../images/train.png';

const VehicleInfo = (props) => {
    const {name,img}= props.data;
    const [newUser,setNewUser, destinationInfo,setDestinationInfo] = useContext(MyContext)
    // const [info,setInfo] = useState('');
    // console.dir(MyContext);

    const history = useHistory();
   
    const handleClick = (vehicle,img) => {
        setDestinationInfo(img);
        console.log(destinationInfo);
        history.push(`/destination/${vehicle}`);
    }
    return (
        <div className='card col-md-2 col-sm-12 m-2'> 
       
        <div className="m-5 p-3"> 
        <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="text-center"> 
        <Button onClick={() => handleClick(name,img)} variant="info" style={{color:'black'}}>{name} </Button> 
        </div>
      
    
        </div>
    );
};

export default VehicleInfo;