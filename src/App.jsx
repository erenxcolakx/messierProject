import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import * as messierData from './assets/JSON/messier.json';
import MessierCard from './components/MessierCard';
import './index.css';
import IMAGES from './images';


const messierObjects = messierData.messier_objects;

function createMessierCard(item) {
  return(
    <MessierCard
      key={item.name}
      name={item.name}
      commonName={item.common_name}
      type={item.type}
      constellation={item.constellation}
      src={IMAGES[item.name]}
    />
  );
}

function App() {
  return (
    <div className='gradient-background'>
      <Header />
      <div className='container d-flex flex-wrap justify-content-center gap-3 my-3'>
        {messierObjects.map(createMessierCard)}
      </div>
    </div>
  );
}

export default App;
