
export default class PlayerSaveData {

  constructor() {  
    // Check if save data exists
    if (localStorage.getItem( 'playerSaveData' ) !== null) {
      // If save data exists, retrieve it.
      return JSON.parse( localStorage.getItem( 'playerSaveData' ));
    } else {
      // If no save data exists, new game.
      // Initialize with the bare-minimum
      this.monsters = { }

      // Add first monster to save data.
      this.discoverMonster ( 'Quillrat' );
    }
  }
  
  // Returns an array of Recipe names
  getListOfKnownGreenforgeRecipesForSlot(slotName) {
    knownRecipes = []
    Object.entries(this.monsters).forEach(monster => {
      concat(knownRecipes, monster.greenforge)
    })
    return knownRecipes
  }

  discoverMonster( monsterName, monsterObject ) {
    // Add the monster to the player's monsters array,
    // thereby "discovering" the monster (no longer null)
    this.monsters[monsterName] = {
      discovered: true,
  
      // Set the monster's hunt progress bar to 0
      progress: 0,

      // cache an attack power (0, no equipment yet)
      attack_power_cached: 0,
  
      // Initialize materials
      materials: [],
  
      // Initialize loadout
      loadout: []
    }

    // cache an attack speed value for the monster.
    this.cacheAttackSpeed( monsterName,
        monsterObject.loot_breakpoints[0].attack_power,
        monsterObject.loot_breakpoints[1].attack_power,
        monsterObject.loot_breakpoints[0].attack_speed,
        monsterObject.loot_breakpoints[1].attack_speed )
  
    // Set already discovered materials
    default_discovered_materials.forEach(
      function( material ) { 
        discoverMaterial( monsterName, material )
      })
  }

  discoverMaterial( monsterName, materialName ) {
    this.monsters[monsterName].materials[materialName] = 0;
  }

  cacheAttackSpeed( monsterName,
    power_lower_bound, power_upper_bound,
    speed_lower_bound, speed_upper_bound ) {
    // Given power in range a to b,
    // find what percentage of power that is in between a and b.
    let power = this.monsters[monsterName].attack_power_cached
    let power_percent = (power - power_lower_bound) / (power_upper_bound - power_lower_bound)
  
    // Linear interpolate between the 2 attack speed breakpoints
    // using power_percent as alpha
    this.monsters[monsterName].attack_speed_cached =
      speed_lower_bound * (1 - power_percent) + speed_upper_bound * power_percent
  }

  cacheAttackPower( monsterName, monsterObject ) {
    // go through each item in the loadout and collect stat count
    var damage = 0
    monsterObject.resistances.forEach(resistance => {
      let resistanceName = String(resistance).split(',')[0];
      getEquipment(this.monsters[monsterName].loadout).forEach(equipment => {
        damage += equipment.stats[resistance]
      })
    })
  }

  payoutProgressRecursive( monsterName ) {  
    if (this.monsters[monsterName].progress >= 60) {
      this.monsters[monsterName].progress -= 60
      generateLoot( monsterName )
      payoutProgressRecursive( monsterName );
    }
  }

  // Generate Loot will add an item directly to the save file.
  generateLoot( monsterName ) {
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
    if (this.monsters[monsterName].materials[loot] == null) {
      discoverMaterial( monsterName, loot )
    }
    // Get 1 material
    this.monsters[monsterName].materials[loot]++

    // And update the HTML to reflect this change
    document.getElementById(`${loot}_Count`).innerHTML = 
      this.monsters[monsterName].materials[loot]
    // TODO: IF material HTML does not exist
  }

} // End of PlayerSaveData class definition

// EXAMPLE PlayerSaveData instance
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
