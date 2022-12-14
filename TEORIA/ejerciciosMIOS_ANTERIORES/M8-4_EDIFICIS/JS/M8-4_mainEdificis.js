
function mostrar(enla, textoEjercicio) {
    obj = document.getElementById(textoEjercicio);
    obj.style.display = (obj.style.display == 'block') ? 'none' : 'block';
    enla.innerHTML = (enla.innerHTML == '[-]') ? '[+]' : '[-]';
}


const arrayBuildings = [];


function showBuilding(position) {
    console.log("mostrar edificio");
    let show, peopleAssistant, ticketPrice, totalPrice;
    document.getElementById("showMessage").innerHTML = "";
    if (arrayBuildings[position].type === "CINEMA") {
        peopleAssistant = Number(prompt("Introdueix la quantitat d'entrades venudes:"));

        ticketPrice = Number(prompt("Introdueix el preu de l'entrada:"));
        show = arrayBuildings[position].toString(peopleAssistant, ticketPrice);

    } else {
        show = arrayBuildings[position].toString();
        console.log(show);
    }
    document.getElementById("showMessage").innerHTML = "<strong>EDIFICI CONSULTAT:</strong><br><br>";
    document.getElementById("showMessage").innerHTML += show;
}


function registerBuilding(num, newBuilding) {
    console.log("registrar edificio");
    let building, typeBuilding, typeOfBuild;
    let name, floors, surface, type, people, rooms;
    name = newBuilding;

    do {
        typeBuilding = Number(prompt(`Introdueix el tipus d'Edifici:\n \n1 = Hospital \n2 = Hotel \n3 = Cinema \n4 = Cancel·lar`));
        if (isNaN(typeBuilding) || typeBuilding < 1 || typeBuilding > 4) {
            alert(`Has d'introduir: \n1 = Hospital  \n2 = Hotel \n3 = Cinema \n4 = Cancel·lar`)
        }
    } while (isNaN(typeBuilding) || typeBuilding < 1 || typeBuilding > 4);

    if (typeBuilding != 4) {
        do {
            floors = parseInt(prompt("Introdueix el nombre de plantes que té l'Edifici:"));
            if (isNaN(floors)) {
                alert("Has d'introduir el nombre corresponent a les plantes que té l'Edifici!");
            }
        } while (isNaN(floors));
        do {
            surface = Number(prompt("Introdueix la superfície total de l'Edifici':"));
            if (isNaN(surface)) {
                alert("Has d'introduir la superfície total de l'Edifici'!");
            }
        } while (isNaN(surface));
    }
    console.log(typeBuilding);
    switch (typeBuilding) {
        case 1:
            do {
                patients = parseInt(prompt("Introdueix el nombre de pacients que hi ha ingressats a l'Hospital:"));
                if (isNaN(patients)) {
                    alert("Has d'introduir el nombre corresponent als pacients que hi ha a l'Hospital!");
                }
            } while (isNaN(patients));
            building = new Hospital(name, floors, surface, type, patients);
            break;
        case 2:
            do {
                rooms = parseInt(prompt(`Introdueix el nombre d'habitacions que té l'Hotel ${newBuilding}:`));
                if (isNaN(rooms)) {
                    alert("Has d'introduir el nombre corresponent les habitacions de l'Hotel!");
                }
            } while (isNaN(rooms));
            building = new Hotel(name, floors, surface, type, rooms);
            break;
        case 3:
            do {
                capacity = parseInt(prompt(`Introdueix el nombre d'entrades al Cinema ${newBuilding}, venudes per la sessió :`));
                if (isNaN(capacity)) {
                    alert("Has d'introduir el nombre corresponent a les entrades venudes per la sessió!");
                }
            } while (isNaN(capacity));
            building = new Cinema(name, floors, surface, type, capacity);
            break;
        case 4:
            alert("Operació Cancel·lada");

    }
    if (typeBuilding != 4) {
        arrayBuildings.push(building);
        console.log(arrayBuildings);
        let currentBuilding = arrayBuildings.length - 1;
        showBuilding(currentBuilding);
    }
}


function deleteBuilding(action) {
    let buildingToDelete = checkBuilding(action);
    console.log(buildingToDelete);
    document.getElementById("showMessage").innerHTML = "";
    //document.getElementById("showModifies").innerHTML = "";
    let confirmDelete;

    do {
        confirmDelete = prompt(`L'Edifici introduit és ${arrayBuildings[buildingToDelete].name} \nSegur que el vols esborrar?\n0 = No\n1 = Sí`);
        if (confirmDelete != 0 && confirmDelete != 1) {
            alert("Has d'introduir: \n0 = No  \n1 = Sí");
        }
    } while (confirmDelete != 0 && confirmDelete != 1);
    //let typeBuildingToDelete = arrayBuildings[buildingToDelete].type;
    if (confirmDelete == "1") {
        document.getElementById("showModifies").innerHTML = `S'ha donat de baixa l'Hotel ${arrayBuildings[buildingToDelete].name}`;
        arrayBuildings.splice(buildingToDelete, 1);

    } else {
        alert("Operació calcel·lada");
    }
    console.log(arrayBuildings);
}


function checkBuilding(action) {
    let newRegister, show;
    let nameBuilding = prompt("Introdueix el nom de l'Edifici:");
    console.log("nombre edificio:", nameBuilding);
    let foundBuilding = arrayBuildings.find(foundBuilding => foundBuilding.name === nameBuilding);
    let positionBuilding = arrayBuildings.indexOf(foundBuilding);

    console.log("foundBuilding", foundBuilding, positionBuilding);

    if (positionBuilding === -1) {
        console.log("hola");
        do {
            newRegister = prompt(`EDIFICI NOU!! \nEl vols enregistrar?\n 1 = Sí \n 2 = No`);
            //let check = false;
            if (isNaN(newRegister) || newRegister < 1 || newRegister > 2) {
                alert("Has d'introduir: \n 1 = Sí \n 2 = No");
            }
        } while (isNaN(newRegister) || newRegister < 1 || newRegister > 2);
        console.log(newRegister);

        if (newRegister == 1) {
            registerBuilding(action, nameBuilding);
        }

    } else {
        alert("Aquest edifici ja està enregistrat!");
        console.log("edifici:", foundBuilding);
        show = toString(foundBuilding);
        console.log(show);
        console.log(foundBuilding, positionBuilding);
        showBuilding(positionBuilding);
        if (action === 3 || action === "modify") {
            return (positionBuilding);
        }
    }
}



function beginBuilds() {
    let building, nuevoNombre;
    building = new Hospital("Hospital de Vilafranca", 2, 1950, "HOSPITAL", 26);
    arrayBuildings.push(building);
    building = new Hospital("Hospital General de Catalunya", 10, 25350, "HOSPITAL", 315);
    arrayBuildings.push(building);
    building = new Cinema("Cinema Montecarlo", 1, 3180, "CINEMA", 320);
    arrayBuildings.push(building);
    building = new Cinema("Cinema Principal", 2, 12450, "CINEMA", 150);
    arrayBuildings.push(building);
    building = new Hotel("Hotel Hilton", 22, 73858, "HOTEL", 583);
    arrayBuildings.push(building);

    // nuevoNombre = document.getElementById("hotelBuscar").value;
    // console.log(nuevoNombre);
    // hoteles[0].setNombreHotel(nuevoNombre);

}

window.onload = function () {
    console.log(beginBuilds());
    console.log(arrayBuildings);
}

