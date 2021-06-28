import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { SIZES, COLORS, FONTS, icons, dummyData, images } from "../constants"

export const TextButton = ({ label, customContainerStyle, customLabelStyle, onPress  }) => {
  return (
    <TouchableOpacity
    activeOpacity={0.7}
      style={{
        height: 45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.green,
        ...customContainerStyle
      }}
      onPress={onPress}
    >
      <Text style={{color: COLORS.white, ...FONTS.h3, ...customLabelStyle}}>{label}</Text>
    </TouchableOpacity>
  )
}
