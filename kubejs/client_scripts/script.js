// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	event.hide('minecraft:cobblestone')
	event.hide('#itemfilters:filters')
	event.hide(['castle_in_the_sky:red_door', 'castle_in_the_sky:blue_door', 'castle_in_the_sky:yellow_door', 'castle_in_the_sky:fake_beacon', Item.of('cyclic:ender_book', '{Damage:0}'), 'cyclic:teleport', Item.of('cyclic:sleeping_mat', '{Damage:0}')])
})