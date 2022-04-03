import Attribute from '../attributes';

const Mutilator = {
    name: 'Mutilator',
    description: 'This is a mutilator lol',
    color: 'red',
    passive: {
        name: 'Mutilator\'s Echo',
        attributes: {
            [Attribute.SustainedDamage]: 3,
        }
    },
    weapon: {
        id: 46,
        name: 'Shotgun',
        description: 'A powerful shotgun to destroy enemies at close range.',
        attributes: {
            [Attribute.SingleTargetDamage]: 3,
            [Attribute.AoEDamage]: 2,
            [Attribute.BurstDamage]: 4,
            [Attribute.SustainedDamage]: 2
        }
    },
    abilities: [
        {
            id: 47,
            name: 'Mutilation: Enlarge',
            description: 'This enlarges you I guess.',
            attributes: {},
            specLock: true
        },
        {
            id: 48,
            name: 'Mutilation: Transform',
            description: 'Sheep? Sheep.',
            attributes: {},
            specLock: false
        },
        {
            id: 49,
            name: 'Metamorphosis',
            description: 'This makes you big scary demon boy.',
            attributes: {},
            specLock: false
        }
    ]
}

export default Mutilator;