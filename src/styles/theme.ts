export default {
  styles: {
    global: (props: any) => ({
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      "html, body": {
        backgroundColor: "gray.700",
        color: props.colorMode === "dark" ? "white" : "gray.50",
        fontSize: "sm",
        lineHeight: "tall",
        minHeight: "100vh",
        height: "100%",
      },
      a: {
        color: props.colorMode === "dark" ? "teal.300" : "teal.500",
      },
    }),
  },
};
