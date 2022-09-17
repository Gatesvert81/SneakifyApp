import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import images from '../assets/images/images';
import { COLORS, FONTS, SIZES } from '../constants/theme';

function Profile() {
    return (
        <View style={styles.container} >
            <View>
                <Text>
                    Profile
                </Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Image 
                        source={images.backgroundImage}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
                <View>
                    <Text>
                        Gates Vert
                    </Text>
                    <Text>
                        johnnygreenwhale81@gmail.com
                    </Text>
                </View>
                <TouchableOpacity>
                    <Text>
                        Edit Profile
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.tetiary,
        paddingVertical: SIZES.paddingLarge
    },
})

export default Profile
