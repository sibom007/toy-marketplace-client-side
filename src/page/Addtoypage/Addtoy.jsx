import Swal from 'sweetalert2'
import useTitle from '../../Hooks/useTitle';

const Addtoy = () => {
    useTitle("Add Toy Data")
    const handelersubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const sellername = form.sellername.value
        const selleremail = form.selleremail.value
        const Subcategory = form.Subcategory.value
        const Price = form.Price.value
        const Rating = form.Rating.value
        const Availablequantity = form.Availablequantity.value
        const Detaildescription = form.Detaildescription.value
        const photourl = form.photourl.value
        const alldata = { name, sellername, selleremail, Subcategory, Price, Rating, Availablequantity, Detaildescription, photourl }
        console.log(alldata);
        
        fetch("https://assiment-11-server.vercel.app/Adddata", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(alldata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire("Add", '', 'success')
                form.reset()
            })
    }



    return (
        <div className='bg-gray-200 p-24'>
            <h1 className='font-bold text-center text-3xl mb-5'>Add New Toy data</h1>
            <form onSubmit={handelersubmit}>
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
                            <span className="label-text">seller name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='sellername' placeholder="seller name" className="input input-bordered w-full" required />
                        </label>

                    </div>
                </div>
                <div className='md:flex'>
                    <div className="form-control w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">seller email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='selleremail' placeholder="seller email" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Sub-category </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='Subcategory' placeholder="Sub-category " className="input input-bordered w-full" required />
                        </label>

                    </div>
                </div>
                <div className='md:flex'>
                    <div className="form-control w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='Price' placeholder="Price" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control w-1/2 mb-5">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='Rating' placeholder="Rating" className="input input-bordered w-full" required />
                        </label>
                    </div>

                </div>
                <div className='md:flex'>
                    <div className="form-control w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='Availablequantity' placeholder="Available quantity" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control w-1/2 mb-5">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='Detaildescription' placeholder="Detail description" className="input input-bordered w-full" required />
                        </label>
                    </div>

                </div>
                <div className="form-control w-full mb-5">
                    <label className="label">
                        <span className="label-text">Picture Url</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='photourl' placeholder="photo-url" className="input input-bordered w-full" required />
                    </label>
                </div>
                <input className="btn btn-block" type="submit" value="Add card" />
            </form>

        </div>
    );
};

export default Addtoy;