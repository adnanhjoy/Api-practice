const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}

const displayCountry = countries => {
    const displayCountry = document.getElementById('display-country');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
            <h4>Country: ${country.name.common}</h4>
            <h4>Capital: ${country.capital}</h4>
            <button onclick="buttonDetail('${country.cca2}')">See Details</button>
        `;
        displayCountry.appendChild(div)
    });
}

const buttonDetail = (code) => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then(res => res.json())
        .then(data => displayCountryDetail(data))
}
const displayCountryDetail = countries => {
    const countryDetail = document.getElementById('country-detail');
    countries.forEach(country => {
        // const div = document.createElement('div');
        countryDetail.innerHTML = `
            <img src="${country.flags.png}">
        `;
        // countryDetail.appendChild(div)
    })
}
loadCountry()