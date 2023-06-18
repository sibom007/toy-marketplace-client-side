import React from 'react';

const Tab2 = ({ starwar }) => {
    const {name,brand,price,releaseYear,description,image,rating,category}=starwar
    console.log(starwar);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>price : ${price}</p>
                    <p>Description : {description}</p>
                    <p>Rating :{rating}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tab2;