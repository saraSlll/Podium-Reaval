export type StageConfig = {
  third: { color: string; place: number };
  second: { color: string; place: number };
  first: { color: string; place: number };
  start: { color: string; place: number };
  final: { color: string; place: number };
};

export type Winner = {
  place: number;
  name: string;
  score: number;
};
