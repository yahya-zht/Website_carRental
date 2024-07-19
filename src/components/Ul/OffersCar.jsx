import React from "react";
import CarItem from "../Cards/CarItem";
import "../../styles/offerscar.css";
import img1 from "../../assets/image/car_21.png";
import img2 from "../../assets/image/car_18.png";
const OffersCar = () => {
    const car = {
        id: 1,
        brand: "Tesla",
        rating: 123,
        CarName: "Tesla Malibu",
        imageCar: img1,
        model: "Model 1",
        price: 50,
        speed: "180Kmpl",
        gps: "GPS Navigation",
        seatType: "Heated seats",
        automatic: "Automatic",
        number_of_passengers: 5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam corporis velit dolor mollitia",
    };
    return (
        <div id="cars-items">
            <p className="text-warning fs-3 fw-bolder text-center m-0">Come with</p>
            <p className="text-welcome fs-1 fw-bolder text-center mb-3">Hot Offers</p>
            <div className="row cars-item">
                <CarItem
                    class="col border p-4"
                    img={car.imageCar}
                    title={car.CarName}
                    price={car.price}
                    model={car.model}
                    auto={car.automatic}
                    kmpl={car.speed}
                    details={car.id}
                    rent={car.CarName}
                />
                <CarItem
                    class="col border p-4 car-2"
                    img={car.imageCar}
                    title={car.CarName}
                    price={car.price}
                    model={car.model}
                    auto={car.automatic}
                    kmpl={car.speed}
                    details={2}
                    rent={car.CarName}
                />
                <CarItem
                    class="col border p-4"
                    img={img2}
                    title={car.CarName}
                    price={car.price}
                    model={car.model}
                    auto={car.automatic}
                    kmpl={car.speed}
                    details={car.id}
                    rent={car.CarName}
                />
            </div>
            <div className="row cars-item my-3">
                <CarItem
                    class="col border p-4"
                    img={img2}
                    title={car.CarName}
                    price={car.price}
                    model={car.model}
                    auto={car.automatic}
                    kmpl={car.speed}
                    details={car.id}
                    rent={car.CarName}
                />
                <CarItem
                    class="col border p-4 car-2"
                    img={car.imageCar}
                    title={car.CarName}
                    price={car.price}
                    model={car.model}
                    auto={car.automatic}
                    kmpl={car.speed}
                    details={car.id}
                    rent={car.CarName}
                />
                <CarItem
                    class="col border p-4"
                    img={img2}
                    title={car.CarName}
                    price={car.price}
                    model={car.model}
                    auto={car.automatic}
                    kmpl={car.speed}
                    details={car.id}
                    rent={car.CarName}
                />
            </div>
        </div>
    );
};

export default OffersCar;
