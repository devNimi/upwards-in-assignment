// to calculate emi
export function calculateEmi(data: {amount: number, interest: number, duration: number}) : number {
    const { amount, interest, duration } = data;
    const rate = interest / (12 * 100);
    const emi = (amount * rate * Math.pow((1 + rate), duration)) / (Math.pow((1 + rate), duration) - 1);
    // TODO optimize the logic
    return emi ? (emi === Infinity) ? 0 : Math.round(emi) : 0;
}

export function checkProperties(obj) {
    for (var key in obj) {
        if (obj[key] === null || obj[key] === "")
            return false;
    }
    return true;
}