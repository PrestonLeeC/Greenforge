export const Monsters = {
  Raptaves: {
  // == (Hunting birds are known as raptors and birds are "aves")
    name: "Raptaves",
    combat_power: 0.2,
    icon_url:"images/rathalos.png",
    body: {
  		impact: 3, slashing: 3, shot: 3,
      fire: 3, water: 3,
      shock: 0, pitfall: 0,
  		loot: [
  			{ name:"Jagras Scale", quantity: 60 },
  			{ name:"Jagras Hide",  quantity: 20 },
  		]
  	},
  	capture: { loot: [] }
  },  
  // ==============
  Salire: {
  // === (Means To Jump)
    name: "Salire",
    combat_power: 0.2,
    icon_url:"images/rathalos.png",
    body: {
  		impact: 3, slashing: 3, shot: 3,
      fire: 3, water: 3,
      shock: 0, pitfall: 0,
  		loot: [
  			{ name:"Jagras Scale", quantity: 60 },
  			{ name:"Jagras Hide",  quantity: 20 },
  		]
  	},
  	capture: { loot: [] }
  },
  // ==============
  Anilios: {
  // ===== (Means Gray, but also a genus of snakes)
    name: "Anilios",
    combat_power: 1,
    icon_url:"images/rathalos.png",
    body: {
  		impact: 3, slashing: 2, shot: 3,
      fire: 3, water: 3,
      shock: 2, pitfall: 3,
  		loot: [
  			{ name:"Great Jagras Scale", quantity: 60 },
  			{ name:"Great Jagras Hide",  quantity: 20 },
  			{ name:"Bird Wyvern Gem",    quantity:  1 }
  		]
  	},
  	capture: {
  		loot: [
  			{ name:"Great Jagras Scale", quantity: 1 },
  			{ name:"Great Jagras Hide",  quantity: 2 },
  			{ name:"Great Jagras Mane",  quantity: 1 },
  			{ name:"Great Jagras Claw",  quantity: 2 }
  		]
  	},
  	head: {
  		impact: 3, slashing: 2, shot: 3,
      cut: false,
  		loot: [
  			{ name:"Great Jagras Mane", quantity: 2 },
  			{ name:"Great Jagras Hide", quantity: 1 }
  		]
  	},
  	stomach: {
  		impact: 3, slashing: 2, shot: 3,
      cut: false,
  		loot: [
    		{ name:"Great Jagras Scale", quantity: 1 },
    		{ name:"Great Jagras Hide",  quantity: 3 },
    	]
    },
  	left_leg: {
  		impact: 3, slashing: 2, shot: 3,
      cut: false,
  		loot: [
  			{ name:"Great Jagras Claw", quantity: 1 }
  		]
  	}
  },
  // ==============
  Arctocine: {
  // ====(Arctocine means grey bear)
  // ====(Carnivoran means mammal that has bladelike carnassial teeth and eats meat)
    name: "Arctocine",
    combat_power: 2,
    icon_url:"images/rathalos.png",
    body: {
  		impact: 3, slashing: 3, shot: 3,
      fire: 3, water: 3,
      shock: 0, pitfall: 0,
  		loot: [
  			{ name:"Jagras Scale", quantity: 60 },
  			{ name:"Jagras Hide",  quantity: 20 },
  		]
  	},
  	capture: { loot: [] }
  },
}