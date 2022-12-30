import type { NextPage } from "next";
import Head from "next/head";

import TopNavBar from "@/sections/TopNavBar";

const Home: NextPage = () => (
    <>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="min-h-screen w-full bg-light dark:bg-dark">
            <TopNavBar />
        </div>
    </>
);

export default Home;
