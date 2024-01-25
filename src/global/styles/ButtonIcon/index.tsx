import { View, Image, Text, StatusBar, TouchableOpacity, TouchableOpacityProps } from "react-native";

import React, { useState } from 'react';
import styles from "./styles";
import DiscordIMG from '../../../assets/discord.png';

type Props = TouchableOpacityProps & {
    title: string;
}


export function ButtonIcon({ title, ...rest }: Props) {

    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >

            <View style={styles.iconWrapper}>
                <Image
                    source={DiscordIMG}
                    style={styles.icon} />
            </View>

            <Text style={styles.title} >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default ButtonIcon;