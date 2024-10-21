import React, { useEffect, useMemo, useState } from 'react'
import { View, Button, Text, StyleSheet, ScrollView } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EventBox from '../organisms/EventBox';
import EvaluationListPage from './evaluation/EvaluationListPage';
import EvaluationPage from './evaluation/EvaluationPage';
import { globalStyle } from '../../styles/styles';
import { getAllEvaluations } from '../../services/evaluations/evaluationsService';
import { useTheme } from '@react-navigation/native';
import EvaluationHeaderTitle from '../molecules/EvaluationHeaderTitle';
import { useFocusEffect } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export const EventsBasePage = (props: { navigation: any}) => {
  const { colors } = useTheme();
  const [avgScore, setAverageScore] = useState('-')
  const onAverageScoreChange = (ev: any) => {
    setAverageScore(ev.toString())
  }


    return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Tidepool Sports" 
        component={EventsPage}
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.background, // Set your desired color here
          },
        }}
        />
        <Stack.Screen 
          name="Evaluation List" 
          component={EvaluationListPage} 
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: colors.background, // Set your desired color here
            },
          }}/>
        <Stack.Screen 
          options={({ route }: any) => 
            ({ 
              // title: `${route?.params?.playerName}` ,
              headerTitle: (props) => <EvaluationHeaderTitle name={route?.params?.playerName} score={avgScore} />,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.background, // Set your desired color here
              },     
            })}
          name="Evaluation Page" 
          // component={EvaluationPage}
          >
            {(props: any) => <EvaluationPage  onAverageScoreChange={onAverageScoreChange} />}
          </Stack.Screen>
    </Stack.Navigator>
    )

}

export const EventsPage = (props: { navigation: any}) => {
  const { colors } = useTheme();
  const globalStyles: any = useMemo(() => globalStyle(colors), [colors]);
  const styles: any = useMemo(() => createStyles(colors), [colors]);

  const [evaluations, setEvaluations] = useState<any[]>([])
  const [isLoading, setisLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setisLoading(true)
    getAllEvaluations()
      .then((res: any) => {
        if(res.error) {
          setError('there was an error: ' + res.error)
          setisLoading(false)
        } else{
          setEvaluations(res)
          setisLoading(false)
        }
      })
      .catch((err) => {
        setError('there was an error...')
        setisLoading(false)
    })
  }, [])

    const onStartEval = (event: any) => {
      props.navigation.navigate('Evaluation List')
    }

  return (
    <ScrollView style={styles.container}>
            {isLoading && (
          <Text style={[styles.container, globalStyles.p]}>Loading....</Text>
      )}
      {!isLoading && error != '' && (
          <Text style={styles.container}>{error}</Text>
      )}

      {evaluations != undefined && !isLoading && error === '' && (
      <>
        <View style={styles.items}>
          <Text style={globalStyles.h2}>Evaluations</Text>
          {evaluations.map((evalu, index) => (
                      <EventBox key={index} evalData={evalu} onClickEvaluationButton={onStartEval}></EventBox>
          ))}
        </View>

        <View style={styles.items}>
          <Text style={globalStyles.h2}>Drafts</Text>
          {/* {evaluations.map((evalu, index) => (
                      <EventBox key={index} evalData={evalu} onClickEvaluationButton={onStartEval}></EventBox>
          ))} */}
        </View>
        </>
      )}
    </ScrollView>
  )
}

const createStyles = (colors: any) => StyleSheet.create({
    container: {
      margin: 20,
      backgroundColor: colors.background,
    },
  items: {
      marginTop: 30
    },
    organizationWrapper: {
      padding: 80,
      paddingHorizontal: 20,
  
    },
    sectionTile: {
      fontSize: 24,
      fontWeight: 200,
    },
  });

