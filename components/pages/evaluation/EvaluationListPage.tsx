import React, { useEffect, useMemo, useState } from 'react'
import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native'
import { globalStyle } from '../../../styles/styles'
import { getAllPlayersInEvaluation } from '../../../services/evaluations/evaluationsService'
import { useTheme } from '@react-navigation/native'
import { globalVariables } from '../../../styles/styles'

const EvaluationListPage = ({navigation}: any) => {
  const { colors } = useTheme();
  const globalStyles: any = useMemo(() => globalStyle(colors), [colors]);
  const styles: any = useMemo(() => createStyles(colors), [colors]);
    const [players, setPlayers] = useState<any[]>([])
    const [isLoading, setisLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
      console.log('here')
      setisLoading(true)
      getAllPlayersInEvaluation()
          .then((res) => {
            // if(res?.error) {
            //   setError('there was an error: ' + res.error)
            //   setisLoading(false)
            // } else{
              setPlayers(res)
              setisLoading(false)
            // }
          })
          .catch((err) => {
              console.log(err)
              setError('there was an error...')
              setisLoading(false)
          })

    }, [])

    const onClickPlayer = (player: any) => {
      navigation.navigate('Evaluation Page', { playerId: player.id, playerName: player.FirstName + ' ' + player.LastName })
    }

  return (
    <ScrollView style={styles.container}>
      {isLoading && (
          <Text style={[styles.container, globalStyles.p]}>Loading....</Text>
      )}
      {!isLoading && error != '' && (
          <Text style={styles.container}>{error}</Text>
      )}

      {!isLoading && error === '' && (
      <>
      {players.length === 0 && (
        <Text>The player list is empty</Text>
      )}
        {players.map((player, index) => (
            <Pressable key={index} style={styles.row} onPress={() => onClickPlayer(player)}>
                <View style={globalStyles.circleButton}>
                  <Text style={styles.numberText}>{index}</Text>
                </View>
                <Text style={[globalStyles.largePrint, styles.playerName]}>
                {player.FirstName}
                </Text>
            </Pressable>
        ))}
      </>
        )}
    </ScrollView>
  )
}


const createStyles = (colors: any) => StyleSheet.create({
    container: {
        marginVertical: 15,
        paddingHorizontal: 20,
      },
      row: {
        flexDirection: 'row', // Aligns the circle and name in a row
        alignItems: 'center',
        marginVertical: 5, // Space between rows
      },
    numberText: {
      fontSize: 16,
      fontWeight: 400,
      fontFamily: globalVariables.accentFontFamily,
      color: colors.text
    },
    playerName: {
        marginLeft: 10,
    }
  });

export default EvaluationListPage
