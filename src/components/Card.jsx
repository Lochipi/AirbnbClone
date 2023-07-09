import { CardStyled } from './styles/Card.styled'
import star from "/images/star.png"

function Card(props) {
    return (
    <div className='card'>
        <CardStyled>
            <div>
            {props.openSpots === 0 && <div className='card--badge'><h5>SOLD OUT</h5></div>}
            </div> 
            <img src={`./images/card-images/${props.img}`} />
            <div>
                <img src={star} />
                <span>{props.rating}</span>
                <span>({props.reviewCount})  • </span>
                <span>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span>From {props.price}</span> / person</p>
        </CardStyled>
    </div>
    )
}

export default Card

