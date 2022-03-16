import Pyromancer from './pyromancer';
import Stormbringer from './stormbringer';
import Shaman from './shaman';
import Spiritualist from './spiritualist';
import Knight from './knight';
import Mutilator from './mutilator';
import Chronomancer from './chronomancer';
import Telekinetic from './telekinetic';
import Illusionist from './illusionist';
import Soldier from './soldier';

const ANCIENTSPECS = [
    Pyromancer,
    Stormbringer,
    Shaman,
    Spiritualist,
    Knight
];

const MODERNSPECS = [
    Mutilator,
    Chronomancer,
    Telekinetic,
    Illusionist,
    Soldier
]

const MAXMODERNSPELLS = 8;

export {ANCIENTSPECS, MODERNSPECS, MAXMODERNSPELLS}