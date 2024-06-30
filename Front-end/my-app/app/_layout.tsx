import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout(){
  useFonts({
    'poppins-regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    
  })
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{
        headerShown: false
      }}
      />
    </Stack>
  );
}
