/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  //linea que soluciona el error con babel.
  experimental: { 
    forceSwcTransforms: true,
  },
  //_______________________________________
  
}

module.exports = nextConfig