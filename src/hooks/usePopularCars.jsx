import { useState } from "react";

export function usePopularCars() {
    const [cars, setCars] = useState([
        {
            id: 1,
            name: "Koenigsegg",
            type: "Sport",
            image: "/popular/p1.png",
            fuel: "90L",
            transmission: "Manual",
            capacity: "2",
            price: 99,
            liked: false,
        },
        {
            id: 2,
            name: "Nissan GT - R",
            type: "Sport",
            image: "/popular/p2.png",
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
            image: "/popular/p3.png",
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
            image: "/popular/p2.png",
            fuel: "80L",
            transmission: "Manual",
            capacity: "2",
            price: 80,
            liked: false,
        }
    ]);

    return { cars, setCars };
}
