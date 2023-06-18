import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const Updatetoydata = () => {

    const  Updatedata  = useLoaderData()
    const { _id } = Updatedata;
  

    const handelerUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const sellername = form.name.value
        const Price = form.Price.value
        const Availablequantity = form.Availablequantity.value
        const Detaildescription = form.Detaildescription.value

        const Updateddata = { sellername, Price, Availablequantity, Detaildescription}
        console.log(Updateddata);

        fetch(`https://assiment-11-server.vercel.app/Mytoy/${_id}`,{
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(Updateddata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire("Update", '', 'success')
                form.reset()
            })
            .catch(error => console.log(error)  )
    }


    return (
        <div>
            <form onSubmit={handelerUpdate}>
                <h1 className='font-bold text-center text-3xl mb-5 mt-5'>Update Toy data</h1>
                {/* form row */}

                <div className='md:flex'>
                    <div className="form-control w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='Price' placeholder="Price" className="input input-bordered w-full" required />
                        </label>

                    </div>
                </div>
                <div className='md:flex'>
                    <div className="form-control w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='Availablequantity' placeholder="Available Quantity" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Description </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='Detaildescription' placeholder="Description" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block mt-9 mb-10" type="submit" value="Update  toy data" />
            </form>
        </div>
    );
};

export default Updatetoydata;