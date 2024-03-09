import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import * as messierData from './assets/JSON/messier.json';
import MessierCard from './components/MessierCard';
import './index.css';

const messierObjects = messierData.messier_objects;

function App() {
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const loadImage = async () => {
      let imageObject = {};
      for (let i = 1; i <= 110; i++) {
        const image = await import(`./assets/MessierObjects/Messier-${i}.webp`);
        imageObject[`M${i}`] = image.default;
      }
      setLoadedImages(imageObject);
    };

    loadImage();
  }, []);

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
            src={loadedImages[item.name]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
