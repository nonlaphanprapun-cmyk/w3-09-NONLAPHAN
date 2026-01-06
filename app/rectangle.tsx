import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Rectangle(){
    // พท.สี่เหลี่ยม =  กว้าง * ยาว
    // Output = Input * Input
         
    const [area, setArea] = useState(0) //area = 20 x, setArea(20)/
    const [width, setWidth] = useState(0)
    const [lenght, setLenght] = useState(0)

    function rectanglecal(){
        var result = width * lenght
        setArea(result)
    }

    return (
        <View style={styles.box}>
            <Text style={styles.textTitle}>คำนวณพื้นที่สี่เหลี่ยม</Text>
            {/* <Button title="Page 2"/> */}

            <Text>ความกว้าง คือ {width}  ซม.</Text>
            <Text>ความยาว คือ {lenght}  ซม.</Text>
            <Text>พื้นที่สี่เหลี่ยม คือ {area}  ตร.ซม.</Text>

            <TextInput 
            style={styles.TextInput}
             placeholder="กรุณากรอกความกว้าง" 
             placeholderTextColor="black"
             value={width.toString()}
             onChangeText={(w) => setWidth(Number(w))}
             />



            <TextInput 
            style={styles.TextInput} 
            placeholder="กรุณากรอกความยาว" 
            placeholderTextColor="black"
            value={lenght.toString()}
            onChangeText={(l) => setLenght(Number(l))}
            />

            <Button title="คำนวณ" onPress={() => rectanglecal()}/>
        </View>

    )
}

const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor: "lightblue",  
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