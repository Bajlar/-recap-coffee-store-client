import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Products = ({ product, allProducts, setAllProducts }) => {
  // console.log(product);
  // console.log(allProducts);
  const { _id, name, chef, photo } = product;

  const handleDelete = (_id) => {
    console.log("btn delete", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log('delete confirm');
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount === 1) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = allProducts.filter(p => p._id !== _id);
              setAllProducts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mt-6">
      <div className="card h-64 card-side bg-base-100 shadow-xl p-12">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between items-center w-full pr-5">
          <div className="p-5">
            <h2 className="card-title">Name: {name}</h2>
            <p>Chef: {chef}</p>
            <p>Price: 890 Taka</p>
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical space-y-2">
              <button className="btn bg-[#D2B48C] hover:bg-[#D2B48C]">
                <FaEye></FaEye>
              </button>
              <Link to={`/updateCoffee/${_id}`}>
                <button className="btn bg-[#3C393B] hover:bg-[#3C393B]">
                  <FaPen></FaPen>
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-[#EA4744] hover:bg-[#EA4744]"
              >
                <FaTrash></FaTrash>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;