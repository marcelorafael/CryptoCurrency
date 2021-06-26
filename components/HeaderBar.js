import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { useNavigation } from '@react-navigation/core';

import { SIZES, COLORS, FONTS, icons } from "../constants"

export const HeaderBar = ({right}) => {
  const navigation = useNavigation()
  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        flexDirection:'row',
        marginTop: 8,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems:'flex-start'
        }}
      >
        <TouchableOpacity
          style={{flexDirection:'row', alignItems:'center'}}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back_arrow}
            resizeMode="contain"
            style={{width: 20, height: 20, tintColor: COLORS.gray}}
          />
          <Text style={{marginLeft:SIZES.base, ...FONTS.h3}}>Back</Text>
        </TouchableOpacity>
      </View>

      {right &&
        <View style={{flex: 1, alignItems:'flex-end'}}>
          <TouchableOpacity>
            <Image
              source={icons.star}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </TouchableOpacity>
        </View>}
    </View>
  )
}
