import Image from "next/image";
import { useTheme } from "next-themes";

import fLogoDark from "@/public/logo/full_black.png";
import fLogoLight from "@/public/logo/full_white.png";

const Logo = () => {
    const { theme, systemTheme } = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <Image
            src={currentTheme === "dark" ? fLogoLight : fLogoDark}
            alt="logo"
            className="absolute w-28 h-10 md:w-34 md:16"
        />
    );
};

export default Logo;
