const defaultTheme = require('tailwindcss/defaultTheme');

import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: '#171717', // Neutral 900
                silver: '#d4d4d4', // Neutral 300
                light: '#f8fafc', // Neutral 50
                krukar: '#EA002A',
            },
        },
        screens: {
            xs: '460px',
            ...defaultTheme.screens,
        },
        spacing: {
            base: '16px',
            icon: '42px',
            0: '0px',
            1: '1px',
            2: '2px',
            3: '3px',
            4: '5px',
            5: '8px',
            6: '13px',
            7: '21px',
            8: '34px',
            9: '55px',
            10: '89px',
            11: '144px',
            12: '233px',
            13: '377px',
            14: '610px',
        },
    },
    plugins: [],
};
export default config;
