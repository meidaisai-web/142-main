import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "var(--color-primary)",
                    700: "var(--color-primary-700)",
                    text: "var(--color-primary-text)"
                },
                secondary: {
                    100: "var(--color-secondary-100)",
                    400: "var(--color-secondary-400)",
                    700: "var(--color-secondary-700)",
                    900: "var(--color-secondary-900)",
                    DEFAULT: "var(--color-secondary)"
                },
                accent: {
                    ToTop: "var(--color-accent-totop)",
                    100: "var(--color-accent-100)",
                    300: "var(--color-accent-300)",
                    700: "var(--color-accent-700)",
                    900: "var(--color-accent-900)",
                    DEFAULT: "var(--color-accent)"
                },
                text: {
                    DEFAULT: "var(--color-text)"
                },
                background: {
                    DEFAULT: "var(--color-background)",
                    loading: "var(--color-background-loading)"
                },
                gray: {
                    cover: "var(--color-gray-cover"
                }
            },

            fontFamily: {
                copyRight: [
                    'Kozuka Gothic Pr6N', 'sans-serif',
                ],
            },

            padding: {
                '0.2rem': '0.2rem',
                '0.3rem': '0.3rem',
                '0.7rem': '0.7rem',
                '0.8rem': '0.8rem',
                '1.1rem': '1.1rem',
            },

            backgroundImage: {
                'custom-gradient': 'linear-gradient(to bottom, transparent 60%, #a6daf3 60%)',
                'primary-gradient': 'linear-gradient(to right, #B5364A, #3571B8)',
                'white-gradient': 'linear-gradient(to bottom, #fff0, #fff0, #fff0, #fff0, #ffff)',
                'white-gradient-2': 'linear-gradient(to bottom, #ffff, #fffa, #fff0)',
            },

            dropShadow: {
                'white-shadow': '4px 4px 0px rgba(255, 255, 255, 1)',
                'custom-secondary': '1px 2px 2px rgba(242,160,157,1)',
                'toTop-shadow': '0px 1px 0.5px rgba(255, 255, 255, 1)',
            },

            screens: {
                sm: "0px",
                md: "340px",
                ml: "650px",
                lg: "900px"
            },

            keyframes: {
                wave: {
                    '0%': {
                        transform: 'translateX(0)'
                    },
                    '100%': {
                        transform: 'translateX(-50.5%)'
                    },
                },

                moveUp: {
                    '0%': {
                        transform: 'translateY(0)'
                    },
                    '100%': {
                        transform: 'translateY(-8800px)'
                    },
                },


            },
            animation: {
                wave: 'wave 30s linear infinite',
                moveUp: 'moveUp 200s linear infinite',
            },

        },
    },
    plugins: [
        function ({
            addBase
        }: {
            addBase: (base: Record < string, Record < string, string >> ) => void
        }) {
            addBase({
                'html': {
                    'scroll-behavior': 'smooth',
                },
            });
        },
    ],
};
export default config;
