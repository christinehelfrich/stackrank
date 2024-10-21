import { useTheme } from '@react-navigation/native';
import React, { useMemo, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Pressable } from 'react-native'
import { globalStyle } from '~/styles/styles';
import DropdownIcon from '../atoms/DropdownIcon';

const CollapsableBanner = ({label, isOpenByDefault, children}: any) => {
    const { colors } = useTheme();
    const globalStyles: any = useMemo(() => globalStyle(colors), [colors]);
    const styles: any = useMemo(() => createStyles(colors), [colors]);

    const [showChildren, setShowChildren] = useState(isOpenByDefault)
    
  return (
    <>
    <Pressable onPress={() => setShowChildren(!showChildren)} style={styles.banner}>
        <Text style={globalStyles.h2}>{label}</Text>
        {/* <DropdownIcon></DropdownIcon> */}
        {showChildren && (
        <Text style={globalStyles.h2}>&#8679;</Text>
        )}
        {!showChildren && (
        <Text style={globalStyles.h2}>&#8681;</Text>
        )}
    </Pressable>
    {showChildren && (
        <>
        {children}
        </>
    )}
    
    </>
  )
}


const createStyles = (colors: any) => StyleSheet.create({
    banner: {
        backgroundColor: colors.bannerBackgroundColor,
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bannerText: {
        fontWeight: 'bold',
        fontSize: 12,
        textTransform: 'uppercase'
    }
  });

export default CollapsableBanner
