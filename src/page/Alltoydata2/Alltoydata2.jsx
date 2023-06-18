import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const Alltoydata2 = () => {
useTitle("Alldata")
    const [Alltoydatas, setAlltoydatas] = useState([])


    useEffect(() => {
        fetch("https://assiment-11-server.vercel.app/alltoydata")
            .then(res => res.json())
            .then(data => setAlltoydatas(data))
    }, [])


console.log(Alltoydatas);
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating </th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Alltoydatas.map(Alltoydata => (

                                <tr key={Alltoydata._id}> 
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-24 h-24 ">
                                                    <img src={Alltoydata.photourl} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{Alltoydata.name}</p>
                                    </td>
                                    <td>Price :{Alltoydata.Price}</td>
                                    <td>
                                        <p>Rating : {Alltoydata.Rating}</p>
                                    </td>
                                    <th>
                                      <Link to={`/Singlepagedata/${Alltoydata._id}`}><button className="btn btn-outline btn-accent">Details</button></Link>  
                                    </th>
                                </tr>


                            ))
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Alltoydata2;