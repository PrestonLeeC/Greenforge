const Monsters = {
	// ==============
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
			name: "Zeser",
			combat_power: 0.2,
			icon_url:"monsters/Zeser.png",
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
			name: "Saelvire",
			combat_power: 0.2,
			icon_url:"monsters/Saelvire.png",
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
			name: "Venilios",
			combat_power: 1,
			icon_url:"monsters/Venilios.png",
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
			name: "Arctocine",
			combat_power: 2,
			icon_url:"monsters/rathalos.png",
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

const Items = {
  // ========
  //  Potion
  // ========
  Potion: {
    icon_url: "images/potion-health.svg",
    color: "yellow"
  }
}

// Create the player save file
var playerData = {
  isNewAccount: true
}
Object.entries(Monsters).forEach(monster => {
  let name = String(monster).split(',')[0];
  playerData[`${name}`] = {
    material: []
  }
});
console.log(playerData);


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

/* Create All Monster Cards
grid = document.getElementById("Animals_Grid")
template = document.getElementById("Animal_Card_Template")

Object.entries(Monsters).forEach(monster => {
  const [key, value] = monster;
  const card = template.content.querySelector("button").cloneNode(true);
  card.id = key;
  grid.appendChild(card);
  card.addEventListener("click",clickHandler);
  card.firstElementChild.firstElementChild.src = value.icon_url;
  card.getElementsByTagName('p')[0].innerText = value.name;

})
*/

// Create all Monster Cards
Object.entries(Monsters).forEach(monster => {
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
          <div class="click-progress"></div>
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

        <button id="${name}_Status_Button" class="equip button"
        data-bs-toggle="collapse"
        data-bs-target="#${name}_Attack_Status">
          <p class="button-label-small">
            Status
          </p>

          <table id="${name}_Attack_Status" class="collapse">
            <tr>
              <th>Attack Power:</th>
              <td>150</td>
            </tr>
            <tr>
              <th>Stamina:</th>
              <td>100</td>
            </tr>
          </table>

        </button>

        <button id="${name}_Loadout_Button" class="equip button"
        data-bs-toggle="collapse"
        data-bs-target="#${name}_Loadout_Grid">
          <p class="button-label-small">Loadout</p>

          <div id="${name}_Loadout_Grid" class="collapse">

            <div class="loadout-item-grid-container">
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
            </div>

          </div>

        </button>			

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
    document.getElementById("Monsters_List").innerHTML += newHTML;

    console.log(`${name} added to HTML.`)
})

// Add material to Monster HTML
const hunt = function (monsterName) {

}


// Add on-click to monster icon
Object.entries(Monsters).forEach(monster => {
  let name = String(monster).split(',')[0];
  document.getElementById(`${name}_Hunt_Button`).addEventListener("click", function(){
    playerData[`${name}`].material.push("stuff");
    console.log(`${name} clicked!`);
  });
});