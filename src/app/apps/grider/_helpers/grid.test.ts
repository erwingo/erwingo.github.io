// todo:

// import { deepEqual, equal } from 'assert';
// import { describe, it } from 'mocha';
// import * as gridHelpers from './grid';

// describe('Grid', () => {
//   it('should get correct grid dimensions with no margin', () => {
//     deepEqual(gridHelpers.getGridDimensions(500, 10), {
//       dimension: 50,
//       gap: 0,
//     });
//     deepEqual(gridHelpers.getGridDimensions(699, 10), {
//       dimension: 69,
//       gap: 9,
//     });
//   });

//   it('should get correct grid dimensions with margin', () => {
//     deepEqual(gridHelpers.getGridDimensions(500, 10, 10), {
//       dimension: 39,
//       gap: 0,
//     });
//     deepEqual(gridHelpers.getGridDimensions(699, 10, 10), {
//       dimension: 58,
//       gap: 9,
//     });
//   });

//   it('should get grid correct gridItem posDim with no margin', () => {
//     deepEqual(gridHelpers.getGridItemPosDim(0, 100, 1, 3), {
//       dim: 101,
//       pos: 0,
//     });
//     deepEqual(gridHelpers.getGridItemPosDim(1, 100, 1, 3), {
//       dim: 101,
//       pos: 101,
//     });
//     deepEqual(gridHelpers.getGridItemPosDim(2, 100, 1, 3), {
//       dim: 101,
//       pos: 202,
//     });
//     deepEqual(gridHelpers.getGridItemPosDim(3, 100, 1, 3), {
//       dim: 100,
//       pos: 303,
//     });
//     deepEqual(gridHelpers.getGridItemPosDim(4, 100, 1, 3), {
//       dim: 100,
//       pos: 403,
//     });
//     deepEqual(gridHelpers.getGridItemPosDim(0, 100, 3, 2), {
//       dim: 302,
//       pos: 0,
//     });
//     deepEqual(gridHelpers.getGridItemPosDim(1, 100, 3, 2), {
//       dim: 301,
//       pos: 101,
//     });
//     deepEqual(gridHelpers.getGridItemPosDim(2, 100, 3, 2), {
//       dim: 300,
//       pos: 202,
//     });
//     deepEqual(gridHelpers.getGridItemPosDim(3, 100, 3, 2), {
//       dim: 300,
//       pos: 302,
//     });
//     deepEqual(gridHelpers.getGridItemPosDim(4, 100, 3, 2), {
//       dim: 300,
//       pos: 402,
//     });
//   });

//   it('should get grid correct gridItem posDim with margin', () => {
//     deepEqual(gridHelpers.getGridItemPosDim(0, 100, 1, 3, 10), {
//       dim: 101,
//       pos: 10,
//     });
//     deepEqual(gridHelpers.getGridItemPosDim(1, 100, 1, 3, 10), {
//       dim: 101,
//       pos: 121,
//     });
//     deepEqual(gridHelpers.getGridItemPosDim(2, 100, 1, 3, 10), {
//       dim: 101,
//       pos: 232,
//     });
//     deepEqual(gridHelpers.getGridItemPosDim(3, 100, 1, 3, 10), {
//       dim: 100,
//       pos: 343,
//     });
//     deepEqual(gridHelpers.getGridItemPosDim(4, 100, 1, 3, 10), {
//       dim: 100,
//       pos: 453,
//     });
//     deepEqual(gridHelpers.getGridItemPosDim(0, 100, 3, 2, 10), {
//       dim: 322,
//       pos: 10,
//     });
//     deepEqual(gridHelpers.getGridItemPosDim(1, 100, 3, 2, 10), {
//       dim: 321,
//       pos: 121,
//     });
//     deepEqual(gridHelpers.getGridItemPosDim(2, 100, 3, 2, 10), {
//       dim: 320,
//       pos: 232,
//     });
//     deepEqual(gridHelpers.getGridItemPosDim(3, 100, 3, 2, 10), {
//       dim: 320,
//       pos: 342,
//     });
//     deepEqual(gridHelpers.getGridItemPosDim(4, 100, 3, 2, 10), {
//       dim: 320,
//       pos: 452,
//     });
//   });
// });
