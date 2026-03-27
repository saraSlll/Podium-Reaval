import type { StageConfig, Winner } from "../types";

export const winners: Winner[] = [
    { place: 3, name: 'Team Nova', score: 893 },
    { place: 2, name: 'Team Vega', score: 900 },
    { place: 1, name: 'Team Orion', score: 950 },
];

export const stages: StageConfig = {
    first: { color: 'bg-[#FFD700]', icon: '🏆'}, // Gold
    second: {color: 'bg-[#C0C0C0]', icon: '🥈'}, // Silver
    third: {color: 'bg-[#CD7F32]', icon: '🥉'}, // Bronze
}

export const stageEnum = {
    START: 'start',
    STARTED: 'started',
    FIRST: 'first',
    SECOND: 'second',
    THIRD: 'third',
    FINAL: 'final'
};