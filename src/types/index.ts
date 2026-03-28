
export type StageConfig = {
  third: { color: string; icon: string, place: number };
  second: { color: string; icon: string, place: number };
  first: { color: string; icon: string, place: number };
  start: { color: string; icon: string, place: number };
  final: { color: string; icon: string, place: number };
};

export type Winner = {
  place: number;
  name: string;
  score: number;
};
