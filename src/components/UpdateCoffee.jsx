import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const updateCoffees = useLoaderData();
  // console.log(updateCoffees);
  const { _id, name, chef, supplier, taste, category, details, photo } = updateCoffees;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updateCoffee);

    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount === 1) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="mt-4">
      <div className="bg-[#F4F3F0] p-8 md:py-16 md:px-28">
        <h2 className="text-5xl text-center font-bold mb-5">Update Coffee</h2>
        <form onSubmit={handleUpdateCoffee}>
          <div className="md:flex mb-6 gap-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">Chef</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="chef"
                  defaultValue={chef}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-6 gap-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Supplier
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-6 gap-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Category
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Details
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-6 gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-2xl font-semibold">Photo</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <button className="btn btn-block bg-[#D2B48C] hover:bg-[#D2B48C] rounded-md capitalize text-black">
            Update Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;