"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import webforge from "../../assets/logo.png"
import scroll from "../../assets/scroll.png"
import p1 from "../../assets/thumbnail.png"
import { useEffect, useState, useMemo } from "react"

const getTimeLeft = (targetDate: Date) => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime(); // in ms

    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
};


const BentoGrid = () => {

    const targetDate = useMemo(() => new Date('2025-04-17T00:00:00'), []); // Set your target time here
    const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(() => {
                const updated = getTimeLeft(targetDate);
                return updated;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);
    return (
        <main className="min-h-screen text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 py-8 relative">
                {/* Header */}
                <header className="mb-2 mr-20 text-center">
                    <h1 className="text-[12px]  md:text-2xl font-bold text-[#FF0000]">THE ULTIMATE 48-HOURS HACKATHON!</h1>
                </header>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Hero Section - Spans 2 columns */}
                    <div className="col-span-1 md:col-span-2 row-span-2">
                        <Card className="bg-gray-900/60 backdrop-blur-sm overflow-hidden relative">
                            <Image
                                src={p1}
                                alt="Hackathon Character"
                                width={200}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                            <a href="">
                                <Button className="absolute bottom-6 left-6 bg-[#3cff00] rounded-2xl hover:border-2 hover:border-[#3cff00] hover:bg-[#000] text-black hover:text-[#3cff00] text-xl px-8 py-6">
                                    Register
                                </Button>
                            </a>
                        </Card>
                    </div>

                    {/* Countdown Timer */}
                    <Card className="bg-gray-900/60 backdrop-blur-sm p-2 flex flex-col justify-center text-center">
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">EVENT STARTING IN</h2>
                        <p className="text-purple-400 mb-4">Dont miss out on this opportunity</p>
                        <div className="flex space-x-4 justify-center text-center">
                            {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
                                <div key={index}>
                                    <div className="text-4xl font-bold">{timeLeft[unit as keyof typeof timeLeft] ?? 0}</div>
                                    <div className="text-orange-500 text-sm">{unit.toUpperCase()}</div>
                                </div>

                            ))}
                        </div>
                    </Card>

                    {/* Prize Pool */}
                    <Card className="bg-gray-900/60 backdrop-blur-sm flex flex-col justify-center text-center">
                        <h2 className="text-4xl font-bold text-[#FF00DD] mb-3">PRIZE POOL</h2>
                        <p className="text-3xl md:text-6xl font-bold">4,00,000+</p>
                    </Card>

                    {/* Registrations */}
                    <Card className="bg-gray-900/60 backdrop-blur-sm p-6 flex flex-col justify-center text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">REGISTRATIONS</h2>
                        <p className="text-4xl md:text-3xl font-bold">2200+</p>
                    </Card>

                    {/* Location */}
                    <Card className="bg-gray-900/60 backdrop-blur-sm p-6 flex flex-col justify-center text-center">
                        <h2 className="text-4xl font-bold text-[#00FF84] mb-4">LOCATION</h2>
                        <p className="text-2xl font-bold">Microsoft, Gurgaon</p>
                    </Card>

                    {/* Organized By */}
                    <Card className="bg-gray-900/60 backdrop-blur-sm p-6 flex flex-col justify-center text-center">
                        <h2 className="text-2xl font-bold text-purple-500 mb-4">ORGANISED BY</h2>
                        <div className="flex justify-center">
                            <Image
                                src={webforge}
                                alt="Webforge Logo"
                                width={150}
                                height={150}
                                className="rounded-lg"
                            />
                        </div>
                    </Card>
                </div>

                <div className="flex justify-center md:justify-end mt-12">
                    <div className="animate-bounce">
                        <Image src={scroll} alt="Scroll Down" width={100} height={100} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BentoGrid
