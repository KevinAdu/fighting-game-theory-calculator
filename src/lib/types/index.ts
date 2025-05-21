export type AggressorActions = ['Throw', 'Meaty Attack', 'Shimmy'];
export type AggressorAction = AggressorActions[number];

export type RiskMap = {
    [K in AggressorAction]?: number;
};

export type ActionRisk = {
    defenderAction: string;
    risks: RiskMap;
};

export type ActionRiskRow = {
    defenderAction: string;
    aggressorAction: string;
    risk: number;
};