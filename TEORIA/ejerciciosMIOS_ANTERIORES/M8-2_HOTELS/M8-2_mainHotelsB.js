const arrayHotels = [];  //Se define el Array de hoteles donde se van a pushear las entradas.


function showHotel(position) {
    document.getElementById("showMessage").innerHTML = "";
    document.getElementById("showModifies").innerHTML = "";

    //let maintenanceCost = Hotel.calcularManteniment();
    //console.log(newHotel, maintenanceCost);
    let show = arrayHotels[position].toString();
    console.log(show);

    document.getElementById("showMessage").innerHTML = "<strong>HOTEL CONSULTAT:</strong><br><br>";
    document.getElementById("showMessage").innerHTML += show;
}


function registerHotel(newHotel) {
    let nameHotel, numberRooms, numberFloors, surface;
    nameHotel = newHotel;
    //nameHotel = prompt("Introdueix el nom de l'Hotel:");

    do {
        numberRooms = parseInt(prompt("Introdueix el nombre d'habitacions que té l'Hotel:"));
        if (isNaN(numberRooms)) {
            alert("Has d'introduir el nombre corresponent a les habitacions!");
        }
    } while (isNaN(numberRooms));

    do {
        numberFloors = parseInt(prompt("Introdueix el nombre de plantes que té l'Hotel:"));
        if (isNaN(numberFloors)) {
            alert("Has d'introduir el nombre corresponent a les plantes de l'Hotel!");
        }
    } while (isNaN(numberFloors));

    do {
        surface = Number(prompt("Introdueix la superfície total de l'Hotel:"));
        if (isNaN(surface)) {
            alert("Has d'introduir la superfície total de l'Hotel!");
        }
    } while (isNaN(surface));

    let hotel = new Hotel(nameHotel, numberRooms, numberFloors, surface);
    arrayHotels.push(hotel);
    console.log(arrayHotels);
    let lastHotel = arrayHotels.length - 1;
    showHotel(lastHotel);
}


function modifyHotel() {
    let hotelToModify = checkHotel("modify");
    let confirmModification;
    let newValue;
    document.getElementById("showMessage").innerHTML = "";

    do {
        confirmModification = Number(prompt(`L'Hotel introduit és ${arrayHotels[hotelToModify].getNameHotel} \nQuin paràmetre vols modificar?\n
        \n1 = Nom de l'Hotel \n2 = Nombre d'habitacions \n3 = Nombre de plantes \n4 = Superfície \n5 = Cancel·lar`));

        if (isNaN(confirmModification) || confirmModification < 1 || confirmModification > 5) {
            alert(`Has d'introduir: \n1 = Nom de l'Hotel \n2 = Nombre d'habitacions \n3 = Nombre de plantes \n4 = Superfície \n5 = Cancel·lar`)
        }
    } while (isNaN(confirmModification) || confirmModification < 1 || confirmModification > 5);

    switch (confirmModification) {
        case 1:
            newValue = prompt("Introdueix el nom nou de l'Hotel:");
            arrayHotels[hotelToModify].nameHotel = newValue;
            showMessage = `S'ha modificat el nom de l'Hotel ${hotelToModify} a ${newValue}!!!`;
            break;
        case 2:
            newValue = prompt("Introdueix el nombre nou d'habitacions de l'Hotel:");
            arrayHotels[hotelToModify].numberRooms = newValue;
            showMessage = `S'ha modificat el nombre d'habitacions de l'Hotel a ${newValue} habitacions!!!`;
            break;
        case 3:
            newValue = prompt("Introdueix el nombre nou de plantes de l'Hotel:");
            arrayHotels[hotelToModify].numberFloors = newValue;
            showMessage = `S'ha modificat el nombre de plantes de l'Hotel a ${newValue} plantes!!!`;
            break;
        case 4:
            newValue = prompt("Introdueix la nova superfíce de l'Hotel:");
            arrayHotels[hotelToModify].surface = newValue;
            showMessage = `S'ha modificat la superfície de l'Hotel a ${newValue}m²!!!`;
            break;
        default:
            showMessage = "Operació Cancel·lada";
    }
    document.getElementById("showModifies").innerHTML = showMessage;
    showHotel(hotelToModify);
}


function deleleHotel() {
    let hotelToDelete = checkHotel("delete");
    document.getElementById("showMessage").innerHTML = "";
    document.getElementById("showModifies").innerHTML = "";
    let confirmDelete;

    do {
        confirmDelete = prompt(`L'Hotel introduit és ${arrayHotels[hotelToDelete].nameHotel} \nSegur que el vols esborrar?\n0 = No\n1 = Sí`);
        if (confirmDelete != 0 && confirmDelete != 1) {
            alert("Has d'introduir: \n0 = No  \n1 = Sí");
        }
    } while (confirmDelete != 0 && confirmDelete != 1);

    if (confirmDelete == "1") {
        document.getElementById("showModifies").innerHTML = `S'ha donat de baixa l'Hotel ${arrayHotels[hotelToDelete].nameHotel}`;
        arrayHotels.splice(hotelToDelete, 1);

    } else {
        alert("Operació calcel·lada");
    }
    console.log(arrayHotels);
}

function ListHotel() {
    document.getElementById("showMessage").innerHTML = "";
    document.getElementById("showModifies").innerHTML = "";
    let count = arrayHotels.length;
    document.getElementById("showMessage").innerHTML = "ELS HOTELS ENREGISTRATS SÓN: <br>"

    for (i = 0; i < count; i++) {
        let currentHotel = arrayHotels[i].getNameHotel() + "<br>"
        console.table(currentHotel);
        document.getElementById("showMessage").innerHTML += "Hotel " + currentHotel;
    }
}


function checkHotel(action) {
    let nameHotelUser = "", newRegister;
    nameHotelUser = prompt("Introdueix el nom de l'Hotel:");
    console.log("nombre hotel:", nameHotelUser);
    let foundHotel = arrayHotels.find(foundHotel => foundHotel.nameHotel === nameHotelUser);
    let positionHotel = arrayHotels.indexOf(foundHotel);

    console.log(foundHotel, positionHotel);

    if (typeof foundHotel == "undefined") {
        do {
            newRegister = prompt(`HOTEL NOU!! \nEl vols enregistrar?\n 1 = Sí \n 2 = No`);
            //let check = false;
            if (isNaN(newRegister) || newRegister < 1 || newRegister > 2) {
                alert("Has d'introduir: \n 1 = Sí \n 2 = No");
            }
        } while (isNaN(newRegister) || newRegister < 1 || newRegister > 2);
        console.log(newRegister);

        if (newRegister == 1) {
            registerHotel(nameHotelUser);
        }

    } else {
        console.log("Este hotel ya está");
        console.log("hotel:", foundHotel);
        //show = toString(foundHotel);
        //console.log(show);
        console.log(foundHotel, positionHotel);
        showHotel(positionHotel);
        if (action === "delete" || action === "modify") {
            return (positionHotel);
        }
    }
}

function iniciaHotel() {
    let hotel, nuevoNombre;
    hotel = new Hotel("Arts", 483, 44, 13000);
    arrayHotels.push(hotel);
    hotel = new Hotel("Vela", 473, 27, 42818);
    arrayHotels.push(hotel);
    hotel = new Hotel("Majestic", 275, 10, 8218);
    arrayHotels.push(hotel);
    hotel = new Hotel("The One H10", 89, 8, 6800);
    arrayHotels.push(hotel);
    // nuevoNombre = document.getElementById("hotelBuscar").value;
    //console.log(nuevoNombre);
    //arrayHotels[0].setNombreHotel(nuevoNombre);
}

window.onload = function () {
    console.log(iniciaHotel());
    console.log(arrayHotels);
}
