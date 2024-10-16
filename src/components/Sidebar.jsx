import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section className="MOBILE-MENU absolute z-30 md:hidden bg-zinc-800">
        <div className="HAMBURGER-ICON space-y-2 p-3" onClick={toggleSidebar}>
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
        </div>
      </section>

      {isOpen ? (
        <div className="w-64 h-screen bg-zinc-800 md:hidden absolute ">
          <div className="flex p-4 items-center justify-end gap-4 border-b">
            <img
              src={localStorage.getItem("photoUrl")}
              alt="profile photo"
              className="h-14 w-14 rounded-full"
            />
            <div>
              <p className="text-white font-semibold mx-1">
                {localStorage.getItem("cName")}
              </p>
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-sm text-xs px-2 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Logout
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-white ">
            <Link to="/dashboard/main" className="hover:bg-slate-500 py-2">
              <p className="px-2">Home</p>
            </Link>
            <Link to="/dashboard/invoices" className="hover:bg-slate-500 py-2">
              <p className="px-2">Invoices</p>
            </Link>
            <Link
              to="/dashboard/new-invoice"
              className="hover:bg-slate-500 py-2"
            >
              <p className="px-2">New Invoice</p>
            </Link>
            <Link to="/dashboard/setting" className="hover:bg-slate-500 py-2">
              <p className="px-2">Setting</p>
            </Link>
          </div>
        </div>
      ) : null}

      <div className="w-1/6 h-screen bg-zinc-800 max-md:hidden">
        <div className="flex p-4 items-center gap-4 border-b">
          <img
            src={localStorage.getItem("photoUrl")}
            alt="profile photo"
            className="h-14 w-14 rounded-full"
          />
          <div>
            <p className="text-white font-semibold mx-1">
              {localStorage.getItem("cName")}
            </p>
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-sm text-xs px-2 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-white ">
          <Link to="/dashboard/main" className="hover:bg-slate-500 py-2">
            <p className="px-2">Home</p>
          </Link>
          <Link to="/dashboard/invoices" className="hover:bg-slate-500 py-2">
            <p className="px-2">Invoices</p>
          </Link>
          <Link to="/dashboard/new-invoice" className="hover:bg-slate-500 py-2">
            <p className="px-2">New Invoice</p>
          </Link>
          <Link to="/dashboard/setting" className="hover:bg-slate-500 py-2">
            <p className="px-2">Setting</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
