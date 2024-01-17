import feedback from "../images/feedback.svg";
import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineSensorOccupied } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaBuildingUser } from "react-icons/fa6";
import { useState } from "react";
import StarRatings from 'react-star-ratings';
import { supabase } from "../supabase";
import emailjs from "@emailjs/browser";

export default function Feedback() {
    const [rating, setRating] = useState(2);
    const changeRating = (newRating) => {
        setRating(newRating);
    }

    const handleSubmit = async () => {
        const name = document.getElementById("name").value;
        const occupation = document.getElementById("occupation").value;
        const service = document.getElementById("service").value;
        const email = document.getElementById("email").value;
        const company = document.getElementById("company").value;
        const rating = document.getElementById("rating");
        const comments = document.getElementById("comments").value;
        const { data, error } = await supabase
            .from('FeedbackForm')
            .insert([
                { name: name, occupation: occupation, service: service, email: email, company: company, rating: rating, comments: comments },
            ])
            .then(() => {
                emailjs.send(process.env.NEXT_PUBLIC_EMAIL_SERVICE, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE, {
                    name: name,
                    occupation: occupation,
                    service: service,
                    email: email,
                    company: company,
                    rating: rating,
                    comments: comments
                }, process.env.NEXT_PUBLIC_EMAIL_KEY)
                    .then(function (response) {
                        
                    }, function (error) {
                        console.log('FAILED...', error);
                    });
                document.getElementById("myForm").reset();
            })
            .then(error => {
                console.log(error);
                document.getElementById("myForm").reset();
            })
    }
    return (
        <div className="feedback-container flex !h-11/12">
            <div className="feedback-div flex-wrap !h-9/12">
                <div className="justify-center flex flex-col w-5/12">
                    <Image src={feedback} alt="Feedback Image" width="40%" />
                    <h3 className="text-2xl font-bold">Shape the Future: Your Voice Our Evolution</h3>
                </div>
                <form id="myForm" className="flex flex-col justify-center items-start w-6/12 gap-5 p-5 rounded-2xl">
                    <div className="">
                        <label className="font-bold text-sm">
                            Name
                        </label>
                        <div className="inputfield flex text-md items-center bg-white p-2 rounded-md gap-2">
                            <MdAccountCircle />
                            <input id="name" type="text" placeholder="Enter Your Name" required />
                        </div>
                    </div>
                    <div className="second-layer flex">
                        <div className="mx-1">
                            <label class="font-bold text-sm">
                                Occupation
                            </label>
                            <div className="inputfield flex text-md items-center bg-white p-2 rounded-md gap-2">
                                <MdOutlineSensorOccupied />
                                <input id="occupation" type="text" placeholder="Enter Your Occupation" required />
                            </div>
                        </div>
                        <div className="mx-1">
                            <label class="font-bold text-sm">
                                Service
                            </label>
                            <div className="inputfield flex text-md items-center bg-white p-2 rounded-md gap-2">
                                <FaBuilding />
                                <input id="service" type="text" placeholder="Enter Your Service" required />
                            </div>
                        </div>
                    </div>
                    <div className="third-layer flex">
                        <div className="mx-1">
                            <label class="font-bold text-sm">
                                Email Address
                            </label>
                            <div className="inputfield flex text-md items-center bg-white p-2 rounded-md gap-2">
                                <IoMdMail />
                                <input id="email" type="email" placeholder="Enter Your Email" required />
                            </div>
                        </div>
                        <div className="mx-1">
                            <label class="font-bold text-sm">
                                Company
                            </label>
                            <div className="inputfield flex text-md items-center bg-white p-2 rounded-md gap-2">
                                <FaBuildingUser />
                                <input id="company" type="company" placeholder="Enter Your company" required />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label class="font-bold text-sm">Share your experience in scaling</label>
                        <StarRatings
                            rating={rating}
                            starRatedColor="#57007B"
                            starHoverColor="#57007B"
                            changeRating={changeRating}
                            numberOfStars={5}
                            name='rating'
                            starDimension="30px"
                        />
                    </div>
                    <textarea id="comments" className="w-full h-32 rounded-2xl" placeholder="Add your comments"></textarea>
                    <button type="button" onClick={() => { handleSubmit() }} >Submit</button>
                </form>
            </div>
        </div>
    )
}