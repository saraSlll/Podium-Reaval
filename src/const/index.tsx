import type { StageConfig, Winner } from "../types";

export const winners: Winner[] = [
  { place: 3, name: "Noa", score: 893 },
  { place: 2, name: "Ron", score: 900 },
  { place: 1, name: "Lee", score: 1234 },
];

export const stages: StageConfig = {
  third: { color: "bg-[#CD7F32]", place: 3 },
  second: { color: "bg-[#C0C0C0]", place: 2 },
  first: { color: "bg-[#f6c85b]", place: 1 },
  start: { color: "bg-[#261E0D]", place: 0 },
  final: { color: "bg-[#ff1100]", place: 4 },
};
