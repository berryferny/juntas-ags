import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/Colors';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Encabezado */}
        <View style={styles.header}>
          <Ionicons name="heart-half" size={28} color={colors.primary} />
          <Text style={styles.greeting}>Hola</Text>
          <Text style={styles.subtitle}>Tu apoyo está más cerca.</Text>
        </View>

        {/* Tarjeta de información */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>La ciudad también es nuestra.</Text>
          <Text style={styles.infoText}>Consulta lugares aliados y opciones de ayuda.</Text>
        </View>

        {/* ¿Qué necesitas? */}
        <Text style={styles.sectionTitle}>¿Qué necesitas?</Text>

        {/* Opción: Buscar un lugar */}
        <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/map')}>
          <View style={styles.actionIconContainer}>
            <Ionicons name="map-outline" size={24} color={colors.primary} />
          </View>
          <View style={styles.actionTextContainer}>
            <Text style={styles.actionTitle}>Buscar un lugar</Text>
            <Text style={styles.actionSubtitle}>Mapa de establecimientos aliados</Text>
          </View>
        </TouchableOpacity>

        {/* Opción: Pedir ayuda */}
        <TouchableOpacity style={styles.actionCard} onPress={() => alert('Próximamente: Flujo de pedir ayuda')}>
          <View style={styles.actionIconContainer}>
            <Ionicons name="heart-outline" size={24} color={colors.primary} />
          </View>
          <View style={styles.actionTextContainer}>
            <Text style={styles.actionTitle}>Pedir ayuda</Text>
            <Text style={styles.actionSubtitle}>Enviar una solicitud a un aliado</Text>
          </View>
        </TouchableOpacity>

        {/* Opción: SOS inmediato */}
        <TouchableOpacity style={[styles.actionCard, styles.sosCard]} onPress={() => router.push('/alerts')}>
          <View style={[styles.actionIconContainer, styles.sosIconContainer]}>
            <Ionicons name="alert-circle-outline" size={24} color={colors.danger} />
          </View>
          <View style={styles.actionTextContainer}>
            <Text style={[styles.actionTitle, styles.sosTitle]}>SOS inmediato</Text>
            <Text style={styles.actionSubtitle}>Activar una alerta de emergencia</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: 24,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  greeting: {
    fontSize: 32,
    fontFamily: 'PlayfairDisplay',
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    color: colors.gray,
    marginTop: 4,
  },
  infoCard: {
    backgroundColor: colors.lightLavender,
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
  },
  infoTitle: {
    fontSize: 16,
    fontFamily: 'PlayfairDisplay',
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: colors.primary,
    opacity: 0.8,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'PlayfairDisplay',
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 16,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  actionIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.lightLavender,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  actionTextContainer: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 2,
  },
  actionSubtitle: {
    fontSize: 13,
    fontFamily: 'Montserrat',
    color: colors.gray,
  },
  sosCard: {
    borderColor: '#FFCDD2', // Un rojo muy clarito para el borde
    backgroundColor: '#FFF8F8', // Fondo rojizo muy pálido
  },
  sosIconContainer: {
    backgroundColor: '#FFEBEE',
  },
  sosTitle: {
    color: colors.danger,
  },
});