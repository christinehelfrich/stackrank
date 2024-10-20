export interface EvaluationUserRole {
    id: number;
    userRoleId: number;
    evaluationEventId: number;
    active: boolean;
    invitationStatusId: number;
    invitationAcceptedOn: Date;
}