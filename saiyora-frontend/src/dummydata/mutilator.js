import Attribute from './attributes';

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
    abilities: [
        {
            id: 46,
            name: 'Mutilation: Enlarge',
            description: 'This enlarges you I guess.',
            attributes: {},
            specLock: true
        },
        {
            id: 47,
            name: 'Mutilation: Transform',
            description: 'Sheep? Sheep.',
            attributes: {},
            specLock: false
        },
        {
            id: 48,
            name: 'Metamorphosis',
            description: 'This makes you big scary demon boy.',
            attributes: {},
            specLock: false
        }
    ]
}

export default Mutilator;