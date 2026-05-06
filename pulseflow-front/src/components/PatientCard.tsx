import { View, Text, StyleSheet } from "react-native";
import { getColor } from "../utils/getColor";
import { Patient } from "../types/patient";

interface Props {
  patient: Patient;
}

export default function PatientCard({ patient }: Props) {
  const color = getColor(patient.gravidade);

  return (
    <View style={[styles.card, { borderLeftColor: color }]}>
      <Text style={styles.name}>{patient.nome}</Text>
      <Text style={styles.code}>#{patient.codigo}</Text>
      <Text style={[styles.level, { color }]}>
        Gravidade: {patient.gravidade}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1c1c1e",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 6
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  code: {
    color: "#aaa",
    marginTop: 4
  },
  level: {
    marginTop: 8,
    fontWeight: "bold"
  }
});