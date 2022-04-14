// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	event.remove({output: Item.of('cyclic:ender_book', '{Damage:0}')})
	event.remove({output: 'cyclic:teleport'})
	event.remove({output: Item.of('cyclic:sleeping_mat', '{Damage:0}')})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
	event.get('forge:ores').add('stalwart_dungeons:chorundum_ore')
	event.get('forge:ores').add('stalwart_dungeons:tungsten_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})