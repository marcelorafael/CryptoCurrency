import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    ImageBackground,
} from 'react-native';

import { SIZES,COLORS, FONTS, icons, dummyData, images } from "../constants"

const Home = ({ navigation }) => {

    function renderHeader() {
        return (
            <View style={{ width: '100%', height: 290, ...styles.shadow }}>
                <ImageBackground
                    source={images.banner}
                    resizeMode='cover'
                    style={{
                        flex: 1,
                        alignItems: 'center',
                    }}
                >
                    {/* HeaderBar */}
                    <View style={{
                        marginBottom: SIZES.padding * 2,
                        width: "100%",
                        alignItems:'flex-end',
                        paddingHorizontal: SIZES.padding
                    }}>
                        <TouchableOpacity style={{
                            width: 35,
                            height: 35,
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                            <Image
                                source={icons.notification_white}
                                resizeMode='contain'
                                style={{flex: 1, marginRight: -20, marginTop: 3}}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Balance */}

                    {/* Trendig */}

                </ImageBackground>
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ flex: 1, paddingBottom: 130 }}>
                {renderHeader()}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default Home;