/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#D70404",
      },
      fontFamily: {
        poppinsRegular: ["Poppins-Regular"],
        poppinsMedium: ["Poppins-Medium"],
        poppinsSemiBold: ["Poppins-SemiBold"],
        bebasNeue: ["BebasNeue-Regular"],
      },
    },
  },
  plugins: [],
};
