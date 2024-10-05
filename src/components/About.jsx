import React,{useEffect,useState} from 'react';
import data from '../data.json';
import '../CSS/About.css';

function About() {
  const [title, setTitle] = useState('');
  const [bio, setBio] = useState('');

  useEffect(()=>{
  
      const message = data.about;
      setTitle(message.title);
      setBio(message.bio);
  
  },[]);


  return (
    <div className="about-content">
       <div className='about'>
      
        <h1 style={{color:'burlywood'}}>About Me...</h1>
        <h3 style={{color:'orange'}}>{title}</h3>
        <p>{bio}</p>
      </div>
    </div>

  )
}

export default About;