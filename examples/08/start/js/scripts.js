function multiply(number, multiplyBy = 2) {

    // multiplyBy = multiplyBy || 2;
    // multiplyBy = multiplyBy === undefined ? 2 : multiplyBy;

    return number * multiplyBy;

}

function getCountryCode(country, code = country.toUpperCase().slice(0, 3)) {
    console.log("Wykonuje f-cje getCountryCode");

    return {
        country,
        code
    };
}

function getCountryInfo(countryInfo = getCountryCode("Polska")) {
    return "Państwo to " + countryInfo.country + ", a jego kod to " + countryInfo.code;
}
