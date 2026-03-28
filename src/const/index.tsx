import type { StageConfig, Winner } from "../types";

export const winners: Winner[] = [
  { place: 3, name: "Team Nova", score: 893 },
  { place: 2, name: "Team Vega", score: 900 },
  { place: 1, name: "Team Orion", score: 950 },
];

export const stages: StageConfig = {
  third: { color: "bg-[#CD7F32]", icon: "🥉" , place: 3},
  second: { color: "bg-[#C0C0C0]", icon: "🥈" , place: 2}, 
  first: { color: "bg-[#f6c85b]", icon: "🏆" , place: 1},
  start: { color: "bg-[#261E0D]", icon: "▶️" , place: 0},
  final: { color: "bg-[#ff1100]", icon: "🎉" , place: 4},
};

export const stageEnum = {
  START: "start",
  STARTED: "started",
  FIRST: "first",
  SECOND: "second",
  THIRD: "third",
  FINAL: "final",
};
