import feedback from "../images/feedback.svg";
import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineSensorOccupied } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaBuildingUser } from "react-icons/fa6";
import { useState } from "react";
import StarRatings from 'react-star-ratings';

export default function Feedback() {
    const [rating, setRating] = useState(2);
    const changeRating = (newRating) => {
        setRating(newRating);
    }
    return (
        <div className="feedback-container flex !h-11/12">
            <div className="feedback-div flex-wrap !h-9/12">
                <div className="justify-center flex flex-col w-5/12">
                    <Image src={feedback} alt="Feedback Image" width="40%" />
                    <h3 className="text-2xl font-bold">Shape the Future: Your Voice Our Evolution</h3>
                </div>
                <form className="flex flex-col justify-center items-start w-6/12 gap-5 p-5 rounded-2xl">
                    <div className="">
                        <label className="font-bold text-sm">
                            Name
                        </label>
                        <div className="inputfield flex text-md items-center bg-white p-2 rounded-md gap-2">
                            <MdAccountCircle />
                            <input type="text" placeholder="Enter Your Name" />
                        </div>
                    </div>
                    <div className="second-layer flex">
                        <div className="mx-1">
                            <label class="font-bold text-sm">
                                Occupation
                            </label>
                            <div className="inputfield flex text-md items-center bg-white p-2 rounded-md gap-2">
                                <MdOutlineSensorOccupied />
                                <input type="text" placeholder="Enter Your Name" />
                            </div>
                        </div>
                        <div className="mx-1">
                            <label class="font-bold text-sm">
                                Service
                            </label>
                            <div className="inputfield flex text-md items-center bg-white p-2 rounded-md gap-2">
                                <FaBuilding />
                                <input type="text" placeholder="Enter Your Name" />
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
                                <input type="text" placeholder="Enter Your Name" />
                            </div>
                        </div>
                        <div className="mx-1">
                            <label class="font-bold text-sm">
                                Company
                            </label>
                            <div className="inputfield flex text-md items-center bg-white p-2 rounded-md gap-2">
                                <FaBuildingUser />
                                <input type="text" placeholder="Enter Your Name" required />
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
                    <textarea className="w-full h-32 rounded-2xl" placeholder="Add your comments"></textarea>
                    <input type="submit" style={{  }} />
                </form>
            </div>
        </div>
    )
}