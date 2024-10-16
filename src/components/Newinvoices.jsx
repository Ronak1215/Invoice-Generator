import React from "react";

function Newinvoices() {
  return (
    <>
      <h2 className="md:p-2">New Invoice</h2>
      <form action="" className="md:p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
          <div>
            <input
              type="text"
              id="to"
              class=" border border-black w-full text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-1  "
              placeholder="To"
            />
          </div>
          <div>
            <input
              type="text"
              id="phone"
              class=" border border-black w-full text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-1"
              placeholder="Phone"
            />
          </div>
          <div>
            <input
              type="text"
              id="address"
              className=" border border-black w-full text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-1 "
              placeholder="Address"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
          <div>
            <input
              type="text"
              id="pname"
              className=" border border-black w-full text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-1  "
              placeholder="Product Name"
            />
          </div>
          <div>
            <input
              type="text"
              id="price"
              className=" border border-black w-full text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-1"
              placeholder="Price"
            />
          </div>
          <div>
            <input
              type="number"
              id="quantity"
              className=" border border-black w-full text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-1 "
              placeholder="Quantity"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default Newinvoices;
