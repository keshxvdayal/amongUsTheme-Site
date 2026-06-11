'use client'
import React, { useState } from "react";
import redguy from "@/app/assets/FAQ/redguy.png";
import greenguy from "@/app/assets/FAQ/greenguy.png";
import blueguy from "@/app/assets/FAQ/Blueguy.png";
import PinkGuy from "@/app/assets/FAQ/pinkguy.png";
import Yellowguy from "@/app/assets/FAQ/yellow guy.png";
import lightblueguy from "@/app/assets/FAQ/lightblueguy.png";
import Image from "next/image";

const faqs = [
    {
        guy: { name: "Red", logo: redguy },
        question: "When is hackathon?", 
        answer: "The hackathon is scheduled at 7th-9th October.", 
        color: "bg-red-600"
    },
    { 
        guy: { name: "Green", logo: greenguy },
        question: "Who can participate?", 
        answer: "Anyone with an interest in technology can participate.", 
        color: "bg-green-600"
    },
    { 
        guy: { name: "Blue", logo: blueguy },
        question: "Is accommodation and travel given?", 
        answer: "Yes, accommodation and travel reimbursements are provided.", 
        color: "bg-blue-600"
    },
    { 
        guy: { name: "Pink", logo: PinkGuy },
        question: "Is Wi-Fi available?", 
        answer: "Yes, high-speed Wi-Fi will be available for all participants.", 
        color: "bg-[#FF6EEC]"
    },
    { 
        guy: { name: "Yellow", logo: Yellowguy },
        question: "What’s the registration deadline?", 
        answer: "The deadline for registration is the end of this month.", 
        color: "bg-yellow-600"
    },
    { 
        guy: { name: "light", logo: lightblueguy },
        question: "Is there any kind of participation fees?", 
        answer: "No, participation is completely free.", 
        color: "bg-blue-500"
    },
];

const FAQPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="min-h-screen flex flex-col items-center text-white relative overflow-hidden px-4 sm:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl mt-16 font-bold mb-8 bg-gradient-to-r from-purple-500 via-violet-500 to-blue-400 text-transparent bg-clip-text text-center">
                Frequently Asked Questions
            </h1>

            <div className="mt-8 w-full max-w-2xl">
                {faqs.map(({ question, answer, color, guy }, index) => (
                    <div key={index} className="mb-4">
                        <div
                            className={`p-4 rounded-2xl ${color} flex items-center rounded-2xl justify-between cursor-pointer bg-opacity-75 transition-all duration-300 ease-in-out relative`}
                            onClick={() => setOpenIndex(index === openIndex ? null : index)}
                        >
                            {guy && (
                                <Image 
                                    src={guy.logo} 
                                    alt={guy.name} 
                                    width={70} 
                                    height={70} 
                                    className="absolute left-4 sm:left-6"
                                />
                            )}
                            <span className="flex-grow ml-20 sm:ml-32  font-semibold text-lg sm:text-xl">
                                {question}
                            </span>
                            <span className={`text-xl transform transition-transform duration-300 ease-in-out ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                ▲
                            </span>
                        </div>
                        <div 
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'}`} 
                        >
                            <div className="p-4 bg-gray-800 rounded-2xl text-white mt-2 text-base sm:text-lg">
                                {answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQPage;
