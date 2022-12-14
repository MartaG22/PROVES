class Hotel {
    constructor(nameHotel, numberRooms, numberFloors, surface) {
        this.nameHotel = nameHotel;
        this.numberRooms = numberRooms;
        this.numberFloors = numberFloors;
        this.surface = surface;
    }

    getNameHotel() { return this.nameHotel; }
    getNumberRooms() { return this.numberRooms; }
    getNumberFloors() { return this.numberFloors; }
    getSurface() { return this.surface; }

    setNameHotel(nameHotel) { this.nameHotel = nameHotel; }
    setNameHotel(numberRooms) { this.numberRooms = numberRooms; }
    setNameHotel(numberFloors) { this.numberFloors = numberFloors; }
    setNameHotel(surface) { this.surface = surface; }

    calcularManteniment() {
        let staffRoom, maintenance;
        staffRoom = parseInt(this.numberRooms / 20);
        if (this.numberRooms % 20 > 0) {
            staffRoom++;
        }
        let totalCost = staffRoom * 1500
        maintenance = `<br>Es necessiten ${staffRoom} persones per al manteniment d'aquest Hotel. <br> Amb un cost total de <b> ${totalCost} €</b>!`;
        return maintenance;

    }

    toString() {
        let result = "";
        let maintenance = this.calcularManteniment();
        result += "<b>HOTEL " + this.nameHotel.toUpperCase() + "</b><br>";
        result += this.numberRooms + " habitacions." + "<br>";
        result += this.numberFloors + " plantes." + "<br>";
        result += this.surface + " m² de superfície." + "<br>";
        result += maintenance;
        return result;

    }

}

