import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/diego3g.png' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Diego Fernandes</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Entusiasta das melhores tecnologias de química avançada.
                {'\n'}{'\n'}
                Apaixonado por explodir coisas.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'     '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.favoriteButton}>
                        <Image source={heartOutlineIcon} />
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem