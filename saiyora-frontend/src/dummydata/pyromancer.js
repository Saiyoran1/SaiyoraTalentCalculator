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
                attributes: [
                    'AoE Damage', 'Sustain Damage'
                ]
            },
            talent1: {
                id: 2,
                name: 'Cauterizing Lance',
                description: 'Flame Lance now also includes friendly targets in its target cap, healing them over time.',
                attributes: [
                    'AoE Damage', 'Sustain Damage', 'AoE Healing', 'Sustain Healing'
                ]
            },
            talent2: {
                id: 3,
                name: 'Focused Lance',
                description: 'Flame Lance now hits the first target in the line significantly harder, but no longer ignites targets beyond the first.'
            }
        },
        {
            base: {
                id: 4,
                name: 'Magma',
                description: 'Hurl a glob of magma at enemies that explodes for high instant damage on impact.',
                attributes: [
                    'AoE Damage', 'Burst Damage'
                ]
            },
            talent1: {
                id: 5,
                name: 'Lava Pool',
                description: 'Reduces Magma\'s explosion damage, but causes it to leave behind a puddle dealing ticking fire damage.',
                attributes: [
                    'AoE Damage', 'Sustain Damage'
                ]
            },
            talent2: {
                id: 6,
                name: 'Dunk',
                description: 'Causes the caster to instantly detonate Magma at their own feet, increasing explosion size and damage.',
                attributes: [
                    'AoE Damage', 'Burst Damage'
                ]
            }
        },
        {
            base: {
                id: 7,
                name: 'Inferno',
                description: 'Incite a storm of fire from each Ember, causing them to burn nearby enemies for a short duration. This extinguishes all high-level Embers at the end of the cast.',
                attributes: [
                    'AoE Damage', 'Burst Damage'
                ]
            },
            talent1: {
                id: 8,
                name: 'Expulsion',
                description: 'Causes Inferno\'s radius to be larger, but Inferno now also knocks targets away on each tick.',
                attributes: [
                    'AoE Damage', 'Burst Damage', 'Crowd Control'
                ]
            },
            talent2: {
                id: 9,
                name: 'Flare Up',
                description: 'Causes Inferno to also level all Embers to the highest potency for the duration of the channel, which will cause them to be removed at the end of the cast.',
                attributes: [
                    'AoE Damage', 'Burst Damage'
                ]
            }
        }
    ]
}

export default Pyromancer;