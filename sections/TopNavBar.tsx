"use client";

import React from "react";
import { motion } from "framer-motion";

import { navVariants } from "../utils/motion";
import { Logo, SearchBar, Profile, ToggleDarkMode } from "../components";

const TopNavBar = () => (
    <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="w-full bg-color-white py-8 "
    >
        <div className=" w-full bg-white py-4 ">
            <div className="w-[96%] mx-auto flex justify-between items-center">
                <Logo />
                <SearchBar />
                <ToggleDarkMode />
                <Profile />
            </div>
        </div>
    </motion.nav>
);

export default TopNavBar;
