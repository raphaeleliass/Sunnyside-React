/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primarySoft_red: "hsl(7, 99%, 70%)",
        primaryYellow: "hsl(51, 100%, 49%)",
        primaryDarkDesaturated_cyan: "hsl(167, 40%, 24%)",
        primaryDark_blue: "hsl(198, 62%, 26%)",
        primaryDarkModerate_cyan: "hsl(168, 34%, 41%)",
        neutralVeryDarkDesaturated_blue: "hsl(212, 27%, 19%)",
        neutralVeryDarkGrayish_blue: "hsl(213, 9%, 39%)",
        neutralDarkGrayish_blue: "hsl(232, 10%, 55%)",
        neutralGrayish_blue: "hsl(210, 4%, 67%)",
        neutralWhite: "hsl(0, 0%, 100%)",
      },
    },
    fontFamily: {
      Barlow: ["Barlow", "Sans-Serif"],
      Fraunces: ["Fraunces", "Sans-Serif"],
    },
    fontWeight: {
      barlow400: "400",
      fraunces700: "700",
      fraunces900: "900",
    },
    backgroundImage: {
      hero_Desktop: 'url("/desktop/image-header.jpg")',
      cone_Desktop: 'url("/desktop/image-gallery-cone.jpg")',
      milk_Desktop: 'url("/desktop/image-gallery-milkbottles.jpg")',
      orange_Desktop: 'url("/desktop/image-gallery-orange.jpg")',
      sugar_Desktop: 'url("/desktop/image-gallery-sugarcubes.jpg")',
      graphic_Desktop: 'url("/desktop/image-graphic-design.jpg")',
      photography_Desktop: 'url("/desktop/image-photography.jpg")',
      stand_Desktop: 'url("/desktop/image-stand-out.jpg")',
      transform_Desktop: 'url("/desktop/image-transform.jpg")',
      hero_Mobile: 'url("/mobile/image-header.jpg")',
      cone_Mobile: 'url("/mobile/image-gallery-cone.jpg")',
      milk_Mobile: 'url("/mobile/image-gallery-milkbottles.jpg")',
      orange_Mobile: 'url("/mobile/image-gallery-orange.jpgjpg")',
      sugar_Mobile: 'url("/mobile/image-gallery-sugarcubes.jpg")',
      graphic_Mobile: 'url("/mobile/image-gallery-design.jpg")',
      photography_Mobile: 'url("/mobile/image-gallery-photography.jpg")',
      stand_Mobile: 'url("/mobile/image-gallery-stand-out.jpg")',
      transform_Mobile: 'url("/mobile/image-gallery-transform.jpg")',
    },
  },
  plugins: [],
};