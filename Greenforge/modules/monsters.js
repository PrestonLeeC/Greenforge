// Monster Data
export default Monsters = {
	// ==============
	Quillrat: {
    resistances: [
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
          { "Rathide": 2 }
        ]
      }
    ],
    default_discovered_materials: [ "Plucked Quill", "Rathide" ],
    greenforge: {
      "Plucked Spines": {
        crafting_materials: [
          { "Plucked Quill": 2 }
        ],
        stats: [
          { "Attack": 2 }
        ]
      }
    }
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