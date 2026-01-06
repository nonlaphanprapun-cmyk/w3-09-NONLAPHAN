import { View, Text, Button, StyleSheet} from "react-native";
import { useRouter } from "expo-router";

export default function App(){

    const router = useRouter()

    return (
        <View style={styles.box}>
            <Text style={styles.textTitle}>HOME</Text>
            <Button title="คำนวณพื้นที่สี่เหลี่ยม" onPress={() => router.navigate('/rectangle')}/>
                 <Button title="แปลงเซลเซียลเป็นแรงคิน" onPress={() => router.navigate('/ccc')}/>
        </View>

    )
}

const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor: "beige",
        justifyContent:"center",
        alignItems:"center",
        gap:20
    },
    textTitle:{
        fontSize:22,
        fontWeight:"700",
        color:"black"
    }
})