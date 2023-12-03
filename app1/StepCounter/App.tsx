 import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
const Value =()=>(

  <View style={styles.valueContainer }>
  <Text  style ={styles.label}>steps </Text>
  <Text style ={styles.value}>1219 </Text>
  </View>
)

export default function App() {
  return (
    <View style={styles.container}>
     
        <Text >HALe</Text>
        <View style={{ flexDirection: "row" }}>
         
        
      
      {/* <View style={styles.valueContainer }>
        {/* <Text style ={styles.label}>Distance </Text>
        <Text>8,756km</Text> 
      </View> */}
      </View>
      {/* <View style={styles.valueContainer }>
        <Text style ={styles.label}>Flight </Text>
        <Text>reading</Text>
      </View> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    justifyContent: "center",
    padding: 12,
  },
  valueContainer:{
    marginRight:40,
    marginVertical:10,

  },
  label:{
    color :'white ',
    fontSize:20,
  },
  value:{
    fontSize:35,
    color:'#AFB3BE',
    fontWeight:'500'
  }
});
