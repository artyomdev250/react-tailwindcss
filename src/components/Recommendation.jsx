import { useToggleLike } from "../hooks/useToggleLike";
import { useRecommendationCars } from "../hooks/useRecommendationCars";
import RecommendationCar from "./ui/RecommendationCar";

function Recommendation() {
    const { cars, setCars } = useRecommendationCars();
    const { toggleLike } = useToggleLike(cars, setCars);

    return (
        <div className='px-6 pb-18 b-desk:w-[1250px] b-desk:m-auto b-desk:px-0'>
            <div className='flex items-center justify-between mb-6'>
                <p className='font-semibold text-gray-400 text-[15px]'>Recomendation Car</p>
            </div>

            <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4'>
                {cars.map((car) => (
                    <RecommendationCar key={car.id} car={car} toggleLike={toggleLike} />
                ))}
            </div>
        </div>
    )
}

export default Recommendation