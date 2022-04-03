import Pyromancer from './Ancient/pyromancer';
import Stormbringer from './Ancient/stormbringer';
import Shaman from './Ancient/shaman';
import Spiritualist from './Ancient/spiritualist';
import Knight from './Ancient/knight';
import Mutilator from './Modern/mutilator';
import Chronomancer from './Modern/chronomancer';
import Telekinetic from './Modern/telekinetic';
import Illusionist from './Modern/illusionist';
import Soldier from './Modern/soldier';

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