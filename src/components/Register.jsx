import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Label } from "@radix-ui/react-label";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "@/firebaseConfig";
import { Eye, EyeIcon, EyeOff } from "lucide-react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(EyeOff);
  const nevigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((newUser) => {
        console.log(newUser);
        const date = new Date().getTime();
        const storageRef = ref(storage, `${companyName + date}`);
        uploadBytes(storageRef, file).then((res) => {
          console.log(res);
          getDownloadURL(storageRef).then((downloadedUrl) => {
            console.log(downloadedUrl);

            updateProfile(newUser.user, {
              displayName: companyName,
              photoURL: downloadedUrl,
            });
            setDoc(doc(db, "users", newUser.user.uid), {
              uid: newUser.user.uid,
              companyName: companyName,
              email: email,
              photoURL: downloadedUrl,
            });
            nevigate("/dashboard")
            localStorage.setItem("cName",newUser.user.displayName)
            localStorage.setItem("photoUrl",newUser.user.photoURL)
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleToggle = () => {
    if (type === "password") {
      setIcon(Eye);
      setType("text");
    } else {
      setIcon(EyeOff);
      setType("password");
    }
  };

  return (
    <>
      <div className="min-h-screen max-w-full sm:flex ">
        <div className="sm:min-h-screen sm:w-3/6 bg-zinc-900 flex sm:flex-col justify-between items-center p-10 hidden sm:block">
          <Link to={"/"}>
            <div className="h-80 w-80 justify-center items-center hidden sm:block cursor-pointer">
              <img src="src\assets\Logo.png" alt="Logo" />
            </div>
          </Link>
          <div>
            <p className="text-white text-xl hidden sm:block">
              Fastest way to make an Invoice. Download just in 1 click
            </p>
          </div>
        </div>
        <div className="min-h-screen sm:min-h-screen sm:w-3/6 bg-black p-10 flex flex-col items-center justify-center">
          <Link to={"/login"}>
            <Button className="text-white absolute end-10 top-10">Login</Button>
          </Link>
          <Link to={"/"}>
            <img
              src="src\assets\Logo.png"
              className="h-11 w-11 absolute start-10 top-10 sm:hidden"
              alt="Logo"
            />
          </Link>
          <p className="text-white mt-5 text-center mb-7 sm:hidden text-lg">
            Fastest way to make an Invoice. Download just in 1 click
          </p>
          <Card>
            <form onSubmit={submitHandler}>
              <CardHeader className="space-y-1">
                <CardTitle className="text-center">Register</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    {/* <span className="w-full border-t" /> */}
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Company Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="john"
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                    }}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="flex">
                    <Input
                      id="password"
                      type={type}
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <span
                      className="flex justify-around items-end"
                      onClick={handleToggle}
                    >
                      <EyeIcon
                        className="absolute mb-2 mr-10 cursor-pointer"
                        icon={icon}
                        size={25}
                      />
                    </span>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="logo">Logo</Label>
                  <Input
                    id="logo"
                    type="file"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                    }}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Register</Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Register;
