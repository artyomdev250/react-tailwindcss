import { useState } from "react";

export function useRecommendationCars() {
    const [cars, setCars] = useState([
        {
            id: 1,
            name: "All New Rush",
            type: "SUV",
            image: "/recommendation/r1.png",
            fuel: "70L",
            transmission: "Manual",
            capacity: "6",
            price: 72,
            liked: false,
        },
        {
            id: 2,
            name: "Nissan GT - R",
            type: "Sport",
            image: "/recommendation/r2.png",
            fuel: "80L",
            transmission: "Manual",
            capacity: "2",
            price: 80,
            liked: false,
        },
        {
            id: 3,
            name: "Rolls - Royce",
            type: "Sedan",
            image: "/recommendation/r3.png",
            fuel: "70L",
            transmission: "Manual",
            capacity: "4",
            price: 96,
            liked: false,
        },
        {
            id: 4,
            name: "Nissan GT - R",
            type: "Sport",
            image: "/recommendation/r4.png",
            fuel: "80L",
            transmission: "Manual",
            capacity: "2",
            price: 80,
            liked: false,
        },
        {
            id: 5,
            name: "Nissan GT - R",
            type: "Sport",
            image: "/recommendation/r5.png",
            fuel: "80L",
            transmission: "Manual",
            capacity: "2",
            price: 80,
            liked: false,
        }
    ]);

    return { cars, setCars };
}
