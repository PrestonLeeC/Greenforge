//============================================================
// VIEW.JS will define functions for creating the HTML view
//============================================================

// Create a modal and add buttons to it for each option.
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

// Pass the iterator i
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

// Append the new div to the modal
document.getElementById("Modal_Content").appendChild(div)

// Add event listener to the div, so it equips the item you click.
document.getElementById(`Select_${itemName}`).addEventListener(
  "click", function () {
    playerSaveData.monsters[monsterName][slotName] = itemName
    
    document.getElementById("Modal").style.display = "none";
  }
)
}