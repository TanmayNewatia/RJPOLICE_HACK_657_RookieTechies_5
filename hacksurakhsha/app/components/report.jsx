import feedback from "../images/feedback.svg";
import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";
import report from "../images/report.svg";

export default function Report() {
    return (
        <div className="report-container flex !h-11/12">
            <div className="report-div flex-wrap !h-9/12">
                <h2 className="text-2xl font-bold text-center my-2">Report Malware Website</h2>
                <form className="flex flex-col justify-center items-start w-10/12 gap-5 p-5 rounded-2xl">
                    <div className="flex">
                        <div className="second-layer flex flex-wrap">
                            <div className="mx-1">
                                <label class="font-bold text-sm">
                                    Occupation
                                </label>
                                <div className="inputfield flex text-md items-center bg-white p-2 rounded-md gap-2">
                                    <MdAccountCircle />
                                    <input type="text" placeholder="Enter Your Name" />
                                </div>
                            </div>
                            <div className="mx-1">
                                <label class="font-bold text-sm">
                                    Email Address
                                </label>
                                <div className="inputfield flex text-md items-center bg-white p-2 rounded-md gap-2">
                                    <IoMdMail />
                                    <input type="text" placeholder="Enter Your Name" />
                                </div>
                            </div>
                        </div>
                        <Image src={report} alt="Report Image" width={"200"} />
                    </div>
                    <textarea className="w-full h-32 rounded-2xl" placeholder="Add your comments"></textarea>
                    <input type="submit" className="hero-btn" />
                </form>
            </div>
        </div>
    )
}