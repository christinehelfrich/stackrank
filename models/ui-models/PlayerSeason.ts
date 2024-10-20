export interface PlayerSeason {
    id: number;
    playerId: number;
    divisionId: number;
    seasonId: number;
    description: string;
    active: boolean;
    registrationDate: Date;
    evaluationNumber: number;
    seasonsPlayed: number;
    notes: string;
}