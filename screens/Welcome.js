import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {
    return (
        <LinearGradient
            style={{ flex: 1 }}
            colors={['#FFFFFF', '#FFFFFF']}
        >
            <View style={{ flex: 1 }}>
                {/* Logo */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require("../assets/facebook.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>

                {/* Content */}
                <View style={styles.contentContainer}>
                    <Text style={styles.heading}>Let's Get</Text>
                    <Text style={styles.heading}>Started</Text>
                    <View style={styles.sloganContainer}>
                        <Text style={styles.slogan}>Shop woosh products, Straight from nature</Text>
                    </View>
                    <Button
                        title="Join Now"
                        onPress={() => navigation.navigate("Signup")}
                        style={styles.button}
                    />
                    <View style={styles.loginContainer}>
                        <Text style={styles.loginText}>Already have an account?</Text>
                        <Pressable onPress={() => navigation.navigate("Login")}>
                            <Text style={[styles.loginText, { color: COLORS.grey, fontWeight: "bold", marginLeft: 4 }]}>Login</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150, // Adjust the width of the logo as needed
        height: 150, // Adjust the height of the logo as needed
    },
    contentContainer: {
        paddingHorizontal: 22,
        paddingBottom: 50,
    },
    heading: {
        fontSize: 50,
        fontWeight: '800',
        color: COLORS.black,
    },
    sloganContainer: {
        marginVertical: 22,
    },
    slogan: {
        fontSize: 16,
        color: COLORS.black,
        marginVertical: 4,
    },
    button: {
        marginTop: 22,
        width: "100%",
        backgroundColor: COLORS.black,
    },
    loginContainer: {
        flexDirection: "row",
        marginTop: 12,
        justifyContent: "center",
    },
    loginText: {
        fontSize: 16,
        color: COLORS.black,
    },
});

export default Welcome;
