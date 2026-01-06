import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Rectangle(){
    // พท.สี่เหลี่ยม =  กว้าง * ยาว
    // Output = Input * Input
         
    const [Rankine, setRankine] = useState(0) //area = 20 x, setArea(20)/
    const [Celsius, setCelsius] = useState(0)

    
    function rankineCall(){
        var result = (Celsius + 273.15) * 9/5
        setRankine(result)
    }

    return (
        <View style={styles.box}>
            <Text style={styles.textTitle}>แปลงเซลเซียลเป็นแรงคิน</Text>
            {/* <Button title="Page 2"/> */}

            <Text>องศาเซลเซียล คือ {Celsius}  °C</Text>
            <Text>บวก กับ 273.15</Text>
            <Text>คูณ กับ 9/5</Text>
            <Text>แรงคิน คือ {Rankine} °R  </Text>

            <TextInput 
            style={styles.TextInput}
             placeholder="กรุณากรอกองศาเซลเซียล" 
             placeholderTextColor="black"
             value={Celsius.toString()}
             onChangeText={(c) => setCelsius(Number(c))}
             />



            <Button title="คำนวณ" onPress={() => rankineCall()}/>
        </View>

    )
}

const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor: "lavender",  
        justifyContent:"center",
        alignItems:"center",
        gap: 20
    },
    textTitle:{
        fontSize:22,
        fontWeight:"700",
        color:"black"
    },
    TextInput:{
        borderWidth: 1,
        borderColor: "black",
        width:"80%",
        borderRadius: 10
    }
})