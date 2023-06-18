import React, { useContext, useEffect, useState } from 'react';
import { MyAuthcontext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom"
import useTitle from '../../Hooks/useTitle';


const Mytoydata = () => {
useTitle("My toy")
    const { user } = useContext(MyAuthcontext)
    const [Mytoys, setMytoy] = useState([])

    useEffect(() => {
        fetch(`https://assiment-11-server.vercel.app/Mytoy/${user?.email}`)
            .then(res => res.json())
            .then(data => setMytoy(data))
    }, [user])


    const handlerdelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assiment-11-server.vercel.app/Mytoy/${_id}`, {
                    method: "DELETE"
                }
                )
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remining = Mytoys.filter(cof => cof._id !== _id)
                            setMytoy(remining)

                        }
                    })
            }
        })
    }



    return (
        <div>

            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>available quantity</th>
                                <th> Detail description</th>
                                <th> Detail description</th>
                            </tr>
                        </thead>

                        {/* row 1 */}

                        <tbody>
                            {
                                Mytoys.map((Mytoy) => (
                                    <tr key={Mytoy._id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle  w-20 h-20">
                                                        <img src={Mytoy.photourl} alt="No img found" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold"></div>
                                                    <div className="text-3xl font-bold opacity-50"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {Mytoy.name}
                                        </td>
                                        <td>{Mytoy.Price}</td>
                                        <td>{Mytoy.Availablequantity}</td>
                                        <td>{Mytoy.Detaildescription}</td>

                                        <th>
                                            <Link to={`/Updatetoydata/${Mytoy._id}`}><button className="btn  btn-outline btn-info mr-5 ">
                                                Update
                                            </button></Link>
                                            <button
                                                onClick={() => handlerdelete(Mytoy._id)}

                                                className="btn  btn-outline btn-error">
                                                Delete
                                            </button>

                                        </th>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Mytoydata;