/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PAYMENT_CONTRACT_ADDRESS: process.env.PAYMENT_CONTRACT_ADDRESS,
    USDC_ETH_MAINNET_ADDRESS: process.env.USDC_ETH_MAINNET_ADDRESS,
    TEST_USER_ADDRESS: process.env.TEST_USER_ADDRESS,
    TEST_COURSE_ID: process.env.TEST_COURSE_ID,
    LOCAL_RPC_ENDPOINT: process.env.LOCAL_RPC_ENDPOINT,
    TEST_USER_PRIVATE_KEY: process.env.TEST_USER_PRIVATE_KEY,
  },
};

export default nextConfig;
