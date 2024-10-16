import React from "react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen max-w-full bg-gradient-to-br from-zinc-700 to-zinc-900">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-white px-10 text-3xl sm:text-5xl text-center font-semibold">
          Free Invoice generator
        </h2>
        <h3 className="text-white p-10 w-4/5 text-base sm:text-xl font-light text-center">
          Create professional invoices effortlessly using our free invoice
          generator tool. Easy Bill user-friendly interface empowers you to
          generate an unlimited number of invoices, tailored to your unique
          business needs. It is simple to use, download and send invoices in PDF
          to all your customers. There are no limits to what you can achieve
          together with us!
        </h3>
        <div className="">
          <Link to={'/login'}>
            <Button>Generate invoices now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
