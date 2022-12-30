/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./sections/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        screens: {
            tablet: "640px",
            laptop: "1024px",
            desktop: "1280px",
        },
        colors: {
            transparent: "transparent",
            white: "var(--color-white)",
            light: "var(--color-light)",
            dark: "var(--color-dark)",
            "gray-light": "var(--color-gray-light)",
            "gray-dark": "var(--color-gray-dark:)",
            /* */
            primary: "rgba(var(--color-primary)/ <alpha-value>)",
            success: "rgba(var(--color-success)/ <alpha-value>)",
            danger: "rgba(var(--color-danger)/ <alpha-value>)",
            warning: "rgba(var(--color-warning)/ <alpha-value>)",
            purple: "rgba(var(--color-purple)/ <alpha-value>)",
            /*  */
            "primary-light": "rgba(var(--color-primary-light)/ <alpha-value>)",
            "success-light": "rgba(var(--color-success-light)/ <alpha-value>)",
            "danger-light": "rgba(var(--color-danger-light)/ <alpha-value>)",
            "purple-light": "rgba(var( --color-purple-light)/ <alpha-value>)",
        },

        borderRadius: {
            "profile-border-radius": "var(--profile-border-radius)",
            "card-border-radius": "var(--card-border-radius)",
            "border-radius-1": "var(--border-radius-1)",
            "border-radius-2": "var(--border-radius-2)",
        },
        extend: {
            padding: {
                "card-padding": "var(--card-padding)",
                "padding-1": "var( --padding-1)",
                "padding-2": "var(--padding-2)",
            },
        },
    },
    plugins: [],
};
