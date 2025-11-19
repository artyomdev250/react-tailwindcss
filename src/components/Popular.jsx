import { usePopularCars } from '../hooks/usePopularCars';
import { useToggleLike } from '../hooks/useToggleLike';
import Car from './ui/Car';

function Popular() {
    const { cars, setCars } = usePopularCars();
    const { toggleLike } = useToggleLike(cars, setCars);

    return (
        <div className='px-6 pb-9 b-desk:w-[1250px] b-desk:m-auto b-desk:px-0'>
            <div className='flex items-center justify-between mb-6'>
                <p className='font-semibold text-gray-400 text-[15px]'>Popular Car</p>
                <a href="#" className='font-semibold text-blue-600 text-[15px]'>View All</a>
            </div>

            <div className='overflow-auto flex gap-3 lg:grid lg:grid-cols-4'>
                {cars.map((car) => (
                    <Car key={car.id} car={car} toggleLike={toggleLike} />
                ))}
            </div>
        </div>
    );
}

export default Popular;
