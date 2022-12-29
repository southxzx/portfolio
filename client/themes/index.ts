import type { Styles, GlobalStyleProps } from "@chakra-ui/theme-tools";

const theme = {
  styles: {
    global: (props: GlobalStyleProps) => ({
      '*': {
        fontFamily: "'Red Hat Display', sans-serif"
      },
      'h1': {
        fontSize: '40px'
      },
      'h2': {
        fontSize: '32px'
      },
      'h3': {
        fontSize: '24px'
      },
      'h4': {
        fontSize: '20px'
      },
    })
  },
  components: {
    Heading: {
      baseStyle: {
        // fontWeight: "300"
        fontFamily: "'Red Hat Display', sans-serif"
      },
      sizes: {
        // default size is md
        xl: {
          fontSize: "50px",
        },
      },
    },
  }
};

export default theme;