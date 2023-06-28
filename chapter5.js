var cadi = {
    make: "cadillac",
    model: "GM",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

prequal(cadi);


var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};



var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};

prequal(fiat);


var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};

prequal(chevy);


function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

var worthALook = prequal(chevy);

if (worthALook) {
    console.log("You gotta check out this " + chevy.make + " " + chevy.model);
} else {
    console.log("You should really pass on the " + chevy.make + " " + chevy.model);
}


var song = {
    name: "Walk This Way",
    artist: "Run-D.M.C",
    minutes: 4,
    seconds: 3,
    genre: "80's",
    playing: false,

    play: function() {
        if(!this.playing) {
            this.playing = true;
            console.log("Playing " + this.name + " by " + this.artist);
        }
    },


    pause: function() {
        if (this.playing) {
            this.playing = false;
            console.log(this.name + " Is now paused")
        }
    }

}

song.play()
song.pause();