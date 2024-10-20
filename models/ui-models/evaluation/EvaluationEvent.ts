export interface EvaluationEvent {
    id: number;
    seasonId: number;
    divisionId: number;
    name: string;
    date: Date;
    scoreMin: number;
    scoreMax: number;
    description: string;
    active: boolean;
    evaluationEventStatusId: number;
}