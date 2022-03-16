const Knight = {
    name: 'Knight',
    description: 'Harnesses the elemental power of fire to deal ramping damage over time to a large amount of targets. This spec focuses on management of damage over time effects, exponential AoE damage, and features a mix of hitscan and projectile attacks.',
    color: 'purple',
    abilities: [
        {
            base: {
                id: 37,
                name: 'Impale',
                description: 'Shoot a piercing lance of fire forward in a line, igniting a number of targets hit based on the caster\'s current ember level.',
                attributes: {
                    singleTargetDamage: 1,
                    aoeDamage: 2,
                    singleTargetHealing: 0,
                    aoeHealing: 0,
                    burstDamage: 1,
                    sustainDamage: 2,
                    crowdControl: 0,
                    utility: 0,
                    mobility: 0
                }
            },
            talent1: {
                id: 38,
                name: 'Mortal Wound',
                description: 'Flame Lance now also includes friendly targets in its target cap, healing them over time.',
                attributes: {
                    singleTargetDamage: 1,
                    aoeDamage: 2,
                    singleTargetHealing: 0,
                    aoeHealing: 0,
                    burstDamage: 1,
                    sustainDamage: 2,
                    crowdControl: 0,
                    utility: 0,
                    mobility: 0
                }
            },
            talent2: {
                id: 39,
                name: 'Piercing Strike',
                description: 'Flame Lance now hits the first target in the line significantly harder, but no longer ignites targets beyond the first.',
                attributes: {
                    singleTargetDamage: 1,
                    aoeDamage: 2,
                    singleTargetHealing: 0,
                    aoeHealing: 0,
                    burstDamage: 1,
                    sustainDamage: 2,
                    crowdControl: 0,
                    utility: 0,
                    mobility: 0
                }
            }
        },
        {
            base: {
                id: 40,
                name: 'Parry',
                description: 'Hurl a glob of magma at enemies that explodes for high instant damage on impact.',
                attributes: {
                    singleTargetDamage: 1,
                    aoeDamage: 2,
                    singleTargetHealing: 0,
                    aoeHealing: 0,
                    burstDamage: 1,
                    sustainDamage: 2,
                    crowdControl: 0,
                    utility: 0,
                    mobility: 0
                }
            },
            talent1: {
                id: 41,
                name: 'Spell Parry',
                description: 'Reduces Magma\'s explosion damage, but causes it to leave behind a puddle dealing ticking fire damage.',
                attributes: {
                    singleTargetDamage: 1,
                    aoeDamage: 2,
                    singleTargetHealing: 0,
                    aoeHealing: 0,
                    burstDamage: 1,
                    sustainDamage: 2,
                    crowdControl: 0,
                    utility: 0,
                    mobility: 0
                }
            },
            talent2: {
                id: 42,
                name: 'Coccoon',
                description: 'Causes the caster to instantly detonate Magma at their own feet, increasing explosion size and damage.',
                attributes: {
                    singleTargetDamage: 1,
                    aoeDamage: 2,
                    singleTargetHealing: 0,
                    aoeHealing: 0,
                    burstDamage: 1,
                    sustainDamage: 2,
                    crowdControl: 0,
                    utility: 0,
                    mobility: 0
                }
            }
        },
        {
            base: {
                id: 43,
                name: 'Whirling Blade',
                description: 'Incite a storm of fire from each Ember, causing them to burn nearby enemies for a short duration. This extinguishes all high-level Embers at the end of the cast.',
                attributes: {
                    singleTargetDamage: 1,
                    aoeDamage: 2,
                    singleTargetHealing: 0,
                    aoeHealing: 0,
                    burstDamage: 1,
                    sustainDamage: 2,
                    crowdControl: 0,
                    utility: 0,
                    mobility: 0
                }
            },
            talent1: {
                id: 44,
                name: 'Momentum',
                description: 'Causes Inferno\'s radius to be larger, but Inferno now also knocks targets away on each tick.',
                attributes: {
                    singleTargetDamage: 1,
                    aoeDamage: 2,
                    singleTargetHealing: 0,
                    aoeHealing: 0,
                    burstDamage: 1,
                    sustainDamage: 2,
                    crowdControl: 0,
                    utility: 0,
                    mobility: 0
                }
            },
            talent2: {
                id: 45,
                name: 'Barbed Sword',
                description: 'Causes Inferno to also level all Embers to the highest potency for the duration of the channel, which will cause them to be removed at the end of the cast.',
                attributes: {
                    singleTargetDamage: 1,
                    aoeDamage: 2,
                    singleTargetHealing: 0,
                    aoeHealing: 0,
                    burstDamage: 1,
                    sustainDamage: 2,
                    crowdControl: 0,
                    utility: 0,
                    mobility: 0
                }
            }
        }
    ]
}

export default Knight;