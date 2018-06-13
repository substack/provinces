#!/usr/bin/env node

const { writeFileSync, existsSync, mkdirSync } = require('fs');
const { resolve } = require('path');

const outputFolder = resolve(__dirname, '..', 'countries');

// make sure the countries folder exists
if (!existsSync(outputFolder)) {
    mkdirSync(outputFolder);
}

function writeCountry(countryCode, provinces) {
    const countryFile = resolve(
        outputFolder, 
        `${countryCode.toLowerCase()}.json`,
    );
    writeFileSync(countryFile, JSON.stringify(provinces));
    console.log(`exported ${provinces.length} provinces to ${countryFile}`);
}

// read the input file
const data = require('../provinces.json');

const countriesMap = data.reduce((result, {country, ...entry}) => ({
    ...result,
    [country]: [...(result[country] || []), entry]
}), {});


Object
    .keys(countriesMap)
    .forEach(country => writeCountry(country, countriesMap[country]));

// add file with a list of countries
const countryCodes = Object.keys(countriesMap)
    .map(countryCode => countryCode.toLowerCase());
const listFile = resolve(__dirname, '..', 'countries.json');
writeFileSync(listFile, JSON.stringify(countryCodes));
