"use client";

import CurriculumDropdown from "@/app/components/CurriculumDropdown";
import VideoView from "@/app/components/VideoView";
import Tab from "@/app/components/Tab";

import data from "@/constants/courseCurriculumDetails.json";

import { ethers } from "ethers";
import paymentAbi from "@/constants/paymentabi.json";
import { useState, useEffect } from "react";

export default function LectureOverviewPage() {
  const [provider, setProvider] = useState(null);
  const [amountClaimable, setAmountClaimable] = useState(0);

  async function supplyTokens() {
    const LendingContract = new ethers.Contract(
      process.env.PAYMENT_CONTRACT_ADDRESS,
      paymentAbi,
      provider.getSigner(),
    );

    const tx = await LendingContract.supplyTokens(
      "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      ethers.utils.parseUnits("1", 6),
    );

    console.log(tx);

    let receipt = await provider.getTransactionReceipt(tx.hash);
    console.log(receipt);
  }

  async function withdrawTokens() {
    const LendingContract = new ethers.Contract(
      process.env.PAYMENT_CONTRACT_ADDRESS,
      paymentAbi,
      provider.getSigner(),
    );

    const tx = await LendingContract.withdrawTokens(
      "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      ethers.utils.parseUnits("1", 6),
    );

    let receipt = await provider.getTransactionReceipt(tx.hash);
    console.log(receipt);
  }

  async function claimAmount() {
    const PaymentContract = new ethers.Contract(
      process.env.PAYMENT_CONTRACT_ADDRESS,
      paymentAbi,
      provider.getSigner(),
    );

    const tx = await PaymentContract.claimPayment(
      "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      0,
      "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      ethers.utils.parseUnits(amountClaimable.toString(), 6),
    );

    let receipt = await provider.getTransactionReceipt(tx.hash);
    console.log(receipt);
  }

  async function getAmountClaimableByTheUser() {
    const PaymentContract = new ethers.Contract(
      process.env.PAYMENT_CONTRACT_ADDRESS,
      paymentAbi,
      provider.getSigner(),
    );

    let tx = await PaymentContract.getAmountClaimableByUser(
      "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      0,
    );

    setAmountClaimable(ethers.utils.formatUnits(tx, 6));
  }

  async function completeCourseSubsection() {
    const PaymentContract = new ethers.Contract(
      process.env.PAYMENT_CONTRACT_ADDRESS,
      paymentAbi,
      provider.getSigner(),
    );

    const tx = await PaymentContract.updateClaims(
      "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      0,
      ethers.utils.parseUnits("1", 6),
    );

    let receipt = await provider.getTransactionReceipt(tx.hash);
    console.log(receipt);
  }

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    getAmountClaimableByTheUser();
  }, []);

  return (
    <div className="grid h-full grid-cols-12">
      <div className="col-span-8 mt-8 flex flex-col">
        <div className="h-1/2 px-5">
          <VideoView />
        </div>
        <div className="flex flex-col px-5">
          <h1 className="mt-10 text-3xl font-medium">
            How to interact with Smart contract using Ethersjs
          </h1>
          <div className="mt-3 flex gap-5">
            <div className="flex gap-3 ">
              <p>Duration : </p>
              <p className="font-semibold">16 Weeks</p>
            </div>
            <div className="flex gap-3">
              <p>By : </p>
              <p className="font-semibold">Wisdom Umanah</p>
            </div>
            <div className="flex gap-3">
              <p>Rating : </p>
              <p className="font-semibold">5 star</p>
            </div>
          </div>
          <div className="mt-10 ">
            <Tab />
          </div>
        </div>
      </div>
      <div className="col-span-4 border-l-2 border-gray-200 p-8">
        <div className="mb-3">
          <h1 className="text-gray-400">Your learning progress</h1>
          <div className="rounded-md bg-blue-200 px-4 py-3">
            <div className="flex justify-between">
              <p className="font-semibold">60%</p>
              <p className="font-semibold">42 / 78 Completion</p>
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
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <h1 className="text-gray-400">Days to complete the Course</h1>
          <div className="rounded-md bg-yellow-200 px-4 py-3">
            <div className="flex justify-between">
              <p className="font-semibold">80%</p>
              <p className="font-semibold">9 days left</p>
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
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <h1 className="text-gray-400">Earnings</h1>
          <div className="flex justify-between rounded-md bg-green-200 px-4 py-3">
            <div className="flex w-3/5 flex-col">
              <p className="font-semibold">$ {amountClaimable} / $50 earned</p>
              <div
                className="mt-2 flex h-1.5 w-full overflow-hidden rounded-full bg-gray-200"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="flex flex-col justify-center overflow-hidden whitespace-nowrap rounded-full bg-green-700 text-center text-xs text-white transition duration-500"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>
            <div
              onClick={() => claimAmount()}
              className="cursor-pointer rounded-lg border-4 border-green-700 bg-green-400 p-2 font-semibold text-green-700"
            >
              Claim Now
            </div>
          </div>
        </div>

        <div
          className="cursor-pointer"
          onClick={() => completeCourseSubsection()}
        >
          complete course section
        </div>

        <div
          className="cursor-pointer"
          onClick={() => getAmountClaimableByTheUser()}
        >
          get amount claimable by user
        </div>

        <div className="cursor-pointer" onClick={() => supplyTokens()}>
          supply tokens
        </div>

        <div className="cursor-pointer" onClick={() => withdrawTokens()}>
          withdraw tokens
        </div>

        <div className=" border-gray-500 py-5 text-xl font-semibold">
          Course Outline
        </div>
        <div className="h-screen">
          {data.map((section, index) => {
            return <CurriculumDropdown data={section} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
