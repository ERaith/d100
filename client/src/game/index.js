import Phaser from "phaser";
import Game from "./scenes/game";

// const config = {
//     type: Phaser.AUTO,
//     parent: "phaser-example",
//     width: 1280,
//     height: 780,
//     scene: [
//         Game
//     ]
// };

function launch(containerId) {
    return new Phaser.Game({
        type: Phaser.AUTO,
        parent: containerId,
        scene: [
            Game
        ],
        scale: {
            mode: Phaser.Scale.FIT,
            width: '100%',
            height: '100%'
        }
    });
}

export default launch;
export { launch }



// const game = new Phaser.Game(config);
// const game = new Phaser.Game(config);
// export {game}