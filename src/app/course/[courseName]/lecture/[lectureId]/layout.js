"use client";

import { ethers } from "ethers";
import { useState, useEffect, useContext } from "react";
import { useParams } from "next/navigation";

import CurriculumDropdown from "@/app/components/CurriculumDropdown";
import { courseDetails as data } from "@/constants";

import paymentAbi from "@/constants/paymentabi.json";
import AppContext from "@/store/app-context";

export default function LectureOverviewPage({ children }) {
  const { amountClaimable, setAmountClaimable } = useContext(AppContext);
  const { lectureId } = useParams() || {};
  const [provider, setProvider] = useState(null);

  async function withdrawTokensOffline(amountClaimable) {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.LOCAL_RPC_ENDPOINT,
    );

    const signer = new ethers.Wallet(
      process.env.TEST_USER_PRIVATE_KEY,
      provider,
    );

    const LendingContract = new ethers.Contract(
      process.env.PAYMENT_CONTRACT_ADDRESS,
      paymentAbi,
      signer,
    );

    const tx = await LendingContract.withdrawTokens(
      process.env.USDC_ETH_MAINNET_ADDRESS,
      ethers.utils.parseUnits(amountClaimable.toString(), 6),
    );

    const receipt = await provider.getTransactionReceipt(tx.hash);

    console.log(receipt);
  }

  async function claimAmount() {
    // await withdrawTokensOffline(amountClaimable);
    const PaymentContract = new ethers.Contract(
      process.env.PAYMENT_CONTRACT_ADDRESS,
      paymentAbi,
      provider.getSigner(),
    );

    const tx = await PaymentContract.claimPayment(
      process.env.TEST_USER_ADDRESS,
      process.env.TEST_COURSE_ID,
      process.env.USDC_ETH_MAINNET_ADDRESS,
      ethers.utils.parseUnits(amountClaimable.toString(), 6),
    );

    let receipt = await provider.getTransactionReceipt(tx.hash);
    console.log(receipt);

    getAmountClaimableByTheUser(provider);
  }

  async function getAmountClaimableByTheUser(provider) {
    const PaymentContract = new ethers.Contract(
      process.env.PAYMENT_CONTRACT_ADDRESS,
      paymentAbi,
      provider.getSigner(),
    );

    let tx = await PaymentContract.getAmountClaimableByUser(
      process.env.TEST_USER_ADDRESS,
      process.env.TEST_COURSE_ID,
    );

    setAmountClaimable(ethers.utils.formatUnits(tx, 6));
  }

  useEffect(() => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
      getAmountClaimableByTheUser(provider);
    } catch (e) {}
  }, []);

  const activeSectionIndex = data[0]?.details?.sections.findIndex((section) =>
    section.subSections.find(({ link }) => link.includes(lectureId)),
  );

  const subsectionIndex = data[0]?.details?.sections[
    activeSectionIndex
  ].subSections.findIndex(({ link }) => link.includes(lectureId));

  const totalSubsections = getTotalSubsections(data[0]?.details?.sections);

  const countOfCompletedSubsections =
    getTotalSubsections(
      data[0]?.details?.sections.slice(0, activeSectionIndex),
    ) + subsectionIndex;

  const learningPercent = Math.ceil(
    (countOfCompletedSubsections / totalSubsections) * 100,
  );

  return (
    <div className="grid h-full grid-cols-12">
      {children}
      <div className="col-span-4 border-l-2 border-gray-200 p-8">
        <div className="mb-3">
          <h1 className="text-gray-400">Your learning progress</h1>
          <div className="rounded-md bg-blue-200 px-4 py-3">
            <div className="flex justify-between">
              <p className="font-semibold">{learningPercent}%</p>
              <p className="font-semibold">
                {countOfCompletedSubsections} / {totalSubsections} Completion
              </p>
            </div>
            <div
              className="mt-2 flex h-1.5 w-full overflow-hidden rounded-full bg-gray-200"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="flex flex-col justify-center overflow-hidden whitespace-nowrap rounded-full bg-blue-700 text-center text-xs text-white transition duration-500"
                style={{ width: `${learningPercent}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <h1 className="text-gray-400">Days to complete the Course</h1>
          <div className="rounded-md bg-yellow-200 px-4 py-3">
            <div className="flex justify-between">
              <p className="font-semibold">100%</p>
              <p className="font-semibold">15 days left</p>
            </div>
            <div
              className="mt-2 flex h-1.5 w-full overflow-hidden rounded-full bg-gray-200"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="flex flex-col justify-center overflow-hidden whitespace-nowrap rounded-full bg-yellow-600 text-center text-xs text-white transition duration-500"
                style={{ width: "0" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <h1 className="text-gray-400">Earnings</h1>
          <div className="flex justify-between rounded-md bg-green-200 px-4 py-3">
            <div className="flex w-3/5 flex-col">
              <p className="font-semibold">$ {amountClaimable} / $ 50 earned</p>
              <div
                className="mt-2 flex h-1.5 w-full overflow-hidden rounded-full bg-gray-200"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="flex flex-col justify-center overflow-hidden whitespace-nowrap rounded-full bg-green-700 text-center text-xs text-white transition duration-500"
                  style={{ width: `${(amountClaimable / 50) * 100}%` }}
                ></div>
              </div>
            </div>
            <div
              onClick={async () => claimAmount()}
              className="cursor-pointer rounded-lg border-4 border-green-700 bg-green-400 p-2 font-semibold text-green-700"
            >
              Claim Now
            </div>
          </div>
        </div>

        <div className=" border-gray-500 py-5 text-xl font-semibold">
          Course Outline
        </div>
        <div className="h-screen">
          {data[0]["details"]["sections"].map((section, index) => {
            return (
              <CurriculumDropdown
                key={index}
                data={section}
                activeSectionIndex={activeSectionIndex}
                subsectionIndex={subsectionIndex}
                sectionIndex={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const getTotalSubsections = (data) => {
  return data.reduce((acc, section) => {
    acc += section?.subSections.length;
    return acc;
  }, 0);
};
