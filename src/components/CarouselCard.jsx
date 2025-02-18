import './component-styles/CarouselCard.css'

function CarouselCard(props) {
    return (
    <div className="card" style={{ marginRight: '10px', marginLeft: '10px' }}>
        <img className="card-img-top" src={props.img} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">Visit project</a>
        </div>
      </div>);
}

export default CarouselCard;