import { atom } from "jotai";

export let method = atom("weighted threshold");
export let graphAtom = atom(null);
export let thresholdAtom = atom(0);
export const minWeightAtom = atom(0);
export const maxWeightAtom = atom(0);
export let keepIrrelevantAtom = atom(false);
export let newGraphAtom = atom(null);
