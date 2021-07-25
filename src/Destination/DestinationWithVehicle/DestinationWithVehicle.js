import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../App';
import Modal from 'react-modal';



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      height:'40%',
      width:'40%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('body');

const DestinationWithVehicle = () => {
    const {vehicle} = useParams();
    const [newUser,setNewUser,destinationInfo,setDestinationInfo] = useContext(MyContext);
   
    const style = {height:"30px"}
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
     
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    } 
  
    return (
        <div className='d-flex'>
            <div className="container col-md-4 m-2 p-5 "> 
                <select  className="form-select"> 
                    <option defaultValue >Pick to</option>
                    <option  value="Dhaka"><button onClick= ""></button></option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Khulna">Khulna</option>
                </select>
            <br/> <br/>
                <select  className="form-select"> 
                    <option defaultValue >Pick From</option>
                    <option value="Bhola">Bhola</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Borhanuddin">Borhanuddin</option>
                </select>
                <br/>
                {/* style={{backgroundColor:"OrangeRed",width:"100%" }} */}
                <button className="btn btn-info btn-lg"  onClick={openModal}>Search</button>
          <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
          
          <div>
          <ul className="list-group">
                <li className="list-group-item d-flex justify-content-around"> <img style={style} src={destinationInfo} alt=""/>  <img style={style}  src="https://i.ibb.co/B6fw4yN/peopleicon.png"alt=" "/>   $67  </li>
                <li className="list-group-item d-flex justify-content-around"> <img style={style} src={destinationInfo} alt=""/>  <img style={style}  src="https://i.ibb.co/B6fw4yN/peopleicon.png"alt=" "/>   $67  </li>
                <li className="list-group-item d-flex justify-content-around"> <img style={style} src={destinationInfo} alt=""/>  <img style={style}  src="https://i.ibb.co/B6fw4yN/peopleicon.png"alt=" "/>   $67  </li>
               
              
          </ul>
          </div>
          <br/>
          <button  className="btn btn-danger btn-lg" onClick={closeModal}>close</button>
        </Modal>
            
           
            </div>
            <div className="col-md-6">  
            <img style={{height:'80vh'}}  className="img-fluid ml-5 pl-5" src="https://i.ibb.co/30tVrHG/Map.png" alt="" /> 
          
          
            </div>
        
        </div>
    );
};

export default DestinationWithVehicle;


