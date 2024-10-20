import { useTheme } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react'
import { Modal, Pressable, View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { globalStyle } from '~/styles/styles';

const ModalComponent = ({openButton = false, isVisible, onClose, children}: any) => {
  const { colors } = useTheme();
  const globalStyles: any = useMemo(() => globalStyle(colors), [colors]);
  const styles: any = useMemo(() => createStyles(colors), [colors]);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
            {children}
            <Pressable
              style={[globalStyles.primaryButton, styles.button]}
              onPress={onClose}>
              <Text style={globalStyles.p}>Done</Text>
            </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {openButton && (
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={onClose}>
        <Text style={globalStyles.p}>Show Modal</Text>
      </Pressable>
      )}

    </View>
  );
};

const createStyles = (colors: any) => StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  button: {
    elevation: 2,
    margin: 'auto'
  },
});

export default ModalComponent
