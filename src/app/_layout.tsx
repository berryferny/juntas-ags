import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

// Mantenemos la pantalla de carga visible mientras se cargan las fuentes.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // El nombre a la izquierda ('PlayfairDisplay') es el que usarás en tus estilos.
    // La ruta a la derecha debe coincidir con la ubicación de tu archivo .ttf
    'PlayfairDisplay': require('../assets/fonts/PlayfairDisplay[wght].ttf'),
    'Montserrat': require('../assets/fonts/Montserrat[wght].ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      // Una vez cargadas (o si hay un error), ocultamos la pantalla de carga.
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Si aún no se han cargado las fuentes (y no hay error), no mostramos nada.
  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}