import { useEffect, useState } from "react";
import CardDetails from "../CardDetails/CardDetails";



const ViewProDetails = () => {
    const [cards, setCard] = useState(null);


    useEffect(() =>{
        fetch("data.json")
        .then((res) =>{
            return res.json()
        })
        .then((data) =>{
            setCard(data);
            // console.log(cards)
        })
    }, [])

    return (
    <div> 
        {cards &&
            cards.map((card) =>{
                return <CardDetails key={card.id} card={card}></CardDetails>
            })
        } 
        
    </div>    
    );
};

export default ViewProDetails;