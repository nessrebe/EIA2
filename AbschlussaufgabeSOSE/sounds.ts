namespace Zoo {
 
    
    
    export class SoundPlay {
        sound: HTMLAudioElement;


        constructor(_sound: any) {
            this.sound = _sound;

        }


        playSound(): void {
            this.sound.play();
        }

    }
    
}