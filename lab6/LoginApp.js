import React, { useCallback, useState } from "react"
import { Button, Pressable, StyleSheet, Text, TextInput } from "react-native"
const NO_USERNAME = "Error, no username!"
const WRONG_PASSWORD = "Error, wrong password!"

export default function LoginApp() {
    let [loggedIn, setLoggedIn] = useState(false)
    let [password, setPassword] = useState("")
    let [username, setUsername] = useState("")
    let [error, setError] = useState(undefined)
    let doLogin = useCallback(() => {
        if (username === "") {
            setError(NO_USERNAME)
        } else {
            if (password === "Ch@rge!") {
                setLoggedIn(true)
            } else {
                setError(WRONG_PASSWORD)
            }
        }
    })
    return !loggedIn ?
        <>
            <Text style={styles.welcome}>Please log in</Text>
            <TextInput autoFocus={true} value={username} onChangeText={text => setUsername(text)} placeholder="Username" style={styles.textinput} ></TextInput>
            <TextInput value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} placeholder="Password" style={styles.textinput}></TextInput>
            <Text style={styles.error}>{error !== undefined ? error : ""} </Text>
            <Pressable style={styles.button} onPress={() => doLogin()}>
                <Text style={styles.text}>Login</Text>
            </Pressable>
        </>
        : <Text>Welcome, {username}! </Text>
}


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    error: {
        color: "red",
        paddingVertical: 8,
    },
    welcome: {
        fontSize: 24,
        paddingVertical: 12,
        lineHeight: 21,
        letterSpacing: 0.25,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    textinput: {
        fontSize: 20,
        width: 200,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 5,
        margin: 5
    },
});
