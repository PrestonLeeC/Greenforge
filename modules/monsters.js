// Monster Data
export const Monsters = {
	// ==============
	Quillrat: {
		display_name: "Quillrat",
    weaknesses: [
      { "Attack": 0.5 },
      { "Fire": 1.5 }
    ],
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
          { "Rat Hide": 2 }
        ]
      }
    ],
    default_discovered_materials: [ "Plucked Quill", "Rat Hide" ],
    greenforge: {
      dualBlades: {
				display_name: "Plucked Quills",
        equipment_slot: "Primary Weapon",
        crafting_materials: [
          { "Plucked Quill": 2 }
        ],
        stats: [
          { "Attack": 2 }
        ],
				durability: 5
      }
    }
	},
	/* ==============
	Marinmoth: {
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
	*/
}

// Searches every monster until it finds the equipmentName
export function getEquipment (equipmentName) {

  Object.entries(Monsters).forEach(monster => {
    if ('greenforge' in monster)
      if (equipmentName in monster.greenforge)
        return monster.greenforge[equipmentName];
  })

	// The equipment was not found.
	console.log(`ERROR: getEquipment( ${equipmentName} ) did not find that equipment in any Monsters Greenforge.`)
}

// Creates Monster Card HTML for known monsters
export function createMonsterHTML ( discoveredMonsters ) {

	// Empty the HTML monsters list
	document.getElementById(`Monsters_List`).innerHTML = ''
	for (let i = 0; i < discoveredMonsters.length; i++) {

		let name = discoveredMonsters[i]
		
		// Add the new HTML to the Monster_List
		document.getElementById(`Monsters_List`).innerHTML += `
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
		`

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
	}
}

export function getCraftingMaterials( recipeName ) {
  Object.entries(Monsters).forEach(monster => {
    if ('greenforge' in monster)
      if (recipeName in monster.greenforge)
        return monster.greenforge[recipeName].crafting_materials;
  })
}