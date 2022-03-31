const Pyromancer = {
    name: 'Pyromancer',
    description: 'Harnesses the elemental power of fire to deal ramping damage over time to a large amount of targets. This spec focuses on management of damage over time effects, exponential AoE damage, and features a mix of hitscan and projectile attacks.',
    color: 'red',
    passive: {
        name: 'Pyromancer\'s Echo',
        attributes: {
            'Single Target Damage': 0,
            'AoE Damage': 0,
            'Single Target Healing': 0,
            'AoE Healing': 0,
            'Burst Damage': 0,
            'Sustain Damage': 1,
            'Crowd Control': 0,
            'Utility': 0,
            'Mobility': 0,
        }
    },
    abilities: [
        {
            base: {
                id: 1,
                name: 'Flame Lance',
                description: 'Shoot a piercing lance of fire forward in a line, igniting a number of targets hit based on the caster\'s current ember level.',
                attributes: {
                    'Single Target Damage': 1,
                    'AoE Damage': 2,
                    'Single Target Healing': 0,
                    'AoE Healing': 0,
                    'Burst Damage': 1,
                    'Sustain Damage': 2,
                    'Crowd Control': 0,
                    'Utility': 0,
                    'Mobility': 0,
                }
            },
            talent1: {
                id: 2,
                name: 'Cauterizing Lance',
                description: 'Flame Lance now also includes friendly targets in its target cap, healing them over time.',
                attributes: {
                    'Single Target Damage': 1,
                    'AoE Damage': 2,
                    'Single Target Healing': 1,
                    'AoE Healing': 2,
                    'Burst Damage': 1,
                    'Sustain Damage': 2,
                    'Crowd Control': 0,
                    'Utility': 0,
                    'Mobility': 0
                }
            },
            talent2: {
                id: 3,
                name: 'Focused Lance',
                description: 'Flame Lance now hits the first target in the line significantly harder, but no longer ignites targets beyond the first.',
                attributes: {
                    'Single Target Damage': 3,
                    'AoE Damage': 1,
                    'Single Target Healing': 0,
                    'AoE Healing': 0,
                    'Burst Damage': 3,
                    'Sustain Damage': 1,
                    'Crowd Control': 0,
                    'Utility': 0,
                    'Mobility': 0
                }
            }
        },
        {
            base: {
                id: 4,
                name: 'Magma',
                description: 'Hurl a glob of magma at enemies that explodes for high instant damage on impact.',
                attributes: {
                    'Single Target Damage': 1,
                    'AoE Damage': 3,
                    'Single Target Healing': 0,
                    'AoE Healing': 0,
                    'Burst Damage': 3,
                    'Sustain Damage': 1,
                    'Crowd Control': 0,
                    'Utility': 0,
                    'Mobility': 0
                }
            },
            talent1: {
                id: 5,
                name: 'Lava Pool',
                description: 'Reduces Magma\'s explosion damage, but causes it to leave behind a puddle dealing ticking fire damage.',
                attributes: {
                    'Single Target Damage': 1,
                    'AoE Damage': 3,
                    'Single Target Healing': 0,
                    'AoE Healing': 0,
                    'Burst Damage': 2,
                    'Sustain Damage': 2,
                    'Crowd Control': 0,
                    'Utility': 0,
                    'Mobility': 0
                }
            },
            talent2: {
                id: 6,
                name: 'Dunk',
                description: 'Causes the caster to instantly detonate Magma at their own feet, increasing explosion size and damage.',
                attributes: {
                    'Single Target Damage': 1,
                    'AoE Damage': 3,
                    'Single Target Healing': 0,
                    'AoE Healing': 0,
                    'Burst Damage': 3,
                    'Sustain Damage': 1,
                    'Crowd Control': 0,
                    'Utility': 0,
                    'Mobility': 0
                }
            }
        },
        {
            base: {
                id: 7,
                name: 'Inferno',
                description: 'Incite a storm of fire from each Ember, causing them to burn nearby enemies for a short duration. This extinguishes all high-level Embers at the end of the cast.',
                attributes: {
                    'Single Target Damage': 1,
                    'AoE Damage': 5,
                    'Single Target Healing': 0,
                    'AoE Healing': 0,
                    'Burst Damage': 5,
                    'Sustain Damage': 2,
                    'Crowd Control': 0,
                    'Utility': 0,
                    'Mobility': 0
                }
            },
            talent1: {
                id: 8,
                name: 'Expulsion',
                description: 'Causes Inferno\'s radius to be larger, but Inferno now also knocks targets away on each tick.',
                attributes: {
                    'Single Target Damage': 1,
                    'AoE Damage': 5,
                    'Single Target Healing': 0,
                    'AoE Healing': 0,
                    'Burst Damage': 5,
                    'Sustain Damage': 2,
                    'Crowd Control': 2,
                    'Utility': 0,
                    'Mobility': 0
                }
            },
            talent2: {
                id: 9,
                name: 'Flare Up',
                description: 'Causes Inferno to also level all Embers to the highest potency for the duration of the channel, which will cause them to be removed at the end of the cast.',
                attributes: {
                    'Single Target Damage': 1,
                    'AoE Damage': 5,
                    'Single Target Healing': 0,
                    'AoE Healing': 0,
                    'Burst Damage': 5,
                    'Sustain Damage': 1,
                    'Crowd Control': 0,
                    'Utility': 0,
                    'Mobility': 0
                }
            }
        }
    ]
}

export default Pyromancer;