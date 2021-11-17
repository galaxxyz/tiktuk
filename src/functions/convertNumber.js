const convertNumber = (number) => {
    if (number < 1000) return number;
    if (number >= 1000 && number < 100000) return Math.round(number / 1000) + "." + Math.round(number / 100) % 10 + "k";
    if (number >= 100000 && number < 1000000) return Math.round(number / 1000) + "k";
    if (number >= 1000000) return Math.round(number / 1000000) + "." + Math.round(number / 100000) % 10 + "M";
}

export { convertNumber };