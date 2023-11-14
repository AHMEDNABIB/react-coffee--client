import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
	const coffee = useLoaderData();
	const { _id, name, quantity, supplier, taste, category, details, photo } =
		coffee;

	const handleUpdateCoffee = (event) => {
		event.preventDefault();

		const form = event.target;

		const name = form.name.value;
		const quantity = form.quantity.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const category = form.category.value;
		const details = form.details.value;
		const photo = form.photo.value;

		const updatedCoffee = {
			name,
			quantity,
			supplier,
			taste,
			category,
			details,
			photo,
		};

		console.log(updatedCoffee);

		fetch(`http://localhost:5000/coffee/${_id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(updatedCoffee),
		})
			.then((res) => res.json())
			.then((data) => {
                // console.log(data);
                
                //  <Link to="/"></Link>;

				if (data.modifiedCount > 0) {
					Swal.fire({
						title: "Success!",
						text: "Coffee updated Successfully",
						icon: "success",
						confirmButtonText: "ok",
                    });
                  
                }
                 
			});
	};
	return (
		<div className="bg-[#F4F3F0] p-24">
			<h1 className="text-3xl font-extrabold mb-5 ">
				Update Coffee :{name}
			</h1>
			<form onSubmit={handleUpdateCoffee}>
				{/* form row */}
				<div className="md:flex mb-8">
					<div className="join join-vertical md:w-1/2 mr-4">
						<h3 className="text-left mb-2">Coffee Name</h3>
						<input
							type="text"
							name="name"
							className="input input-bordered w-full ml-4"
							placeholder="Enter Coffee Name"
							defaultValue={name}
						/>
					</div>
					<div className="join join-vertical  md:w-1/2 ">
						<h3 className="text-left mb-2">Available Quantity</h3>
						<input
							type="text"
							name="quantity"
							className="input input-bordered w-full ml-4"
							placeholder="Enter Available Quantity"
							defaultValue={quantity}
						/>
					</div>
				</div>
				{/* form row */}
				<div className="md:flex mb-8">
					<div className="join join-vertical md:w-1/2 mr-4">
						<h3 className="text-left mb-2">Supplier</h3>
						<input
							type="text"
							name="supplier"
							className="input input-bordered w-full ml-4"
							placeholder="Enter coffee supplier"
							defaultValue={supplier}
						/>
					</div>
					<div className="join join-vertical  md:w-1/2 ">
						<h3 className="text-left mb-2">Taste</h3>
						<input
							type="text"
							name="taste"
							className="input input-bordered w-full ml-4"
							placeholder="Enter coffee taste"
							defaultValue={taste}
						/>
					</div>
				</div>
				{/* form row */}
				<div className="md:flex mb-8">
					<div className="join join-vertical md:w-1/2 mr-4">
						<h3 className="text-left mb-2">Category</h3>
						<input
							type="text"
							name="category"
							className="input input-bordered w-full ml-4"
							placeholder="Enter coffee category"
							defaultValue={category}
						/>
					</div>
					<div className="join join-vertical  md:w-1/2 ">
						<h3 className="text-left mb-2">Details</h3>
						<input
							type="text"
							name="details"
							className="input input-bordered w-full ml-4"
							placeholder="Enter coffee details"
							defaultValue={details}
						/>
					</div>
				</div>
				{/* form row */}
				<div className="md:flex mb-8">
					<div className="join join-vertical md:w-full mr-4">
						<h3 className="text-left mb-2">Photo URL</h3>
						<input
							type="text"
							name="photo"
							className="input input-bordered w-full ml-4"
							placeholder="Enter photo"
							defaultValue={photo}
						/>
					</div>
				</div>

				<input
					type="submit"
					value="Update Coffee"
					className="btn btn-block bg-[#e4e3e1]"
				/>
			</form>
		</div>
	);
};

export default UpdateCoffee;
