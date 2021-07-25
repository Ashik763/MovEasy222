import React from 'react';
import VehicleInfo from './VehicleInfo';




const fakeData = [
    {
        id:1,
        name:'BIKE',
        img:"https://i.ibb.co/7GgxFzs/bike.png" 
        


    },

    {
        id:2,
        name:'CAR',
         img:"https://i.ibb.co/QkpwBwK/car.png"


    },

    {
        id:3,
        name:'BUS',
        img:"https://i.ibb.co/R3QZF7j/bus.png"
      


    },

    {
        id:4,
        name:'TRAIN',
        img:"https://i.ibb.co/fMG7gm5/train.png"
       

    }
]

const Home = () => {
    const style ={
        backgroundImage:" url('https://i.ibb.co/cb88FmT/Bg.png')",
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5"

    }
    return (
        <div className="" style={style}>
         
            <div className='row d-flex justify-content-around m-2 '> 
          
                  
               {fakeData.map(data => <VehicleInfo key={data.id} data={data} />)}
             
         
            

            </div>
          
        </div>
    );
};

export default Home;