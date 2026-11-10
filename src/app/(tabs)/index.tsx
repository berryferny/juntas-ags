import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { colors } from '../../constants/Colors';

export default function MapScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Juntas Ags</Text>
        <Text style={styles.subtitle}>La ciudad también es nuestra</Text>
      </View>

      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>🗺️ Aquí irá el mapa de rutas seguras</Text>
        <Text style={styles.mapSubtext}>(Semáforo: Verde, Amarillo, Rojo)</Text>
      </View>

      <TouchableOpacity 
        style={styles.sosButton} 
        onPress={() => router.push('/alerts')}
      >
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { padding: 20, alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', color: colors.primary, fontFamily: 'PlayfairDisplay_700Bold' },
  subtitle: { fontSize: 16, color: colors.secondary, marginTop: 4 },
  mapPlaceholder: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.lightLavender, margin: 20, borderRadius: 20 },
  mapText: { fontSize: 18, color: colors.primary, fontWeight: 'bold' },
  mapSubtext: { fontSize: 14, color: colors.gray, marginTop: 8 },
  sosButton: { position: 'absolute', bottom: 30, alignSelf: 'center', backgroundColor: colors.vibrant, width: 80, height: 80, borderRadius: 40, justifyContent: 'center', alignItems: 'center', elevation: 5, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 5 },
  sosText: { color: 'white', fontWeight: 'bold', fontSize: 20 },
});