// Monster Data
const Monsters = {
	// ==============
	Quillrat: {
    loot_breakpoints: [
      { attack_power: 0,
        attack_speed: 0.5,
        loot: [
          { "Plucked Quill": 1 }
        ]
      },
      { attack_power: 2,
        attack_speed: 1.0,
        loot: [
          { "Plucked Quill": 3 },
          { "Rathide": 2 }
        ]
      }
    ],
    default_discovered_materials: [ "Plucked Quill" ],
    greenforge: [
      {
        "Plucked Spines": {
          crafting_materials: [
            { "Plucked Quill": 2 }
          ],
          stats: [
            { "Attack": 2 }
          ]
        }
      }
    ]
	},
	// ==============
	Marinmoth: {
    base_material_loot: [
      {
        item: "Marinmoth Scale",
        count: 3
      },
      {
        item: "Marinmoth Wing",
        count: 1
      }
    ],
    default_discovered_materials: ["Marinmoth Scale", "Marinmoth Wing"]
	},
	// ==============
	// Balverine inspired, but more pig than wolf.
	// Paw Pig Wolf
	Palvig: {
	},
	// ==============
	// Unicorn? Harlequin-like techniques?
	Hartleigh: {
	},
	// ==============
	Abnocte: {
	},
	// ==============
	// Ygsfalo (Ex- Ygg is a tree, important to all that is holy)
	// Gold Rot Fright Viper Prime Eval Azid
	// Bug Pest Cloud Hound Figure Dweller
	// Goulof (Colossal Golem Gulag)
	// Stormwile (Storm Wild)
	// Saphraze (Sapphire Razor)
	// Teraverba (Terrafirma Herbivore)
	// Gandell (Candle) (forge fire weapon: Gandell Wick)
	// ==============
	// Fearan (Fear Talon Raptor) & Fearan Beth
	// Beth (Pest) as suffix for "Great" or Tempered (Heroic version)
	Fearan: {
	},
	// ==============
	// Zeser (Blazeserpent) & Zeser Beth
	Zeser: {
	},
	// ==============
	// Vigure Beth (Viper Figure Pest)
	Vigure: {
	},
	// ==============
	// Zeser (Blazeserpent) & Zeser Beth
	Zeser: {
			combat_power: 0.2,
			body: {
			impact: 3, slashing: 3, shot: 3,
					fire: 3, water: 3,
					shock: 0, pitfall: 0,
			loot: [
				{ name:"Zeser Scale", quantity: 60 },
				{ name:"Zeser Hide",  quantity: 20 },
				{ name:"Zeser Extract",  quantity: 20 },
				{ name:"Zeser Jawbone",  quantity: 20 },
			]
		},
		capture: { loot: [] }
	},  
	// ==============
	Saelvire: {
			combat_power: 0.2,
			body: {
			impact: 3, slashing: 3, shot: 3,
					fire: 3, water: 3,
					shock: 0, pitfall: 0,
			loot: [
				{ name:"Saelvire Scale", quantity: 60 },
				{ name:"Saelvire Hide",  quantity: 20 },
			]
		},
		capture: { loot: [] }
	},
	// ==============
	Venilios: {
			combat_power: 1,
			body: {
			impact: 3, slashing: 2, shot: 3,
					fire: 3, water: 3,
					shock: 2, pitfall: 3,
			loot: [
				{ name:"Venilios Scale", quantity: 60 },
				{ name:"Venilios Hide",  quantity: 20 },
				{ name:"Venilios Plate",    quantity:  1 }
			]
		},
		capture: {
			loot: [
				{ name:"Venilios Scale", quantity: 1 },
				{ name:"Venilios Hide",  quantity: 2 },
				{ name:"Venilios Mane",  quantity: 1 },
				{ name:"Venilios Claw",  quantity: 2 }
			]
		},
		head: {
			impact: 3, slashing: 2, shot: 3,
					cut: false,
			loot: [
				{ name:"Venilios Mane", quantity: 2 },
				{ name:"Venilios Hide", quantity: 1 }
			]
		},
		stomach: {
			impact: 3, slashing: 2, shot: 3,
					cut: false,
			loot: [
					{ name:"Venilios Scale", quantity: 1 },
					{ name:"Venilios Hide",  quantity: 3 },
				]
			},
		left_leg: {
			impact: 3, slashing: 2, shot: 3,
					cut: false,
			loot: [
				{ name:"Venilios Claw", quantity: 1 }
			]
		}
	},
	// ==============
	// ====(Arctocine means grey bear)
	// ====(Carnivoran means mammal that has bladelike carnassial teeth and eats meat)
	Arctocine: {
			combat_power: 2,
			body: {
			impact: 3, slashing: 3, shot: 3,
					fire: 3, water: 3,
					shock: 0, pitfall: 0,
			loot: [
				{ name:"Arctocine Scale", quantity: 60 },
				{ name:"Arctocine Hide",  quantity: 20 },
			]
		},
		capture: { loot: [] }
	},
}

function getAttackPower (monsterName) {
  return 0;
}

function getAttackSpeed (monsterName) {
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
  Marinmoth: {
    loadout: {
      primary_weapon: "Plucked Quills"
    },
    discovered_materials: [ "Moth Wing" ],
    materials: {
      "Moth Wing": 3,
      "Other Item": 4
    }
  }
}
*/

function discoverMonster (monsterName) {
  // Add the monster to the player's monsters array,
  // thereby "discovering" the monster (no longer null)
  playerSaveData.monsters[monsterName] = {
    discovered: true,

    // Set the monster's hunt progress bar to 0
    progress: 0,

    // And cache an attack speed value for the monster.
    attack_speed_cached: getAttackSpeed(monsterName),

    // Initialize materials
    materials: {}
  }

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
              <div class="loadout-item-icon">
                <div class="item-icon-container icon-border">
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

          <div id="${name}_Attack_Status" class="tab-pane">
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

    // If monster's progress is beyond 60, reduce and give rewards
    if (playerSaveData.monsters[name].progress >= 60) {
      playerSaveData.monsters[name].progress -= 60
      generateLoot(name)
    }

    // Find monster progress bar
    let progress_bar = document.getElementById(`${name}_Hunt_Progress`)

    // Update the progress bar
    let progress_percent = playerSaveData.monsters[name].progress * 1.58
    progress_bar.style.width = `${progress_percent}%`
  })

}

// ===============================================================
//  Create a modal with a list of equippable weapons.
// ===============================================================
function createModal(slotName, monsterName) {
  // Reveal modal
  document.getElementById("Modal").style.display = "block";
  let modal_content = document.getElementById("Modal_Content")
  modal_content.innerHTML = null;

  // Here we must add all the weapon buttons.
  let items = ["Plucked Quills", "Other Item", "Third Item"]
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
        Scimitar
      </div>
      <div class="loadout-item-subtitle">
        Subtitle
      </div>
      <div class="loadout-item-info-1">
        Attack 150
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