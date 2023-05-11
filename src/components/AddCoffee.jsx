import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newAddCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newAddCoffee);

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newAddCoffee)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  }

  return (
    <div>
      <Link to="/">
        <h2 className="my-12 flex items-center gap-4">
          <FaArrowLeft></FaArrowLeft> Back to Home
        </h2>
      </Link>
      <div className="bg-[#F4F3F0] p-8 md:py-16 md:px-28">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Add Coffee</h2>
          <p className="my-8">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleAddCoffee}>
          <div className="md:flex mb-6 gap-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
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
                  placeholder="Enter coffee chef"
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
                  placeholder="Enter coffee supplier"
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
                  placeholder="Enter coffee taste"
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
                  placeholder="Enter coffee category"
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
                  placeholder="Enter coffee details"
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
                  placeholder="Enter photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <button className="btn btn-block bg-[#D2B48C] hover:bg-[#D2B48C] rounded-md capitalize text-black">
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
