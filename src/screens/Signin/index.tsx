import { View, Image, Text, StatusBar } from "react-native";

import React, { useState } from 'react';
import styles from "./styles";
import IllustrationIMG from '../../assets/illustration.png';
import ButtonIcon from "../../global/styles/ButtonIcon";

export function SignIn() {

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent />

            <Image
                source={IllustrationIMG}
                style={styles.image}
                resizeMode='stretch' />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se{`\n`}
                    e organize suas{`\n`}
                    jogatinas
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games{`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon
                    title='Entrar com o discord'
                    activeOpacity={0.7}
                />
            </View>
        </View>
    );
}

export default SignIn;