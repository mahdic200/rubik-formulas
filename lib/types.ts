export type Vector = {
  from: Coordinate;
  to: Coordinate;
};

export type Coordinate = [number, number];

export type PLLFormula = {
  vectors: Vector[];
  alg: string;
  arrowScale?: number;
};
