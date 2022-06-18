export const Random = (min:number = 0, max:number = Infinity) => {
    return Math.round(Math.random() * (max - min)) + min
}
