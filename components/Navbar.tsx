// import Link from "next/link";
// import Image from "next/image";
// import NavItems from "@/components/NavItems";
// import {
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs";
//
//
// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <Link href="/">
//                 <div className="flex items-center gap-2.5 cursor-pointer">
//                     <Image src="/images/logo.svg" alt="Logo" width={46} height={44} />
//                 </div>
//             </Link>
//             <div className="flex items-center gap-8 ">
//                 <NavItems/>
//                 <div className="flex items-center gap-4">
//                     <SignedOut>
//                         <SignInButton>
//                             <button className="btn-signin">Sign In</button>
//                         </SignInButton>
//
//                     </SignedOut>
//                     <SignedIn>
//                         <UserButton/>
//                     </SignedIn>
//                 </div>
//             </div>
//         </nav>
//     )
// }
// export default Navbar



"use client";
import React from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "@/assets/assets";
import Link from "next/link";

import Image from "next/image";
import {useClerk, UserButton, useUser} from "@clerk/nextjs";
import { useRouter } from "next/navigation"; // 🟢 updated!

const Navbar = () => {
    const { openSignIn } = useClerk();
    const { user } = useUser();
    const router = useRouter(); // 🟢 added!

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
            <Image
                className="cursor-pointer w-10 md:w-10"
                onClick={() => router.push("/")}
                src="/images/logo.svg"
                alt="logo"
                width={46}
                height={44}
            />
            <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
                <Link href="/" className="hover:text-gray-900 transition">
                    Home
                </Link>
                <Link href="/companions" className="hover:text-gray-900 transition">
                    Companions
                </Link>
                <Link href="/my-journey" className="hover:text-gray-900 transition">
                    My Journey
                </Link>



            </div>

            <ul className="hidden md:flex items-center gap-4 ">

                {user ? (
                    <>
                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action
                                    label="Companions"
                                    labelIcon={<CartIcon />}
                                    onClick={() => router.push("/companions")}
                                />
                            </UserButton.MenuItems>

                            <UserButton.MenuItems>
                                <UserButton.Action
                                    label="My Journey"
                                    labelIcon={<BagIcon />}
                                    onClick={() => router.push("/my-journey")}
                                />
                            </UserButton.MenuItems>
                        </UserButton>
                    </>
                ) : (
                    <button
                        onClick={openSignIn}
                        className="flex items-center gap-2 hover:text-gray-900 transition"
                    >
                        <Image src={assets.user_icon} alt="user icon" />
                        Account
                    </button>
                )}
            </ul>

            <div className="flex items-center md:hidden gap-3">

                {user ? (
                    <>
                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action
                                    label="Home"
                                    labelIcon={<HomeIcon />}
                                    onClick={() => router.push("/")}
                                />
                            </UserButton.MenuItems>


                            <UserButton.MenuItems>
                                <UserButton.Action
                                    label="My Journey"
                                    labelIcon={<BoxIcon />}
                                    onClick={() => router.push("/my-journey")}
                                />
                            </UserButton.MenuItems>


                            <UserButton.MenuItems>
                                <UserButton.Action
                                    label="Companions"
                                    labelIcon={<CartIcon />}
                                    onClick={() => router.push("/companions")}
                                />
                            </UserButton.MenuItems>


                        </UserButton>
                    </>
                ) : (
                    <button
                        onClick={openSignIn}
                        className="flex items-center gap-2 hover:text-gray-900 transition"
                    >
                        <Image src={assets.user_icon} alt="user icon" />
                        Account
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
