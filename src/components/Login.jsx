import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle,CardFooter } from "./ui/card";
import { Label } from "@radix-ui/react-label";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { Eye, EyeIcon, EyeOff } from "lucide-react";

function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(EyeOff);
  const nevigate = useNavigate()
  
  const submitHandler = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      const user = userCredential.user;
      console.log(user)
      localStorage.setItem("cName",user.displayName)
      localStorage.setItem("photoUrl",user.photoURL)
      nevigate("/dashboard")
    })
    .catch((error)=>{
      console.log(error)
    })
  }

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
        <div className="sm:min-h-screen sm:w-3/6 bg-zinc-900 flex sm:flex sm:flex-col justify-between items-center p-10 hidden sm:block">
          <Link to={'/'}>
            <div className="h-80 w-80 justify-center items-center hidden sm:block cursor-pointer"><img src="src\assets\Logo.png" alt="Logo"  />
            </div>
          </Link>
          <div>
            <p className="text-white text-xl hidden sm:block">
              Fastest way to make an Invoice. Download just in 1 click
            </p>
          </div>
        </div>
        <div className="min-h-screen sm:min-h-screen sm:w-3/6 bg-black p-10 flex flex-col items-center justify-center">
        <Link to={'/register'}>
          <Button className="text-white absolute end-10 top-10">Signup</Button>
        </Link>
        <Link to={'/'}>
          <img src="src\assets\Logo.png" className="h-11 w-11 absolute start-10 top-10 sm:hidden cursor-pointer" alt="Logo"  />
        </Link>
          <p className="text-white mt-5 text-center mb-7 sm:hidden text-lg">Fastest way to make an Invoice. Download just in 1 click</p>
          <form onSubmit={submitHandler}>
          <Card>    
            <CardHeader className="space-y-1">
              <CardTitle className="text-center md:px-24 ">Log In</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  {/* <span className="w-full border-t" /> */}
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com"  
                onChange={(e) => {
                  setEmail(e.target.value);
                }}/>
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
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit">Login</Button>
            </CardFooter>
          </Card>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
