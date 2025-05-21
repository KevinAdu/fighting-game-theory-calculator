import type { ActionRiskRow } from "$lib/types";

export function flattenRiskMatrix(
    input: {
        defenderAction: string;
        risks: Record<string, number>;
    }[]
): ActionRiskRow[] {
    const result: ActionRiskRow[] = [];

    for (const row of input) {
        for (const [aggressorAction, risk] of Object.entries(row.risks)) {
            result.push({
                defenderAction: row.defenderAction,
                aggressorAction,
                risk
            });
        }
    }

    return result;
}

export function transformToRowData(matrix: ActionRiskRow[]): any[] {
    const grouped = new Map<string, Record<string, any>>();

    for (const { defenderAction, aggressorAction, risk } of matrix) {
        if (!grouped.has(defenderAction)) {
            grouped.set(defenderAction, { defenderAction });
        }
        grouped.get(defenderAction)![aggressorAction] = risk;
    }

    return Array.from(grouped.values());
}

function getUniqueAgressorActions(matrix: ActionRiskRow[]): string[] {
    return Array.from(new Set(matrix.map((entry) => entry.aggressorAction)));
}

export function generateColumnDefs(matrix: ActionRiskRow[]) {
    const opponentActions = getUniqueAgressorActions(matrix);
    return [
        { headerName: '', field: 'defenderAction', pinned: 'left' },
        ...opponentActions.map((action) => ({
            headerName: action,
            field: action
        }))
    ];
}