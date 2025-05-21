import type { ActionRisk } from "$lib/types";

export const riskMatrix: ActionRisk[] = [
    {
        defenderAction: 'Block',
        risks: {
            Throw: 1200,
        }
    },
    {
        defenderAction: 'Delay Throw',
        risks: {
            Throw: 0,
        }
    }
];