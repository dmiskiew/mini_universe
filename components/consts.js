const TEXTURES_PATH = './textures/';

const MAP_HTML_CONTAINER = document.querySelector('#container');

const DELAY_TIME = 33;
const BLOCKS_PER_TICK = 10;

const FLOWER_ON_GRASS_CHANCE = 0.05;
const GRASS_GROWING_ATTEMPTS = 10;
const FLOWER_GROWING_ATTEMPTS = 10;
const CREEPER_GROWING_ATTEMPTS = 5;

const TREE_STRUC = [['all', 'leaves', 'leaves', 'leaves', 'all'],
                    ['leaves', 'leaves', 'leaves','leaves', 'leaves'],
                    ['leaves', 'leaves', 'wood','leaves', 'leaves'],
                    ['leaves', 'leaves', 'wood','leaves', 'leaves'],
                    ['all', 'all', 'wood', 'all', 'all'],
                    ['all', 'all', 'wood', 'all', 'all']]
