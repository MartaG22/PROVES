class Building {
    constructor(name, floors, surface, type) {
        this.name = name;
        this.floors = floors;
        this.surface = surface;
        this.type = type;
    }

    get getName() {
        return this.name;
    }
    get getFloors() {
        return this.floors;
    }
    get getSurface() {
        return this.surface;
    }
    get getType() {
        return this.type;
    }

    set setName(newName) {
        this.name = newName;
    }
    set setFloors(newFloors) {
        this.floors = newFloors;
    }
    set setSurface(newSurface) {
        this.surface = newSurface;
    }
    set setType(newType) {
        this.type = newType;
    }

    calculateCleaning() {
        let floorsToClimb = 0;
        let timeToClean = parseInt(this.surface / 5);
        if (this.surface % 5 > 0) {
            timeToClean++;
        }
        if (this.floors > 1) {
            floorsToClimb = this.floors - 1;
        }
        console.log(timeToClean, floorsToClimb);
        let timeClimbFloors = floorsToClimb * 0.5;
        timeToClean += timeClimbFloors;
        let totalHours = parseInt((timeToClean + timeClimbFloors) / 60);
        if ((timeToClean + timeClimbFloors) % 60 > 0) {
            totalHours++;
        }
        let totalHoursMonth = totalHours * 30;

        let totalCost = `El total del temps emprat en netejar l'Edifici, és de  <b> ${totalHours} hores/mes</b>`;
        totalCost += `<br>El cost total de la neteja de l'edifici, és de <b> ${timeToClean.toLocaleString('de-DE')} €/mes</b>!`;
        return totalCost;

    }

    calculateCostVigilance() {
        const surfacePerson = 1000;
        let personsToVigilance = parseInt(this.surface / surfacePerson);
        if (this.surface % surfacePerson > 0) {
            personsToVigilance++;
        }
        let costSecurity = personsToVigilance * 1300;

        let totalCost = `<br>El cost total de la vigilància de l'edifici, és de <b> ${costSecurity.toLocaleString('de-DE')} €/mes</b>!<br>`;
        return totalCost;
    }


    toString(people, price) {
        let result = "";
        let maintenance = this.calculateCleaning();
        let vigilance = this.calculateCostVigilance();
        result += "<b>EDIFICI " + this.name.toUpperCase() + "</b><br>";
        //result += this.numberRooms + " habitacions." + "<br>";
        result += this.floors + " plantes." + "<br>";
        result += this.surface.toLocaleString('de-DE') + " m² de superfície." + "<br>";
        result += maintenance;
        result += vigilance;

        if (this.type === "HOSPITAL") {
            result += this.distributeFood();
        } else if (this.type === "HOTEL") {
            result += this.calculateMaintenance();
        }
        return result;
    }
}


class Hospital extends Building {
    constructor(name, floors, surface, type, patients) {
        super(name, floors, surface, type);
        this.patients = patients;
    }

    get getPatients() {
        return this.patients;
    }

    set setPatients(newPatients) {
        this.patients = newPatients;
    }


    distributeFood() {
        let totalFoods = this.patients * 3;
        let message = `En aquest moment s'estàn repartint ${totalFoods.toLocaleString('de-DE')} racions/dia!<br>`
        return message;
    }


}

// function nuevoHospital() {
//     alert("hola");
//     // let hospitalNuevo = new Hospital("Barcelona", 10, 1500, "HOSPITAL", 50);
//     // arrayBuildings.push(hospitalNuevo);
//     // console.log(hospitalNuevo.distributeFood);

// }

class Hotel extends Building {
    constructor(name, floors, surface, type, rooms) {
        super(name, floors, surface, type);
        this.rooms = rooms;
    }

    get getRooms() {
        return this.rooms;
    }

    set setRooms(newRooms) {
        this.rooms = newRooms;
    }

    calculateMaintenance() {
        let staffRoom, message;
        staffRoom = parseInt(this.rooms / 20);
        if (this.rooms % 20 > 0) {
            staffRoom++;
        }
        let totalCost = staffRoom * 1500
        message = `<br>Es necessiten ${staffRoom} persones per al servei d'habitacions d'aquest Hotel. <br> Amb un cost total de <b> ${totalCost} €</b>!<br>`;
        return message;
    }

    calculateCostVigilance() {
        const surfacePerson = 1000;
        let personsToVigilance = parseInt(this.surface / surfacePerson);
        if (this.surface % surfacePerson > 0) {
            personsToVigilance++;
        }
        let costSecurity = (1300 + 500) * personsToVigilance;

        let totalCost = `<br>El cost total de la vigilància de l'edifici, és de <b> ${costSecurity.toLocaleString('de-DE')} €/mes</b>!`;
        return totalCost;
    }

}


class Cinema extends Building {
    constructor(name, floors, surface, type, capacity) {
        super(name, floors, surface, type);
        this.capacity = capacity;
    }

    projectSession(people, price) {
        let message = "";

        if (people > this.capacity) {
            alert("La quantitat d'entrades no pot ser superior a l'aforament de la sala!");
        } else {
            let money = people * price;
            message = `S’han recaptat <b>${money} €!</b><br>`;
        }
        return message;
    }


    calculateCostVigilance() {
        const surfacePerson = 3000;
        let personsToVigilance = parseInt(this.surface / surfacePerson);
        if (this.surface % surfacePerson > 0) {
            personsToVigilance++;
        }
        let costSecurity = 1300 * personsToVigilance;

        let totalCost = `<br>El cost total de la vigilància de l'edifici, és de <b> ${costSecurity.toLocaleString('de-DE')} €/mes</b>!<br>`;
        return totalCost;
    }

    toString(people, price) {
        let result = "";
        let maintenance = this.calculateCleaning();
        let vigilance = this.calculateCostVigilance();
        result += "<b>EDIFICI " + this.name.toUpperCase() + "</b><br>";
        //result += this.numberRooms + " habitacions." + "<br>";
        result += this.floors + " plantes." + "<br>";
        result += this.surface.toLocaleString('de-DE') + " m² de superfície." + "<br>";
        result += maintenance;
        result += vigilance;

        result += this.projectSession(people, price);
        return result;
    }
}