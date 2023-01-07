/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // useEffect runs twice bug in React 18. Refs: https://stackoverflow.com/questions/72238175/why-useeffect-running-twice-and-how-to-handle-it-well-in-react
  swcMinify: true,
}

module.exports = nextConfig
