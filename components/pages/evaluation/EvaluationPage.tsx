import React, { useEffect, useMemo, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { getEvaluationCategories } from '../../../services/evaluations/evaluationsService';
import { EvaluationCategory } from '../../../models/ui-models/evaluation/EvaluationCategory';
import EvaluationCriteriaItem from '../../molecules/EvaluationCriteriaItem';
import { globalStyle, globalVariables } from '../../../styles/styles';
import { useTheme } from '@react-navigation/native';
import { getAverageValue } from '~/utils/formatting/averageValue';

const EvaluationPage = ({ route, navigation, onAverageScoreChange }: any) => {
    const { colors } = useTheme();
    const globalStyles: any = useMemo(() => globalStyle(colors), [colors]);
    const styles: any = useMemo(() => createStyles(colors), [colors]);
    const [isLoading, setisLoading] = useState(true)
    const [error, setError] = useState('')
    const [evaluationCriteria, setEvaluationCriteria] = useState([])
    const [averageScore, setAverageScore] = useState<number>(0)
    const [criteriaScores, setCriteriaScores] = useState<any>({})
    const [criteriaTouchedCount, setCriteriaTouchedCount] = useState<number>(0)

    useEffect(() => {
        onAverageScoreChange('-')
        setisLoading(true)
        getEvaluationCategories(1)
            .then((res) => {
            setEvaluationCriteria(res)
            setisLoading(false)
            })
            .catch((err) => {
                setError('there was an error...')
                setisLoading(false)
            })
    }, [])

    const onScoreChanged = (score: any) => {
        
        if (!(score.criteriaId in criteriaScores)) {
            setCriteriaTouchedCount(criteriaTouchedCount + 1)
        }
        criteriaScores[score.criteriaId] = score.scoreSelected
        setCriteriaScores(criteriaScores)
        setAverageScore(getAverageValue(criteriaScores))
        onAverageScoreChange(getAverageValue(criteriaScores))

    }

    const sortCriteriaFunction = (a: any, b: any) => {
        return a.Order > b.Order ? 1 : -1
    }

  return (
    <View>
        {isLoading && (
            <Text style={[styles.container, globalStyles.p]}>Loading....</Text>
        )}
        {!isLoading && error != '' && (
            <Text style={styles.container}>{error}</Text>
        )}

        {!isLoading && error === '' && (
    <ScrollView>
        {evaluationCriteria?.map((criteria: any, index: number) => (
            <View key={index}>
                <View style={styles.banner}>
                    <Text style={globalStyles.h2}>{criteria.Name}</Text>
                </View>
                <View style={styles.container}>
                   {criteria.EvaluationCategories.map((item: any, index: number) => (
                    <EvaluationCriteriaItem key={index} criteria={item} onScoreChangedEvent={onScoreChanged}></EvaluationCriteriaItem>
                   ))}
                </View>
            </View>
        ))}
    </ScrollView>
        )}
    </View>
  )
}

const createStyles = (colors: any) => StyleSheet.create({
    container: {
      margin: 15,
    },
    banner: {
        backgroundColor: colors.bannerBackgroundColor,
        padding: 5
    },
    bannerText: {
        fontWeight: 'bold',
        fontSize: 12,
        textTransform: 'uppercase'
    }
  });

export default EvaluationPage
