import CategoryList from "../CategoryList/CategoryList";
import Header from "../Header/Header";
import {useLoaderData} from "react-router-dom";



const Home = () => {
    const cardIteam = useLoaderData()
    
    return (
       <div>
        <Header></Header>
        <div className="grid gap-16 grid-cols-1 md:grid-cols-3 border">
         {
            cardIteam.map(card => <CategoryList key={card.id} cardIteam={card}></CategoryList>)
        }
        </div>
       </div>
    );
};

export default Home;