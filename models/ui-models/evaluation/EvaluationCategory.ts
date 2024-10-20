export interface EvaluationCategory {
    id: number;
    seasonId: number;
    name: string;
    scoreMin: number;
    scoreMax: number;
    description: string;
    categoryOrder: any;
    inputType: string;
    sportPositionId: number;
}