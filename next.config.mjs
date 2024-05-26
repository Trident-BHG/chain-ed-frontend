/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PAYMENT_CONTRACT_ADDRESS: process.env.PAYMENT_CONTRACT_ADDRESS,
    LENDING_CONTRACT_ADDRESS: process.env.LENDING_CONTRACT_ADDRESS,
  },
};

export default nextConfig;
