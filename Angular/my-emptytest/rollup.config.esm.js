import config from './rollup.config.umd.js';
import {nameLibrary,PATH_DIST} from './config-library.js'
config.output.format = "es";
config.output.file = PATH_DIST+nameLibrary+".esm.js";
export default config;

/*
https://gist.github.com/Rich-Harris/d472c50732dab03efeb37472b08a3f32
*/