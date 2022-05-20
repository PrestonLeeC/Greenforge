
import { Monsters, getEquipment } from '/Greenforge/modules/monsters.js'

import PlayerSaveData from '/Greenforge/modules/PlayerSaveData.js'

import { disable_image_dragging } from '/Greenforge/modules/disable_image_dragging.js'
// Monster images cannot be click-dragged.
disable_image_dragging()

// Load or create new PlayerSaveData for this session
var playerSaveData = new PlayerSaveData()
console.log(playerSaveData);

// Create Monster Cards for known monsters
createMonsterHTML( Object.getOwnPropertyNames(playerSaveData.monsters) )


// ===============================================================
//  Refresh the game display as quickly as the browser will allow
// ===============================================================
const perfectFrameTime = 1000 / 60;
let deltaTime = 0;
let lastTimestamp = 0;

// ===============================================================
//  Main Update Function - runs at around 60fps
// ===============================================================
function update(timestamp) {
  deltaTime = (timestamp - lastTimestamp) / perfectFrameTime;
  lastTimestamp = timestamp;
  
  // for each monster the player has discovered...
  Object.entries(playerSaveData.monsters).forEach(monster => {

    // Get monster name
    let name = String(monster).split(',')[0];

    // Get attack speed
    let attack_speed = playerSaveData.monsters[name].attack_speed_cached;

    // Set monster's new progress
    playerSaveData.monsters[name].progress += attack_speed * deltaTime;

    // If monster's progress is complete, reduce and give rewards
    payoutProgressRecursive(name)

    // Find monster progress bar
    let progress_bar = document.getElementById(`${name}_Hunt_Progress`)

    // Update the progress bar
    let progress_percent = playerSaveData.monsters[name].progress * 1.58
    progress_bar.style.width = `${progress_percent}%`
  })

  requestAnimationFrame(update);
}
// This call is first, then the function calls itself.
requestAnimationFrame(update); 