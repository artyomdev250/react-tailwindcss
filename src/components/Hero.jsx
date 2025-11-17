import React, { useState } from "react";

function Hero() {
    const [cards] = useState([
        {
            id: 1,
            bgColor: "bg-blue-400",
            bgImage: "/BG.png",
            title: "The Best Platform for Car Rental",
            text: "Ease of doing a car rental safely and reliably. Of course at a low price.",
            btnColor: "bg-blue-600",
            carImage: "/Car.png",
            hiddenOnMobile: false,
        },
        {
            id: 2,
            bgColor: "bg-blue-600",
            bgImage: "/BG2.png",
            title: "Easy Way To Rent a Car At a Low Price",
            text: "Providing cheap car rental services and safe and comfortable facilities.",
            btnColor: "bg-blue-400",
            carImage: "/Car2.png",
            hiddenOnMobile: true,
        },
    ]);

    return (
        <div className="mx-[24px] my-[32px] text-white lg:grid lg:grid-cols-2 lg:gap-[24px] max-w-full b-desk:max-w-[1250px] b-desk:mx-auto">
            {cards.map(card => (
                <div
                    key={card.id}
                    className={`
                        ${card.bgColor}
                        p-[24px] rounded-[10px] relative overflow-hidden
                        ${card.hiddenOnMobile ? "hidden lg:block mt-[20px] lg:mt-0" : ""}
                    `}
                    style={{
                        backgroundImage: `url('${card.bgImage}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <p className="text-[18px] font-medium relative z-10 md:text-[30px] md:max-w-[300px] md:leading-[40px]">
                        {card.title}
                    </p>

                    <p className="mt-[12px] mb-[24px] max-w-[300px] text-[14px] relative z-10 md:text-[16px]">
                        {card.text}
                    </p>

                    <button
                        className={`px-[28px] py-[14px] text-[14px] font-semibold cursor-pointer rounded-[10px] relative z-10 ${card.btnColor}`}
                    >
                        Rental Car
                    </button>

                    <img
                        src={card.carImage}
                        alt="car"
                        className="mt-[26px] relative z-10"
                    />
                </div>
            ))}
        </div>
    );
}

export default Hero;
