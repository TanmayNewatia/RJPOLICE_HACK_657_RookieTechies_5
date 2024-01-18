import feedback from "../images/feedback.svg";
import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";
import report from "../images/report.svg";
import { supabase } from "../supabase";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Report() {
    const handleSubmit = async () => {
        const name = document.getElementById("name").value;
        const website = document.getElementById("website").value;
        const comments = document.getElementById("comments").value;
        await supabase
            .from('ReportForm')
            .insert([
                { name: name, website: website, comments: comments },
            ])
            .then(() => {
                emailjs.send(process.env.NEXT_PUBLIC_EMAIL_SERVICE, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE2, {
                    name: name,
                    website: website,
                    comments: comments
                }, process.env.NEXT_PUBLIC_EMAIL_KEY)
                    .then(function (response) {
                        console.log('SUCCESS!', response.status, response.text);
                        toast("Report Submitted Successfully!");
                    }, function (error) {
                        console.log('FAILED...', error);
                    });
                document.getElementById("myForm").reset();
            })
            .then((error) => {
                document.getElementById("myForm").reset();
            })
    }
    return (
        <div className="report-container flex !h-11/12">
            <div className="report-div flex-wrap !h-9/12">
                <h2 className="text-2xl font-bold text-center my-2">Report Malware Website</h2>
                <form id="myForm" className="flex flex-col justify-center items-start w-10/12 gap-5 p-5 rounded-2xl">
                    <div className="flex">
                        <div className="second-layer flex flex-wrap">
                            <div className="mx-1">
                                <label class="font-bold text-sm">
                                    Name
                                </label>
                                <div className="inputfield flex text-md items-center bg-white p-2 rounded-md gap-2">
                                    <MdAccountCircle />
                                    <input id="name" type="text" placeholder="Enter Your Name" />
                                </div>
                            </div>
                            <div className="mx-1">
                                <label class="font-bold text-sm">
                                    Website
                                </label>
                                <div className="inputfield flex text-md items-center bg-white p-2 rounded-md gap-2">
                                    <IoMdMail />
                                    <input id="website" type="text" placeholder="Enter Your Website" />
                                </div>
                            </div>
                        </div>
                        <Image src={report} alt="Report Image" width={"200"} />
                    </div>
                    <textarea id="comments" className="w-full h-32 rounded-2xl" placeholder="Add your comments"></textarea>
                    <button type="button" onClick={() => { handleSubmit() }} >Submit</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}