export const formatScoreToPercent = (totalScore: number, achievedScore: number): number => {
    if (totalScore === 0) {
        throw new Error("Total score cannot be zero.");
    }
    const percentage = (achievedScore / totalScore) * 100;
    return Math.round(percentage); // Rounds to the nearest whole number
}