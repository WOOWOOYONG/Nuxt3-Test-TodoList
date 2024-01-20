/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './content/**/*.{md,yml,json,yaml,toml,csv}',
    './container/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}'
  ],
  theme: {
    container: {
      center: true
    }
  }
}
