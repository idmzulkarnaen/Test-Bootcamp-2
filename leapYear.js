function leapYear(firstYear, lastYear) {
    
    const leapyear = lastYear - firstYear;

    let tempYear = firstYear
    let result = ""

    for (let i = 0; i < leapyear; i += 4) {
        result += tempYear+4 + ', '
        tempYear = tempYear + 4
    }

    // return result;
    let dataResult = result.slice(0, -2)

    return dataResult
}
console.log(leapYear(1900, 2020));