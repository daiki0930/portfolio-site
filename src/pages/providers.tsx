import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { ReactNode } from "react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: "#e6f4ff",
      100: "#b3dfff",
      200: "#80caff",
      300: "#4db5ff",
      400: "#1aa0ff",
      500: "#0088ff",
      600: "#0072cc",
      700: "#005c99",
      800: "#004666",
      900: "#003033",
    },
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.950" : "white",
        color: props.colorMode === "dark" ? "white" : "gray.900",
      },
    }),
  },
});

export function Providers({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
