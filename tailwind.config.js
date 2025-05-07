module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#2563EB',
        secondary: '#475569',
        accent: '#F59E0B',
        background: '#F8FAFC',
        text: '#1E293B',
      },
    },
  },
  plugins: [],
}
