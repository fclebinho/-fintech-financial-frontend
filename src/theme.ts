import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    body: "Varta, system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  }
});

export default theme;