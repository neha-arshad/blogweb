// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { HamIcon } from "lucide-react";


// const Navbar = () => {
//   return (
//     <nav className=" p-4 bg-background/50 sticky top-0 border-b backdrop-blur">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className=" text-2xl font-bold">
//           <Link href="/">
//             <Image
//               src="/logo.png"
//               alt="logo"
//               width={50}
//               height={50}
//               className="rounded-full"
//             />
//           </Link>
//         </div>
//         <ul className="flex items-center gap-6">
//           <li>
//             <Link href="/" className=" hover:text-gray-300">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/about" className=" hover:text-gray-300">
//               About
//             </Link>
//           </li>

//           <li>
//             <Link href="/contact" className=" hover:text-gray-300">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <Button variant="outline">Login</Button>
//       <Button variant="outline">SignUp</Button>
//     </nav>
//   );
// }

// export default Navbar;



// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react"; 
// import { useState } from "react";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="p-4 bg-background/50 sticky top-0 border-b backdrop-blur">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo Section */}
//         <div className="text-2xl font-bold">
//           <Link href="/">
//             <Image
//               src="/logo.png"
//               alt="logo"
//               width={50}
//               height={50}
//               className="rounded-full"
//             />
//           </Link>
//         </div>

//         {/* Hamburger Icon */}
//         <div className="lg:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-gray-700 focus:outline-none"
//           >
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <ul
//           className={`flex-col lg:flex-row flex items-center gap-6 lg:gap-6 lg:flex ${
//             menuOpen ? "flex" : "hidden"
//           } lg:block`}
//         >
//           <li>
//             <Link href="/" className="hover:text-gray-300">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/blog" className="hover:text-gray-300">
//               Blog
//             </Link>
//           </li>
//           <li>
//             <Link href="/about" className="hover:text-gray-300">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" className="hover:text-gray-300">
//               Contact
//             </Link>
//           </li>
//         </ul>

//         {/* Buttons Section */}
//         <div
//           className={`flex flex-col lg:flex-row gap-4 ${
//             menuOpen ? "block" : "hidden"
//           } lg:flex`}
//         >
//           <Button variant="outline">Login</Button>
//           <Button variant="outline">Sign Up</Button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

//import { ModeToggle } from "./theme-btn";
//import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  // const [progress, setProgress] = useState(0);
  // const pathname = usePathname();

  // useEffect(() => {
  //   setProgress(20);

  //   setTimeout(() => {
  //     setProgress(40);
  //   }, 100);

  //   setTimeout(() => {
  //     setProgress(100);
  //   }, 400);
  // }, [pathname]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setProgress(0);
  //   }, 50);
  // }, []);

  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      {/* <LoadingBar
        color="#933ce6"
        progress={progress} */}
        {/* onLoaderFinished={() => setProgress(0)}
      /> */}
      <div className="container mx-auto flex justify-between items-center">
           <Link href="/">
        <div className="text-2xl font-bold">
             <Image
               src="/logo.png"
               alt="logo"
               width={50}
               height={50}
               className="rounded-full"
							 />
         </div>
							 </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            href="/"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            {" "}
            Home
          </Link>
          <Link
            href="/about"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Contact
          </Link>
          <div className="flex items-center">
            <Button className="mx-1" variant="outline">
              Login
            </Button>
            <Button className="mx-1" variant="outline">
              Signup
            </Button>
            {/* <ModeToggle /> */}
          </div>
        </div>

        <div className="md:hidden">
          <span className="mx-2">
            {/* <ModeToggle /> */}
          </span>
          <Sheet>
            <SheetTrigger>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">HarryBlog</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6">
                    <Link href="/"> Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                    <div>
                      <Button className="mx-1 text-xs" variant="outline">
                        Login
                      </Button>
                      <Button className="mx-1 text-xs" variant="outline">
                        Signup
                      </Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;