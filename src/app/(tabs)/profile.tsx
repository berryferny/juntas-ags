import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { colors } from '../../constants/Colors';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>
      <View style={styles.profileCard}>
        <Text style={styles.name}>Mariana</Text>
        <Text style={styles.info}>Estudiante · 22 años</Text>
        <Text style={styles.info}>Contactos de confianza: 2</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: colors.primary, marginBottom: 20 },
  profileCard: { backgroundColor: colors.white, padding: 20, borderRadius: 15, alignItems: 'center' },
  name: { fontSize: 24, fontWeight: 'bold', color: colors.primary },
  info: { fontSize: 16, color: colors.gray, marginTop: 5 },
});