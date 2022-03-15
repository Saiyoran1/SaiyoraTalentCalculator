const Stormbringer = {
    name: 'Stormbringer',
    description: 'Harnesses the power of the storm to deal damage and crowd control to a large amount of targets. This spec focuses on managing summoned objects and vulnerability debuffs, and features mostly hitscan and area of effect attacks.',
    color: 'pink',
    abilities: [
        {
            base: {
                id: 10,
                name: 'Lightning Strike',
                description: 'Zap an enemy with lightning in a quick instant attack. The bolt will chain to a few nearby enemies, dealing reduced damage to them as well.',
                attributes: [
                    'AoE Damage', 'Burst Damage'
                ]
            },
            talent1: {
                id: 11,
                name: 'Static Charge',
                description: 'Causes the initial target of Lightning Strike to be stunned for 1 second on hit. This effect cannot hit the same target more than once every 5 seconds.',
                attributes: [
                    'AoE Damage', 'Burst Damage', 'Crowd Control'
                ]
            },
            talent2: {
                id: 12,
                name: 'Hyper Charge',
                description: 'Causes Lightning Strike to chain to fewer targets, but no longer reduce damage on each jump.',
                attributes: [
                    'AoE Damage', 'Burst Damage'
                ]
            }
        },
        {
            base: {
                id: 13,
                name: 'Tempest',
                description: 'Summon a tornado that travels forward, dealing damage to nearby enemies. Tornadoes grow more powerful after time, but constantly pull back toward their owner, disappating if out of line of sight for too long or upon hitting their owner.',
                attributes: [
                    'AoE Damage', 'Sustain Damage'
                ]
            },
            talent1: {
                id: 14,
                name: 'Gale Winds',
                description: 'Causes the Tempest to slow enemies near it and pull them toward the center of the tornado, but reduces its damage.',
                attributes: [
                    'AoE Damage', 'Sustain Damage', 'Crowd Control'
                ]
            },
            talent2: {
                id: 15,
                name: 'Magnetic Storm',
                description: 'Lightning Strike causes any existing Tempests to move toward the initial target, but Tempests now move faster.',
                attributes: [
                    'AoE Damage', 'Sustain Damage'
                ]
            }
        },
        {
            base: {
                id: 16,
                name: 'Windburst',
                description: 'Attack with a gust of wind in a cone, knocking back and damaging enemies. Also knocks away Tempests.',
                attributes: [
                    'AoE Damage', 'Burst Damage', 'Crowd Control'
                ]
            },
            talent1: {
                id: 17,
                name: 'Radial Burst',
                description: 'Causes Windburst to affect everything in a radius around the caster instead of a cone, but reduces its range.',
                attributes: [
                    'AoE Damage', 'Burst Damage', 'Crowd Control'
                ]
            },
            talent2: {
                id: 18,
                name: 'Echo Burst',
                description: 'Causes Windburst to no longer deal any damage, but its knockback effect will happen repeatedly for a short time after cast.',
                attributes: [
                    'Crowd Control'
                ]
            }
        }
    ]
}

export default Stormbringer;