import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  // buttonContainer: {
  //     marginVertical: 25,
  //     width: 30,
  // },
  pinContainer: {
    marginBottom: 42,
  },
  textlog: {
    padding: 10,
    fontFamily: 'georgia',
    fontWeight: '400',
  },
  textlog2: {
    paddingTop:10,
    fontFamily: 'georgia',
    fontSize: 17,
    fontWeight: '400',

  },
  textlog3: {
    paddingTop:10,
    fontFamily: 'georgia',
    fontSize: 17,
    fontWeight: '400',
    color: '#4A321F',
    textDecorationLine: 'underline',
  },
  arrange1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrange2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
    
  },
  arrange3: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    
    
  },
  // container: {
  //     flex: 1, // centers horizontally
  // },
  // formContainer: {
  //     width: '100%',

  //   },

  lineDesign: {
    borderBottomWidth: 1,  // 1px border
    borderColor: '#848484',   // Line color (you can change it)
    width: 122,
  },
  container: {
    paddingTop: 20,
    justifyContent: 'center',
    alignContent: 'center',
    // alignItems: 'center',
    paddingLeft: 15,
    paddingHorizontal: 5,
    // backgroundColor: '#fff',
  },
  container2: {
    paddingTop: 20,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 5,
    paddingLeft: 15,
    paddingRight: 15,
    // backgroundColor: '#fff',
  },
  //   textContainer: {
  //     flexDirection: 'row',
  //     justifyContent: 'center', // Center text horizontally
  //     alignItems: 'center',
  //     marginBottom: 20,
  //   },
  //   logintext: {
  //     fontSize: 24,
  //     fontWeight: 'bold',
  //     textAlign: 'center',
  //     marginBottom: 30,
  //   },
  studentText: {
    fontFamily: 'georgia',
    fontSize: 17, // Larger font size for visibility
    fontWeight: '400', // Bold text for emphasis
    color: '#A35200', // Use a prominent color
  },
  digitText: {
    fontFamily: 'georgia',
    fontSize: 17, // Larger font size for visibility
    fontWeight: '400', // Bold text for emphasis
    color: '#848484', // Use a prominent color
  },
  demacation: {
    fontFamily: 'georgiab',
    fontSize: 17, // Match the size of studentText
    fontWeight: '400',
    color: '#8F8F8F', // Contrasting color
    marginHorizontal: 5, // Add space between student/guardian
  },
  guardianText: {
    fontFamily: 'georgia',
    fontSize: 17, // Same font size
    fontWeight: '400',
    color: '#8F8F8F', // Use a different color for visibility
  },
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    paddingBottom: 40,
    // paddingTop: 10

    // alignItems: 'center',
  },
//   buttonContainer: {
//     width: '90%',
//     alignSelf: 'center',
//     alignContent: 'center'
//   },
buttonContainer: {
    width: '92%',               
    alignSelf: 'center',        
    justifyContent: 'center',   
    paddingVertical: 5,        
    borderRadius: 5,            
    marginHorizontal: 15,
  },
  logintext: {
    fontFamily: 'georgiab',
    fontSize: 32,
    color: '#4A321F',
  },
  textContainer: {
    paddingTop: 10,
    paddingBottom: 30,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    // borderWidth: 1,         // Add border for debugging
    // borderColor: 'red',     // Set a visible color for the border
  },
  // studentText: {
  //     fontFamily: 'georgia',
  //     color: '#A35200',
  // },
  // guardianText: {
  //     fontFamily: 'georgia',
  // },
  // demacation: {
  //     fontFamily: 'georgia',
  //     color: '#A35200',
  //     paddingLeft: 5,
  //     paddingRight: 5,
  // },
  textinput1: {
    backgroundColor: 'transparent',
    color: '#000',
    borderColor: '#848484',
    borderWidth: 1,
    borderRadius: 4,
  },
  textinput2: {
    backgroundColor: 'transparent',
    color: '#000',
    borderColor: '#848484',
    borderWidth: 1,
    borderRadius: 4,
  },
  inputContainer: {
    flex: 1,
    padding: 12,
    flexDirection: 'column',
  },
});
