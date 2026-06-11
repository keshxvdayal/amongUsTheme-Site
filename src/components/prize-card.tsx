interface PrizeCardProps {
    amount: string
    domainPeriod: string
    premiumPeriod: string
    className?: string
  }
  
  export function PrizeCard({ amount, domainPeriod, premiumPeriod, className = "" }: PrizeCardProps) {
    return (
      <div className={`bg-black/80 rounded-lg p-6 text-white shadow-lg backdrop-blur-sm ${className}`}>
        <div className="space-y-2">
          <div className="flex items-baseline gap-1">
            <span className="text-[#ff3131] text-2xl font-bold">₹{amount}</span>
            <span className="text-xl font-bold">CASH</span>
          </div>
          <div className="space-y-1">
            <p>
              <span className="text-[#f0a500]">.XYZ</span> Domain For {domainPeriod}
            </p>
            <p>
              CodeCrafter
              <br />
              <span className="text-[#ff69b4]">Premium</span> For {premiumPeriod}
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  