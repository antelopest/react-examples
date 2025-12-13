export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true, // Centers the container automatically (removes need for mx-auto)
      padding: '1rem', // Adds default padding
      screens: { // You can customize breakpoints if needed
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    }
  },
  plugins: []
}