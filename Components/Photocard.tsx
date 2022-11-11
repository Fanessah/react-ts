export interface PhotoCardProp{
    card:{
    photo:string,
    user:string,
    mainPhoto: string,
    likeCount:number
    }
}

export default function Photocard({card}):PhotoCardProp {
    return(
        <div className='photo-card'>
            <div className="card-header">
                <img src={card.photo} alt={card.user} />
                <h3 className="card-user"> {card.user}</h3>
            </div>
            <img src={card.mainPhoto} alt ={card.description}/>
        </div>
    )
}