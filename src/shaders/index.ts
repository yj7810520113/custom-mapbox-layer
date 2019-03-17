import { registerModule } from '../utils/shader-module';
// @ts-ignore
import common from './common.glsl';
// @ts-ignore
import project from './project.glsl';
// @ts-ignore
import point1VS from '../shaders/point-vs-mapbox.glsl';
// @ts-ignore
import point1FS from '../shaders/point-fs.glsl';
// @ts-ignore
import point2VS from '../shaders/point-vs.glsl';
// @ts-ignore
import lineFS from '../shaders/line-fs.glsl';
// @ts-ignore
import lineVS from '../shaders/line-vs.glsl';
// @ts-ignore
import line3DFS from '../shaders/line-3d-fs.glsl';
// @ts-ignore
import line3DVS from '../shaders/line-3d-vs.glsl';

export function compileBuiltinModules() {
    registerModule('point1', { vs: point1VS, fs: point1FS });
    registerModule('point2', { vs: point2VS, fs: point1FS });
    registerModule('common', { vs: common, fs: common });
    registerModule('project', { vs: project, fs: '' });
    registerModule('line', { vs: lineVS, fs: lineFS });
    registerModule('line3d', { vs: line3DVS, fs: line3DFS });
};