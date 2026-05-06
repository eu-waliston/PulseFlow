import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import PatientCard from "../components/PatientCard";
import { api } from "../services/api";
import { Patient } from "../types/patient";


export default function Dashboard() {
    const [queue, setQueue] = useState<Patient[]>([]);

    const fetchQueue = async () => {
        const res = await api.get("patients/queue")
        setQueue(res.data);
    }

    const callNext = async () => {
        await api.patch("/patients/next")
        fetchQueue();
    }

    useEffect(() => {
        fetchQueue();

        const interval = setInterval(fetchQueue, 3000) // atualização automatica

        return () => clearInterval(interval)
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.title}>PulseFlow</Text>

            <TouchableOpacity style={styles.button} onPress={callNext}>
                <Text style={styles.buttonText}>Chamar Próximo</Text>
            </TouchableOpacity>

            <FlatList 
                data={queue}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => <PatientCard patient={item}/>}
            />
        </View>
    )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 16
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16
  },
  button: {
    backgroundColor: "#0a84ff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 16
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  }
});