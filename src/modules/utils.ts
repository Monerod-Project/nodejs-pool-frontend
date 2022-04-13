export const website = "https://monerod.org/"
//apiUrl: Make sure there's a / at the end.
export const apiUrl = "https://np-api.monerod.org/"
export const minPay = 0.001

export const abbreviateNumber = (number: number): string => {
    const SI_SYMBOL = [" H/s", " KH/s", " MH/s", " GH/s", " TH/s", " PH/s", " EH/s"];

    // what tier? (determines SI symbol)
    const tier = Math.log10(Math.abs(number)) / 3 | 0;

    //if(tier === 0) return number.toString() + " h/s";

    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);

    // scale the number
    const scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(2) + suffix;
}