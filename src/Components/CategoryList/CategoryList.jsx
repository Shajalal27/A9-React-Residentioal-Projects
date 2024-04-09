import { useState } from "react";


const CategoryList = ({cardIteam}) => {
    const{image, title} = cardIteam
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="h-40 w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
        </div>
    );
};

export default CategoryList;