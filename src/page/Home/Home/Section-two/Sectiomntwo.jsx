import React from 'react';
import { FaRegCalendarAlt, FaSearchLocation, FaHeadset } from "react-icons/fa";

const Sectiomntwo = () => {
    return (
        <div className="bg-black p-14 rounded mt-10 mb-10">

            <div>
                <ul className="flex justify-around">
                    <li className="flex"><FaRegCalendarAlt className="text-red-500 w-7 h-7 mr-3" /> <h1 className="text-white">We are open monday-friday <span><h4>7:00 am - 9:00 pm</h4></span></h1></li>
                    <li className="flex"><FaHeadset className="text-red-500 w-7 h-7 mr-3" /> <h1 className="text-white">Have a question? <span><h4>+2546 251 2658</h4></span></h1></li>
                    <li className="flex"><FaSearchLocation className="text-red-500 w-7 h-7 mr-3" /> <h1 className="text-white">Need a repair? our address <span><h4>Liza Street, New York</h4></span></h1></li>

                </ul>
            </div>

        </div>
    );
};

export default Sectiomntwo;