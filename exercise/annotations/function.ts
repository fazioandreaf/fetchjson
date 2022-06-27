const add = (a: number, b: number): number => {
    return a + b
}

const divide = (a: number, b: number): number => {
    return a / b
}

const substract = (a: number, b: number): number => {
    return a - b
}

const multiply = (a: number, b: number): number => {
    return a * b
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
}

logWeather(forecast)