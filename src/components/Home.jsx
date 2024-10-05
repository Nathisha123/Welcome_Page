import React,{useState,useEffect} from 'react';
import data from '../data.json';
import '../CSS/Home.css'


const Home= () =>{
  const [welcomeMessage,setWelcomeMessage]=useState('');
  const [description, setDescription] = useState('');

  useEffect(()=>{
    const fetchData = async() =>{
      const message = data.home;
      setWelcomeMessage(message.welcomeMessage);
      setDescription(message.description);
    };
    fetchData();

  },[]);



  return (
    <div className="home-content">
    <div className='home'>
      <h1>{welcomeMessage}</h1>
        <h3>Lets build Responsive webpages using HTML,CSS and React</h3>
        <p >
          {description}
        </p>
        <div className="button-container">
        <button className="get-started">Get Started</button>
        <button className="more-info">More Info</button>
        </div>
        </div>
    </div>
  )

  };
export default Home;