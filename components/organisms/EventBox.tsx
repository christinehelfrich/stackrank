import React, { useMemo } from 'react'
import { Button, StyleSheet, Text, View, Pressable } from 'react-native'
import { globalStyle, globalVariables } from '../../styles/styles'
import { formatDateToLongDateWithTime } from '../../utils/formatting/dateFormatting'
import { useTheme } from '@react-navigation/native'

const EventBox = ({ onClickEvaluationButton, evalData}: any) => {
    const { colors } = useTheme();
    const globalStyles: any = useMemo(() => globalStyle(colors), [colors]);

    const onClickEvaluationButtonEvent = (event: any) => {
        onClickEvaluationButton(event)
    }

  return (
    <View style={styles.box}>
        <View style={styles.header}>
            <Text style={globalStyles.h3}>{evalData?.EventName}</Text>
        </View>
        <View style={styles.body}>
            <Text style={globalStyles.p}>{evalData?.SeasonName} Season</Text>
            <Text style={globalStyles.p}>{formatDateToLongDateWithTime(new Date(evalData?.EventDate))}</Text>
            {/* <Text style={globalStyles.p}>{evalData?.location}</Text> */}
            <Pressable style={styles.button} onPress={(event) => onClickEvaluationButtonEvent(event)}>
              <Text style={styles.buttonText}>Begin Evaluation</Text>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 1,
        borderColor: 'gray',
        borderStyle: 'solid', 
        borderRadius: 5,
        marginBottom: 7,
        marginTop: 7
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        padding: 12,
    },
    body: {
        padding: 12
    },
    bodyText: {
        fontSize: 12,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 5,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: globalVariables.primaryColor,
        marginTop: 10
    },
    buttonText: {
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }

})

export default EventBox
