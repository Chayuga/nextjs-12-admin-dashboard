import type { NextPage } from "next";
import Head from "next/head";

import { ToggleDarkMode } from "@/components";

const Home: NextPage = () => (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center bg-light dark:bg-dark">
            <p className="underline ">Application Body </p>
            <ToggleDarkMode />
        </main>
    </div>
);

export default Home;
