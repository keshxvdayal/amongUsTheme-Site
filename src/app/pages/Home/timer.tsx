"use client"

import { useEffect, useState } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 22,
    hours: 18,
    minutes: 36,
    seconds: 20,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((current) => {
        if (current.seconds > 0) {
          return { ...current, seconds: current.seconds - 1 }
        } else if (current.minutes > 0) {
          return { ...current, minutes: current.minutes - 1, seconds: 59 }
        } else if (current.hours > 0) {
          return { ...current, hours: current.hours - 1, minutes: 59, seconds: 59 }
        } else if (current.days > 0) {
          return { ...current, days: current.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return current
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      <div>
        <div className="text-4xl md:text-6xl font-bold">{timeLeft.days}</div>
        <div className="text-orange-500 text-sm">DAYS</div>
      </div>
      <div>
        <div className="text-4xl md:text-6xl font-bold">{timeLeft.hours}</div>
        <div className="text-orange-500 text-sm">HOURS</div>
      </div>
      <div>
        <div className="text-4xl md:text-6xl font-bold">{timeLeft.minutes}</div>
        <div className="text-orange-500 text-sm">MINUTES</div>
      </div>
      <div>
        <div className="text-4xl md:text-6xl font-bold">{timeLeft.seconds}</div>
        <div className="text-orange-500 text-sm">SECONDS</div>
      </div>
    </div>
  )
}

