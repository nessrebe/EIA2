var Zoo;
(function (Zoo) {
    class SoundPlay {
        constructor(_sound) {
            this.sound = _sound;
        }
        playSound() {
            this.sound.play();
        }
    }
    Zoo.SoundPlay = SoundPlay;
})(Zoo || (Zoo = {}));
//# sourceMappingURL=sounds.js.map