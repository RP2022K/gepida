/*
* File: app.js
* Author: Gyüre Árpád
* Copyright: 2023, Gyüre Árpád
* Group: Szoft I-1-E
* Date: 2023-03-12
* Github: https://github.com/rp2022k/gepida
* Licenc: GNU GPL
*/

const bicycleBody =document.querySelector("#bicycleBody");
const bicycleFoot =document.querySelector("#bicycleFoot");

const gepidaArray = [
    {name: "Cassis", wheel: 28, usage: "offroad", price: 557900},
    {name: "Alboin 900", wheel: 28, usage: "trekking", price: 519900},
    {name: "Asgard", wheel: 29, usage: "technikás utak", price: 519900},
    {name: "Ruga", wheel: 29, usage: "hegyi", price: 372900},
    {name: "Reptila", wheel: 28, usage: "városi", price: 308900},
    {name: "Sirmium", wheel: 29, usage: "hegyi", price: 264900}
]

function loadTable(){
    gepidaArray.forEach((bikeType) => {
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdWheel = document.createElement('td');
        let tdUsage = document.createElement('td');
        let tdPrice = document.createElement('td');

        tdName.textContent = bikeType.name;
        bicycleBody.append(tr);
        tr.append(tdName);

        tdWheel.textContent = bikeType.wheel;
        bicycleBody.append(tr);
        tr.append(tdWheel);

        tdUsage.textContent = bikeType.usage;
        bicycleBody.append(tr);
        tr.append(tdUsage);

        tdPrice.textContent = bikeType.price;
        bicycleBody.append(tr);
        tr.append(tdPrice);
    })
}

loadTable();