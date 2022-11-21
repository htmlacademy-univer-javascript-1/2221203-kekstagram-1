import { createDescription } from './data.js';
import { descriptionsCount } from './util.js';

Array.from({length: descriptionsCount}).map((value, index) => createDescription(index + 1));
