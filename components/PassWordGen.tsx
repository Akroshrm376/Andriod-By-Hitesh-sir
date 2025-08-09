import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'

export default function PassWordGen() {
    const [pwdLength, setPwdLength] = useState('0');
    const [password, setPassword] = useState('');
    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(true);
    const [number, setNumber] = useState(false);
    const [symboles, setSymboles] = useState(false);
    const [isPasswordReady, setIsPasswordReady] = useState(false);
    const [ispwdlengthValid, setIspwdlengthValid] = useState(true);

    async function generatePassword() {
        let mainstrig = ''
        let up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let lp = 'abcdefghijklmnopqrstuvwxyz';
        let np = '0123456789';
        let sp = '!@#$%^&*()-_=+[]{}|;:",.<>?/';

        if (upperCase) {
            mainstrig += up;
        }
        if (lowerCase) {
            mainstrig += lp;
        }
        if (number) {
            mainstrig += np;
        }
        if (symboles) {
            mainstrig += sp;
        }
        let output = await createPassword(pwdLength, mainstrig);
        setPassword(output)
        setIsPasswordReady(true);
    }
    async function createPassword(pwdLength: string, mainstrig: string) {
        let psswordResult = ''
        for (let i = 0; i < Number(pwdLength); i++) {
            let index = Math.floor(Math.random() * mainstrig.length);
            psswordResult += mainstrig[index]
        }
        return psswordResult;
    }
    function resetPassword() {
        setPassword('');
        setPwdLength('0');
        setUpperCase(false);
        setLowerCase(true);
        setNumber(false);
        setSymboles(false);
        setIsPasswordReady(false);
    }
    return (
        <View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.headingText}>PassWord Generator</Text>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.pwdLength}>
                        <Text style={styles.pwdOptionText}>Password Length : </Text>
                        <TextInput keyboardType='numeric' style={styles.input} value={pwdLength} onChangeText={setPwdLength} maxLength={2}></TextInput>
                    </View>
                    <View style={styles.pwdOptions}>
                        <View style={styles.pwdOption}>
                            <Text style={styles.pwdOptionText}>Include UpperCase Laterrs</Text>
                            <Switch value={upperCase} onValueChange={setUpperCase} />
                        </View>
                        <View style={styles.pwdOption}>
                            <Text style={styles.pwdOptionText}>Include LowerCase Laterrs</Text>
                            <Switch value={lowerCase} onValueChange={setLowerCase} />
                        </View>
                        <View style={styles.pwdOption}>
                            <Text style={styles.pwdOptionText}>Include Numbers </Text>
                            <Switch value={number} onValueChange={setNumber} />
                        </View>
                        <View style={styles.pwdOption}>
                            <Text style={styles.pwdOptionText}>Include Symbols </Text>
                            <Switch value={symboles} onValueChange={setSymboles} />
                        </View>
                    </View>
                    <View style={styles.pwdButtons}>
                        <TouchableOpacity style={styles.button} onPress={generatePassword}>
                            <Text style={styles.buttonText}>Generate Password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={resetPassword}>
                            <Text style={styles.buttonText}>Rest Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Modal
                visible={isPasswordReady}
                transparent
                animationType="fade"
                onRequestClose={() => setIsPasswordReady(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.pwdResultHeader}>Yay! Your password is ready 🎉</Text>
                        <Text style={styles.pwdResult}>{password}</Text>

                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: '#333' }]}
                            onPress={() => setIsPasswordReady(false)}
                        >
                            <Text style={styles.buttonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: 600,
        width: 400,
        borderWidth: 2,
        backgroundColor: '#f6e58d',
        padding: 8,
        borderRadius: 10,
        elevation: 15
    },
    headingText: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    cardContainer: {
        margin: 10,
        gap: 10
    },
    pwdLength: {
        gap: 10
    },
    pwdOptions: {
        height: '50%',
        gap: 10
    },
    pwdOption: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    pwdOptionText: {
        fontSize: 18,
        fontWeight: '600'
    },
    pwdButtons: {
        marginVertical: 10,
        gap: 10
    },
    button: {
        backgroundColor: '#FF5733',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        borderColor: 'black',
        borderWidth: 2,
        fontSize: 18,
        borderRadius: 5
    },
    pwdResultContainer: {
        margin: 20,
        minHeight: 200,
        maxHeight: 'auto',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        padding: 10,
        backgroundColor: 'green',
        color: 'white',
        borderRadius: 10
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        width: 300,
        backgroundColor: 'green',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        gap: 10
    },
    pwdResultHeader: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    pwdResult: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})