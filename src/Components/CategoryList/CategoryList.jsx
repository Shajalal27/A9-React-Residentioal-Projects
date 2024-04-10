import { Link } from "react-router-dom";



const CategoryList = ({cardIteam}) => {
    const{image, title, price, description, status, area} = cardIteam;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl border">
                <figure><img className="h-[50vh] w-full rounded-lg" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h4 className="text-red-400 font-bold">{price}</h4>
                    <h2 className="card-title">{title}</h2>
                    { 
                        <p>{description.slice(0, 100)} </p> 
                       
                    }
                    <div className="flex gap-28 justify-between">
                        <p className="text-[#f59e0b] bg-yellow-100 font-bold p-1  rounded-lg
                       
                        ">{status}</p>
                        <p className="text-[#329b3e] bg-[#e7e5b9] font-bold
                        p-1  rounded-lg">{area}</p>
                    </div>
                    <div className="card-actions ">
                    <button className="btn btn-success w-full font-bold mt-4">View Property</button>
                    </div>
                </div>
        </div>
    );
};

export default CategoryList;