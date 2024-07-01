import { View, Text, StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../constants/Colors'
import React from 'react'

export default function Header() 
{

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.photoBox}>
            <View style={styles.photo}>

            </View>

            <View style={styles.textBox}>
                <Text style={{fontSize: 12}}>Welcome,</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>UserName</Text>
            </View>
        </View>

        <View style={styles.notification}>
            <FontAwesome name="bell" size={20} color={colors.INACTIVE} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '88%',
        height: '100%',
    },
    photoBox: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    photo: {
        width: 60,
        height: 60,
        borderRadius: '50%',
        backgroundColor: colors.INACTIVE
    },
    textBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    },
    notification: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        borderRadius: '50%'
    }
})