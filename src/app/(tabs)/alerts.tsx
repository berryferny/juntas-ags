import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { colors } from '../../constants/Colors';

export default function AlertsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Alertas SOS</Text>
      <View style={styles.card}>
        <Text style={styles.alertTitle}>✅ Alerta Enviada</Text>
        <Text style={styles.alertText}>El establecimiento "Café Central" ha confirmado tu solicitud. Ve hacia allá.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: colors.primary, marginBottom: 20 },
  card: { backgroundColor: colors.white, padding: 20, borderRadius: 15, borderLeftWidth: 5, borderLeftColor: colors.success },
  alertTitle: { fontSize: 18, fontWeight: 'bold', color: colors.success, marginBottom: 8 },
  alertText: { fontSize: 16, color: colors.gray },
});