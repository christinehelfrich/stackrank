import { evaluationData } from "../../data/mock/evaluationData"
import { evaluationPlayerData } from "../../data/mock/evaluationPlayerData"


export const getEvaluationCategories = (season: number) => {
    return fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/evaluation/getevaluationcategories?seasonId=1`)
        .then(res => res.json())
        .then(json => {
            return json
        })
        .catch(err => {
            return({msg: 'an error occurred', error: err})
        })
}

export const getAllPlayersInEvaluation = async () => {
    // return await evaluationPlayerData

    return fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/player/getplayers?seasonId=1&divisionId=4`)
        .then(res => res.json())
        .then(json => {
            return json
        })
        .catch(err => {
            return({msg: 'an error occurred', error: err})
        })
}

export const getAllEvaluations = () => {
    return fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/evaluation/getevaluationevents?seasonId=1`)
        .then(res => res.json())
        .then(json => {
            return json
        })
        .catch(err => {
            return({msg: 'an error occurred', error: err})
        })
}


// UPDATES
// differentiate between unanswered and answered questions
// metered coloring
// 'overall' score per category ??