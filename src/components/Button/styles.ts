import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
  buttonBlack: {
    backgroundColor: colors.blue,
    borderRadius: 20,
    margin: 10
  },
  buttonGrey: {
    backgroundColor: colors.marrom,
    borderColor: colors.black,
    borderRadius: 20,
    margin: 10
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    fontSize: 18
  }
})

export default styles