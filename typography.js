/** @format */

import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["700"],
    },
    {
      name: "Open Sans",
      styles: ["400"],
    },
  ],
  headerFontFamily: ["Montserrat", "Helvetica Neue", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
});

typography.injectStyles();
//javascript description을 가져다가 css로 바꾸는거임. 위에꺼

export default typography;
