import { useLoaderData } from 'react-router-dom';

const Singlepagedata = () => {

    const Singledata = useLoaderData();
    const { _id, name, sellername, selleremail, Subcategory, Price, Rating, Availablequantity, Detaildescription, photourl } = Singledata
    console.log(Singledata);

    return (
        <div>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl mt-10 mb-10">
                    <img className='w-full h-80' src={photourl} alt="" />
                    <div className="card-body space-y-5 text-2xl font-bold">
                        <h2 className="card-title">Toy Name :  {name}</h2>
                        <p>Seller-Name : {sellername}</p>
                        <p>Seller-Email : {selleremail}</p>
                        <ul className=' flex space-x-10'>
                            <li>Price : {Price}</li>
                            <li>Rating : {Rating}</li>
                            <li>Available-Quantity : {Availablequantity}</li>
                        </ul>
                        <p className='text-ellipsis overflow-hidden'>Description : {Detaildescription}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singlepagedata;