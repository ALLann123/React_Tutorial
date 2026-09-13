function dateInfo(dat) {
    const d = dat.getDate();
    const m = dat.getMonth() + 1;
    const y = dat.getFullYear();

    return [d, m, y];
}


//
const [date, month, year] = dateInfo(new Date());

console.log(`Date: ${date}`);
console.log(`Month: ${month}`);
console.log(`Year: ${year}`);

/*
Destructing_Arrays>node examp_1.js
Date: 10
Month: 9
Year: 2026

*/