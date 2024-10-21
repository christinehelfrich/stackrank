import React, { useMemo, useState } from 'react'
import { Pressable, StyleSheet, Text, View, Modal } from 'react-native'
import {globalStyle} from '../../styles/styles'
import ScoreIcon from '../atoms/ScoreIcon'
import { useTheme } from '@react-navigation/native'
import EvaluationScoring from './EvaluationScoring'
import ModalComponent from '../atoms/ModalComponent'
import { formatScoreToPercent } from '~/utils/formatting/formatScoreToPercent'

const EvaluationCriteriaItem = ({criteria, onScoreChangedEvent}: any) => {
  const { colors } = useTheme();
  const globalStyles: any = useMemo(() => globalStyle(colors), [colors]);
  const styles: any = useMemo(() => createStyles(colors), [colors]);
  const [score, setScore] = useState<any>(0)
  const [modalVisible, setModalVisible] = useState(false);

  const onScoreChanged = (scoreSelected: number) => {
    if(typeof scoreSelected === 'number') {
      setScore(scoreSelected)
      onScoreChangedEvent({'scoreSelected': formatScoreToPercent(criteria.ScoreMax, scoreSelected), criteriaId: criteria.Id})
    }

    // set in db
  }

  const onOpenModal = () => {
    setModalVisible(!modalVisible)
  }

  const onCloseModal = () => {
    setModalVisible(false)
  }
  
  return (
    <View>
        <Pressable style={styles.titleBox} onPress={onOpenModal}>
          <Text style={globalStyles.p}>{criteria.Name}
          </Text>
          <ScoreIcon score={score === 0 ? '-' : score.toString()} textBeneath={''} width={30} maxScore={criteria.ScoreMax}></ScoreIcon>
        </Pressable>
        <ModalComponent openButton={false} isVisible={modalVisible} onClose={onCloseModal}>
            <EvaluationScoring criteria={criteria} score={score} onScoreChangedEvent={onScoreChanged}></EvaluationScoring>
        </ModalComponent>
    </View>
  )
}

const createStyles = (colors: any) => StyleSheet.create({
  titleBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
    margin: 6
  },
})

export default EvaluationCriteriaItem
