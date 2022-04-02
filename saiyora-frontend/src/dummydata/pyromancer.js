import Attribute from './attributes';

const Pyromancer = {
    name: 'Pyromancer',
    description: 'Harnesses the elemental power of fire to deal ramping damage over time to a large amount of targets. This spec focuses on management of damage over time effects, exponential AoE damage, and features a mix of hitscan and projectile attacks.',
    color: 'red',
    passive: {
        name: 'Pyromancer\'s Echo',
        attributes: {
            [Attribute.SustainedDamage]: 1
        }
    },
    abilities: [
        {
            base: {
                id: 1,
                name: 'Flame Lance',
                description: 'Shoot a piercing lance of fire forward in a line, igniting a number of targets hit based on the caster\'s current ember level.',
                attributes: {
                    [Attribute.SingleTargetDamage]: 1, 
                    [Attribute.AoEDamage]: 2,
                    [Attribute.BurstDamage]: 1,
                    [Attribute.SustainedDamage]: 2
                }
            },
            talent1: {
                id: 2,
                name: 'Cauterizing Lance',
                description: 'Flame Lance now also includes friendly targets in its target cap, healing them over time.',
                attributes: {
                    [Attribute.SingleTargetDamage]: 1, 
                    [Attribute.AoEDamage]: 2,
                    [Attribute.BurstDamage]: 1,
                    [Attribute.SustainedDamage]: 2,
                    [Attribute.SingleTargetHealing]: 1,
                    [Attribute.AoEHealing]: 2
                }
            },
            talent2: {
                id: 3,
                name: 'Focused Lance',
                description: 'Flame Lance now hits the first target in the line significantly harder, but no longer ignites targets beyond the first.',
                attributes: {
                    [Attribute.SingleTargetDamage]: 3, 
                    [Attribute.AoEDamage]: 2,
                    [Attribute.BurstDamage]: 3,
                    [Attribute.SustainedDamage]: 1
                }
            }
        },
        {
            base: {
                id: 4,
                name: 'Magma',
                description: 'Hurl a glob of magma at enemies that explodes for high instant damage on impact.',
                attributes: {
                    [Attribute.SingleTargetDamage]: 1, 
                    [Attribute.AoEDamage]: 3,
                    [Attribute.BurstDamage]: 3,
                    [Attribute.SustainedDamage]: 1
                }
            },
            talent1: {
                id: 5,
                name: 'Lava Pool',
                description: 'Reduces Magma\'s explosion damage, but causes it to leave behind a puddle dealing ticking fire damage.',
                attributes: {
                    [Attribute.SingleTargetDamage]: 1, 
                    [Attribute.AoEDamage]: 3,
                    [Attribute.BurstDamage]: 2,
                    [Attribute.SustainedDamage]: 2
                }
            },
            talent2: {
                id: 6,
                name: 'Dunk',
                description: 'Causes the caster to instantly detonate Magma at their own feet, increasing explosion size and damage.',
                attributes: {
                    [Attribute.SingleTargetDamage]: 1, 
                    [Attribute.AoEDamage]: 3,
                    [Attribute.BurstDamage]: 3,
                    [Attribute.SustainedDamage]: 1
                }
            }
        },
        {
            base: {
                id: 7,
                name: 'Inferno',
                description: 'Incite a storm of fire from each Ember, causing them to burn nearby enemies for a short duration. This extinguishes all high-level Embers at the end of the cast.',
                attributes: {
                    [Attribute.SingleTargetDamage]: 1, 
                    [Attribute.AoEDamage]: 5,
                    [Attribute.BurstDamage]: 5,
                    [Attribute.SustainedDamage]: 2
                }
            },
            talent1: {
                id: 8,
                name: 'Expulsion',
                description: 'Causes Inferno\'s radius to be larger, but Inferno now also knocks targets away on each tick.',
                attributes: {
                    [Attribute.SingleTargetDamage]: 1, 
                    [Attribute.AoEDamage]: 5,
                    [Attribute.BurstDamage]: 5,
                    [Attribute.SustainedDamage]: 2,
                    [Attribute.CrowdControl]: 2,
                }
            },
            talent2: {
                id: 9,
                name: 'Flare Up',
                description: 'Causes Inferno to also level all Embers to the highest potency for the duration of the channel, which will cause them to be removed at the end of the cast.',
                attributes: {
                    [Attribute.SingleTargetDamage]: 1, 
                    [Attribute.AoEDamage]: 5,
                    [Attribute.BurstDamage]: 5,
                    [Attribute.SustainedDamage]: 1
                }
            }
        }
    ]
}

export default Pyromancer;