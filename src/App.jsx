import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import * as messierData from './assets/JSON/messier.json';
import MessierCard from './components/MessierCard';
import './index.css';
import IMAGES from './images';


const messierObjects = messierData.messier_objects;

function App() {
  return (
    <div className='gradient-background'>
      <Header />
      <div className='container d-flex flex-wrap justify-content-center gap-3 my-3'>
        {messierObjects.map((item) => (
          <MessierCard
            key={item.name}
            name={item.name}
            commonName={item.common_name}
            constellation={item.constellation}
            src={IMAGES[item.name]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
