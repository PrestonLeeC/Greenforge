import { Monsters } from "/Greenforge/modules/monsters.js"

function getEquipment (equipmentName) {
  Object.entries(Monsters).forEach(monster => {
    if ('greenforge' in monster)
      if (equipmentName in monster.greenforge)
        return monster.greenforge[equipmentName];
  })
}

function cacheAttackPower (monsterName) {
  // go through each item in the loadout and collect stat count
  var damage = 0
  Monsters[monsterName].resistances.forEach(resistance => {
    let resistanceName = String(resistance).split(',')[0];
    getEquipment(playerSaveData.monsters[monsterName].loadout).forEach(equipment => {
      damage += equipment.stats[resistance]
    });
  });
}

function getAttackPower (monsterName) {
  return playerSaveData.monsters[monsterName].attack_power_cached;
}

function cacheAttackSpeed(monsterName) {
  // Given power in range a to b,
  // find what percentage of power that is in between a and b.
  let power = getAttackPower(monsterName)
  let power_a = Monsters[monsterName].loot_breakpoints[0].attack_power
  let power_b = Monsters[monsterName].loot_breakpoints[1].attack_power
  let power_percent = (power - power_a) / (power_b - power_a)

  // Linear interpolate between the 2 attack speed breakpoints
  // using power_percent as alpha
  let speed_a = Monsters[monsterName].loot_breakpoints[0].attack_speed
  let speed_b = Monsters[monsterName].loot_breakpoints[1].attack_speed
  return speed_a * (1 - power_percent) + speed_b * power_percent;
}

function getAttackSpeed (monsterName) {
  return playerSaveData.monsters[monsterName].attack_speed_cached;
}

// Item Data
const Items = {
  // ========
  //  Potion
  // ========
  Potion: {
    icon_url: "images/potion-health.svg",
    color: "yellow"
  }
}

// Declare an object to hold player Save Data
var playerSaveData = {
  // Initialize with the bare-minimum
  monsters: { }
}

// Here, we must discover our monster.
// But only later can we set up the HTML for it.
discoverMonster ("Quillrat");

// Load player Save Data Here

// TESTING ONLY values for player save file
/*
playerSaveData = {
  isNewAccount: false,
  monsters: [
    Marinmoth: {
      loadout: [
        { "Primary Weapon": "Plucked Quills" },
        { "Primary Weapon": "Attack Potion" }
      ],
      discovered_materials: [ "Moth Wing" ],
      materials: {
        "Moth Wing": 3,
        "Other Item": 4
      },
      attack_power_cached: 2
    }
  ]
}
*/

function discoverMonster (monsterName) {
  // Add the monster to the player's monsters array,
  // thereby "discovering" the monster (no longer null)
  playerSaveData.monsters[monsterName] = {
    discovered: true,

    // Set the monster's hunt progress bar to 0
    progress: 0,
    attack_power_cached: 0,
    attack_speed_cached: 0,

    // Initialize materials
    materials: {},

    // Initialize loadout
    loadout: []
  }

  // cache an attack speed value for the monster.
  playerSaveData.monsters[monsterName].attack_speed_cached = 
    cacheAttackSpeed(monsterName)

  // Set already discovered materials
  Monsters[monsterName].default_discovered_materials.forEach(
    function(material) { 
      discoverMaterial(monsterName, material)
    })
}

// You can make sure material exists in player data and in HTML
function discoverMaterial (monsterName, materialName) {
  playerSaveData.monsters[monsterName].materials[materialName] = 0;
}

function createHTML_MonsterMaterial () {
}

// disable image dragging
window.onload = function (e) {
  var evt = e || window.event, imgs, i;

  if (evt.preventDefault) {
      imgs = document.getElementsByTagName('img');
      for (i = 0; i < imgs.length; i++) {
          imgs[i].onmousedown = disableDragging;
      }
  }
};
function disableDragging(e) {
  e.preventDefault();
}

// Create Monster Cards for known monsters
Object.entries(playerSaveData.monsters).forEach(monster => {

    let name = String(monster).split(',')[0];

    let newHTML = ``;
    newHTML += `
    <li id="${name}" class="monster-container">

      <div class="monster-main-container">

        <button class="equip button"
        data-bs-toggle="collapse"
        data-bs-target="#${name}_Equip"
        data-toggle="button">
          <p class="button-label">${name}</p>
        </button>

        <button id="${name}_Hunt_Button" class="monster-icon-container"
        style="grid-row: span 3;">
          <img class="monster-icon" src="monster/${name}.png" alt="text">
          <div id="${name}_Hunt_Progress" class="click-progress"></div>
        </button>

        <button class="forge button"
        data-bs-toggle="collapse"
        data-bs-target="#${name}_Greenforge">
          <p class="button-label">Greenforge</p>
        </button>

        <button class="material button"
        data-bs-toggle="collapse"
        data-bs-target="#${name}_Material">
          <p class="button-label">Material</p>
        </button>

      </div>

      <div id="${name}_Equip" class="grid-of-collapsers collapse">

        <ul class="nav nav-tabs nav-justified">
          <li class="nav-item">
            <a class="nav-link disabled" data-bs-toggle="tab"
            href="#">Research</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab"
            href="#${name}_Loadout_Grid">Equip</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab"
            href="#${name}_Attack_Status">Skill</a>
          </li>
        </ul>

        <div class="tab-content">

          <div id="${name}_Loadout_Grid" class="tab-pane active loadout-grid">

            <div id="${name}_Loadout_Primary_Weapon" 
            class="loadout-item-grid-container">
                <div id="${name}_Primary_Weapon_Container"
                class="item-container loadout-item-icon">
                  <div class="item-icon-container">
                    <img src="equip/sword.png">
                  </div>
                </div>
              <div id="${name}_Loadout_Primary_Weapon_Name"
              class="loadout-item-name">
                Equip a Primary Weapon
              </div>
              <div id="${name}_Loadout_Primary_Weapon_Subtitle"
              class="loadout-item-subtitle">
                
              </div>
              <div class="loadout-item-info-1">
                
              </div>
              <div class="loadout-item-info-2">
                
              </div>
            </div>
          </div>

          <div id="${name}_Attack_Status" class="tab-pane loadout-grid">
            <table>
              <tr>
                <th>Attack Power:</th>
                <td>150</td>
              </tr>
              <tr>
                <th>Stamina:</th>
                <td>100</td>
              </tr>
            </table>
          </div>

        </div>
      </div>

      </div>

      <div id="${name}_Greenforge" class="grid-of-collapsers collapse">

        <button class="equip button">
          <div class="button-label">Knife</div>
        </button>

      </div>

      <div id="${name}_Material"
      class="monster-loot-container collapse">
      </div>

	  </li>
    `;
    
    // Add the new HTML to the Monster_List
    document.getElementById(`Monsters_List`).innerHTML += newHTML;

    // Add known materials to the materials container    
    Monsters[name].default_discovered_materials.forEach(
    function(materialName) { 
      
      // Get container to dump new HTML into
      let container = document.getElementById(`${name}_Material`)

      newHTML = `
        <div id="${materialName}" class="item-container">
          <div class="item-icon-container">
            <img src="item/${materialName}.png">
          </div><span id="${materialName}_Count">0</span>
        </div>
      `
      // Add the new HTML to the Monster_List
      container.innerHTML += newHTML;
    })

    // Add the modal popup to Equip a Primary Weapon
    document.getElementById(`${name}_Loadout_Primary_Weapon`).addEventListener(
      "click", function() {
        createModal("primaryWeapon", name)
    })
})

// Generate Loot will return an item from the monster's loot table.
function generateLoot (monsterName) {
  // Takes in a monster name
  // Uses the player save file info to determine
  // What gear you're using
  // So we can get a combat rating
  let power = getAttackPower(monsterName)

  // And then we use the combat rating as input
  // On the monster loot table
  // To randomly select a loot material
  let loot = "Plucked Quill"

  // If this material is NOT already discovered...
  if (playerSaveData.monsters[monsterName].materials[loot] == null) {
    discoverMaterial( monsterName, loot )
  }
  // Get 1 material
  playerSaveData.monsters[monsterName].materials[loot]++

  // And update the HTML to reflect this change
  document.getElementById(`${loot}_Count`).innerHTML = 
    playerSaveData.monsters[monsterName].materials[loot]
}

function update_Monster_Progress(deltaTime) {
  
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

}

function payoutProgressRecursive(monsterName) {  
  if (playerSaveData.monsters[monsterName].progress >= 60) {
    playerSaveData.monsters[monsterName].progress -= 60
    generateLoot(monsterName)
    payoutProgressRecursive(monsterName);
}
}

function getMaterialsList(recipeName) {
  let materialsList = []
  Object.entries(Monsters).forEach(monster => {
    if ('greenforge' in monster)
      if (recipeName in monster.greenforge)
        materialsList = monster.greenforge[recipeName].crafting_materials;
  })
}

function isGreenforgeRecipeKnown(recipeName) {
  // Get a list of materials the recipe requires
  let materialsList = getMaterialsList(recipeName)
  // For each material in the recipe
  materialsList.forEach(materialName => {
    if (condition) {
      
    }
  });
  // 
}

function getKnownEquipForSlot(slotName) {

}

// ===============================================================
//  Create a modal with a list of equippable weapons.
// ===============================================================
function createModal(slotName, monsterName) {
  // Reveal modal
  document.getElementById("Modal").style.display = "block";
  let modal_content = document.getElementById("Modal_Content")
  modal_content.innerHTML = null;

  // Come up with a list of possible equippable items
  let items = getKnownEquipForSlot(slotName)

  // Here we must add all the weapon buttons.
  for (let i = 0; i < items.length; i++) {
    createModalButton(i, slotName, items[i], monsterName)
  }
}

function createModalButton(iteration, slotName, itemName, monsterName) {
    var div = document.createElement("div")
    div.id = `Select_${itemName}`
    div.className = "loadout-item-grid-container"
    div.innerHTML = `
      <div class="loadout-item-icon">
        <div class="item-icon-container icon-border">
          <img src="equip/sword.png">
        </div>
      </div>
      <div class="loadout-item-name">
        ${itemName}
      </div>
      <div class="loadout-item-subtitle">
        ${monsterName}
      </div>
      <div class="loadout-item-info-1">
        ${getEquipment(itemName)}
      </div>
      <div class="loadout-item-info-2">
        Ice 73
      </div>
  `
  document.getElementById("Modal_Content").appendChild(div)

  // Make the button interactive
  document.getElementById(`Select_${itemName}`).addEventListener(
    "click", function () {
      playerSaveData.monsters[monsterName][slotName] = itemName
      
      document.getElementById("Modal").style.display = "none";
    }
  )
}

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
  
  update_Monster_Progress(deltaTime);

  requestAnimationFrame(update);
}
// This call is first, then the function calls itself.
requestAnimationFrame(update); 