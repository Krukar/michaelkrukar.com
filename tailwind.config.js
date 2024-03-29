/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                dark: "#171717", // neutral-900
                krukar: "#EA002A",
                light: "#FAFAFA", // neutral-50
            },
        },
        spacing: {
            0: "0px",
            1: "1px",
            2: "2px",
            3: "3px",
            4: "5px",
            5: "8px",
            6: "13px",
            6.5: "18px",
            7: "21px",
            8: "34px",
            8.5: "44px",
            9: "55px",
            10: "89px",
            10.5: "116px",
            11: "144px",
            12: "233px",
            13: "377px",
            14: "610px",
            15: "987px",
        },
    },
    plugins: [],
};
