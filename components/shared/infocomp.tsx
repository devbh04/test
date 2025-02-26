import type React from "react"


function InfoCard({ title, text, align }) {
    return (
      <div
        className={`flex items-center gap-6 bg-transparent text-white rounded-xl shadow-lg ${
          align === "right" ? "ml-auto" : "mr-auto"
        }`}
      >
        {align === "left" && (
          <div className={"grid p-8 rounded-xl mr-48 ml-4 border-b-2 border-r-2 border-red-800 shadow-red-800 shadow-sm hover:shadow-red-800 hover:shadow-lg transition-shadow duration-300 ease-in-out"}>
            <div className="flex justify-center text-5xl">{title}</div>
            <div className="flex justify-center text-xl">{text}</div>
          </div>
        )}
        {align === "right" && (
          <div className={"grid p-4 rounded-xl ml-48 mr-4 border-b-2 border-l-2 border-red-800 shadow-red-800 shadow-sm hover:shadow-red-800 hover:shadow-lg transition-shadow duration-300 ease-in-out"}>
            <div className="flex justify-center text-5xl">{title}</div>
            {title === "3rd" ? (
              <>
                <div className="flex justify-center text-xl px-2">Largest CTF</div>
                <div className="flex justify-center text-xl px-2">from India</div>
              </>
            ) : title === "10k+" ? (
              <>
                <div className="flex justify-center text-xl">Hackers Played</div>
                <div className="flex justify-center text-xl">VishwaCTF</div>
              </>
            ) : (
              <div className="flex justify-center text-xl">{text}</div>
            )}
          </div>
        )}
      </div>
    )
  }
  
export default function InfoCards() {
  const cards = [
    {
      title: "5th",
      text: "Edition CTF",
      align: "left" as const,
    },
    {
      title: "3rd",
      text: "Largest CTF from India",
      align: "right" as const,
    },
    {
      title: "100+",
      text: "Countries",
      align: "left" as const,
    },
    {
      title: "10k+",
      text: "Hackers Participated",
      align: "right" as const,
    },
  ]

  return (
    <div className="mt-16 grid justify-center mb-40 p-16">
        <div className="flex flex-col gap-6">
          {cards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
    </div>
  )
}

