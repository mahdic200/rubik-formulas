import { PLLFormula } from "./types";

export const PLLs: PLLFormula[] = [
  {
    vectors: [
      { from: [2, 1], to: [2, 3] },
      { from: [2, 3], to: [2, 1] },
      { from: [3, 2], to: [1, 2] },
      { from: [1, 2], to: [3, 2] },
    ],
    alg: "M2 U M2 U2 M2 U M2",
  },
  {
    vectors: [
      { from: [2, 1], to: [1, 2] },
      { from: [1, 2], to: [2, 1] },
      { from: [3, 2], to: [2, 3] },
      { from: [2, 3], to: [3, 2] },
    ],
    alg: "M2 U M2 M' U2 M2 U2 M' U2",
  },
  {
    vectors: [
      { from: [1, 2], to: [3, 2] },
      { from: [3, 2], to: [2, 3] },
      { from: [2, 3], to: [1, 2] },
    ],
    alg: "R2 U[R U R' U'] R' U' R' U R'",
    arrowScale: 90,
  },
  {
    vectors: [
      { from: [3, 2], to: [1, 2] },
      { from: [1, 2], to: [2, 3] },
      { from: [2, 3], to: [3, 2] },
    ],
    alg: "R U' R U R U R U' R' U' R2",
    arrowScale: 90,
  },
  {
    vectors: [
      { from: [1, 3], to: [3, 1] },
      { from: [3, 1], to: [3, 3] },
      { from: [3, 3], to: [1, 3] },
    ],
    alg: "X R' U R' D2 R U' R' D2 R2",
    arrowScale: 95,
  },
  {
    vectors: [
      { from: [1, 3], to: [3, 3] },
      { from: [3, 3], to: [3, 1] },
      { from: [3, 1], to: [1, 3] },
    ],
    alg: "X' R2 U2 R D R' U2 R D' R",
    arrowScale: 95,
  },
  {
    vectors: [
      { from: [3, 1], to: [3, 3] },
      { from: [3, 3], to: [3, 1] },
      { from: [1, 2], to: [3, 2] },
      { from: [3, 2], to: [1, 2] },
    ],
    alg: "[R U R' U'] R' F R2 U' R' U' R U R' F'",
  },
  {
    vectors: [
      { from: [3, 1], to: [3, 3] },
      { from: [3, 3], to: [3, 1] },
      { from: [3, 2], to: [2, 3] },
      { from: [2, 3], to: [3, 2] },
    ],
    alg: "R U R' F' [R U R' U'] R' F R2 U' R' U'",
  },
  {
    vectors: [
      { from: [3, 1], to: [3, 3] },
      { from: [3, 3], to: [3, 1] },
      { from: [3, 2], to: [2, 1] },
      { from: [2, 1], to: [3, 2] },
    ],
    alg: "U' R' U L' U2 R U' R' U2 R L",
  },
  {
    vectors: [
      { from: [2, 1], to: [1, 2] },
      { from: [1, 2], to: [2, 1] },
      { from: [1, 1], to: [3, 3] },
      { from: [3, 3], to: [1, 1] },
    ],
    alg: "F R U' R' U' R U R' F' [R U R' U'] [R' F R F']",
  },
];
