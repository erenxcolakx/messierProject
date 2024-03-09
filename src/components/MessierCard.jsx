import './MessierCard.css';

function MessierCard({ name, constellation, src ,commonName}) {
  return (
      <div className="card bg-black" id='card' style={{width: "18rem"}}>
        <img src={src} alt={name} className='rounded-top border border-0 ' />
        <div className="card-body d-flex flex-wrap flex-column gap-0 mt-0 pt-3 bg-black rounded-bottom" id='card-body'>

          <p id='title'><span className='fw-bold'>{name}
          {commonName && ( <span className='fw-bold'> - {commonName}</span>)} </span></p>

          <p id='constellation'>Constellation: <span className='fw-bold'> {constellation} </span></p>

        </div>
      </div>
  );
}

export default MessierCard;
