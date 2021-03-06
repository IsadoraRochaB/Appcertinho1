import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({

  container: {
    backgroundColor: colors.isa,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  local: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.white,
    borderRadius: 10,
  },

  location: {
    margin: 10,
    fontSize: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.marrom,
    backgroundColor: colors.white,
    borderRadius: 20,
  },

  icon: {
    fontSize: 24,
    color: colors.blue,
    padding: 10
  },

  title: {
    padding: 5,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.black,
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
    padding: 5,
    width: "80%"
  },
  link: {
    fontSize: 50,
    color: colors.blue
    },
  img: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: colors.marrom,
    },



})

export default styles