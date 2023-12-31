function songPauseAndPlay() {

    var song = {
        name: "Walk This Way",
        artist: "Run-D.M.C",
        minutes: 4,
        seconds: 3,
        genre: "80's",
        playing: false,

        play: function () {
            if (!this.playing) {
                this.playing = true;
                console.log("Playing " + this.name + " by " + this.artist);
            }
        },


        pause: function () {
            if (this.playing) {
                this.playing = false;
                console.log(this.name + " Is now paused")
            }
        }

    }

    song.play()
    song.pause();

}

songPauseAndPlay()