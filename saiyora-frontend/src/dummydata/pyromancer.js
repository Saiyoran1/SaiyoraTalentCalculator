const Pyromancer = {
    name: 'Pyromancer',
    description: 'Harnesses the elemental power of fire to deal ramping damage over time to a large amount of targets. This spec focuses on management of damage over time effects, exponential AoE damage, and features a mix of hitscan and projectile attacks.',
    color: 'red',
    abilities: [
        {
            base: {
                id: 1,
                name: 'Flame Lance',
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
                id: 2,
                name: 'Cauterizing Lance',
                description: 'Flame Lance now also includes friendly targets in its target cap, healing them over time.',
                attributes: {
                    singleTargetDamage: 1,
                    aoeDamage: 2,
                    singleTargetHealing: 1,
                    aoeHealing: 2,
                    burstDamage: 1,
                    sustainDamage: 2,
                    crowdControl: 0,
                    utility: 0,
                    mobility: 0
                }
            },
            talent2: {
                id: 3,
                name: 'Focused Lance',
                description: 'Flame Lance now hits the first target in the line significantly harder, but no longer ignites targets beyond the first.',
                attributes: {
                    singleTargetDamage: 3,
                    aoeDamage: 1,
                    singleTargetHealing: 0,
                    aoeHealing: 0,
                    burstDamage: 3,
                    sustainDamage: 1,
                    crowdControl: 0,
                    utility: 0,
                    mobility: 0
                }
            }
        },
        {
            base: {
                id: 4,
                name: 'Magma',
                description: 'Hurl a glob of magma at enemies that explodes for high instant damage on impact.',
                attributes: {
                    singleTargetDamage: 1,
                    aoeDamage: 3,
                    singleTargetHealing: 0,
                    aoeHealing: 0,
                    burstDamage: 3,
                    sustainDamage: 1,
                    crowdControl: 0,
                    utility: 0,
                    mobility: 0
                }
            },
            talent1: {
                id: 5,
                name: 'Lava Pool',
                description: 'Reduces Magma\'s explosion damage, but causes it to leave behind a puddle dealing ticking fire damage.',
                attributes: {
                    singleTargetDamage: 1,
                    aoeDamage: 3,
                    singleTargetHealing: 0,
                    aoeHealing: 0,
                    burstDamage: 2,
                    sustainDamage: 2,
                    crowdControl: 0,
                    utility: 0,
                    mobility: 0
                }
            },
            talent2: {
                id: 6,
                name: 'Dunk',
                description: 'Causes the caster to instantly detonate Magma at their own feet, increasing explosion size and damage.',
                attributes: {
                    singleTargetDamage: 1,
                    aoeDamage: 3,
                    singleTargetHealing: 0,
                    aoeHealing: 0,
                    burstDamage: 3,
                    sustainDamage: 1,
                    crowdControl: 0,
                    utility: 0,
                    mobility: 0
                }
            }
        },
        {
            base: {
                id: 7,
                name: 'Inferno',
                description: 'Incite a storm of fire from each Ember, causing them to burn nearby enemies for a short duration. This extinguishes all high-level Embers at the end of the cast.',
                attributes: {
                    singleTargetDamage: 1,
                    aoeDamage: 5,
                    singleTargetHealing: 0,
                    aoeHealing: 0,
                    burstDamage: 5,
                    sustainDamage: 2,
                    crowdControl: 0,
                    utility: 0,
                    mobility: 0
                }
            },
            talent1: {
                id: 8,
                name: 'Expulsion',
                description: 'Causes Inferno\'s radius to be larger, but Inferno now also knocks targets away on each tick.',
                attributes: {
                    singleTargetDamage: 1,
                    aoeDamage: 5,
                    singleTargetHealing: 0,
                    aoeHealing: 0,
                    burstDamage: 5,
                    sustainDamage: 2,
                    crowdControl: 2,
                    utility: 0,
                    mobility: 0
                }
            },
            talent2: {
                id: 9,
                name: 'Flare Up',
                description: 'Causes Inferno to also level all Embers to the highest potency for the duration of the channel, which will cause them to be removed at the end of the cast.',
                attributes: {
                    singleTargetDamage: 1,
                    aoeDamage: 5,
                    singleTargetHealing: 0,
                    aoeHealing: 0,
                    burstDamage: 5,
                    sustainDamage: 1,
                    crowdControl: 0,
                    utility: 0,
                    mobility: 0
                }
            }
        }
    ]
}

export default Pyromancer;