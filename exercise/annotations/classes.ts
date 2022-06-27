class Vehicle { 
    constructor(public color: string) {}


    public drive(): void {
        console.log('driveeee')
    }

    protected honk(): void {
        console.log('honkkkk')
    }
}

class Car extends Vehicle {
    drive(): void {
        console.log('vroom')
    }

    startDrivingProcess(): void {
        this.drive;
    }

    startHonkProcess(): void {
        this.honk();
    }
}

const vehicle = new Vehicle('green');
const car = new Car('yellowCar');

vehicle.drive();
car.drive();
car.startHonkProcess();
car.startDrivingProcess();
{variables.bgColorBlack}