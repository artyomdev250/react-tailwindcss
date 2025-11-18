export function useToggleLike(cars, setCars) {
    const toggleLike = (id) => {
        setCars((prev) =>
            prev.map((car) =>
                car.id === id ? { ...car, liked: !car.liked } : car
            )
        );
    };

    return { toggleLike };
}
