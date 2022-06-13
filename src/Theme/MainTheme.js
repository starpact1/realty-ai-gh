import { createTheme } from '@mui/material';
import { lineHeight } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1135d4"
    }
  },

  typography: {
    heading1: {
      fontWeight: 700,
      fontSize: "24px",
      color: "#1D58AF",
      fontStyle: "normal",
      lineHeight: "31px"
    },

    heading2: {
      fontFamily: 'DM Sans',
      fontWeight: 500,
      fontSize: "20px",
      color: "#000000",
      fontStyle: "normal",
      lineHeight: "183.2%"
    },

    subHeading1: {
      fontWeight: 400,
      fontSize: "16px",
      color: "#3A3A3A",
      fontStyle: "normal",
      lineHeight: "24px"
    },

    subHeading2: {
      fontWeight: 400,
      fontSize: "14px",
      color: "#B9B9B9",
      fontStyle: "normal",
      lineHeight: "18.23px"
    },

    subHeading3: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "183.2%",
      /* identical to box height, or 26px */

      textAlign: "left",

      color: "#7A7A7A"
    },

    subHeading4: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "183.2%",
      /* or 29px */

      textAlign: "center"
    },





    LogoTitle: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "24px",
      color: "#1E009F",
    }
  },

  components: {
    MuiButton: {

      variants: [
        {
          props: { variant: "button1" },
          style: {
            fontWeight: "200",
            fontSize: "16px",
            color: "#FFFFFF",
            width: "200px",
            background: "rgb(247,208,1)",
            // backgroundImage: "linear-gradient(180deg, #f24406 80%, #a12e02 100%)",
            // backgroundImage: "linear-gradient(45deg, rgba(247,208,1,1) 72%, rgba(237,249,113,1) 100%)",
            background: "linear-gradient(98.35deg, #00286B -3.15%, #1D58AF 34.38%, #1433FF 76.96%)",
            boxShadow: "0px 1px 2px #121212",
            transition: " all 0.6s ease-in-out",
            height: "57px",
            width: "315px",
            boxShadow: "0px 8px 16px rgba(27, 57, 255, 0.2)",
            borderRadius: "20px",
            fontFamily: 'DM Sans',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "26px",
            textTransform: "none",
            "&:hover": {
              transform: "scale(1.1)"
            }
          }
        },

        {
          props: { variant: "button2" },
          style: {
            background: "#0957CB",
            boxShadow: "0px 5px 10px rgba(9, 87, 203, 0.2)",
            borderRadius: "11px",
            textAlign: "center",
            color: "#FFFFFF",
            py: "6px",
            px: "8px",
            textTransform: "none",
            fontFamily: 'DM Sans',
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "183.2%"

          }
        },

        {
          props: { variant: "button3" },
          style: {
            background: "#FFFFFF",
            boxShadow: "6px 4px 20px rgba(0, 0, 0, 0.13)",
            borderRadius: "6px",
            fontFamily: 'DM Sans',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "12px",
            lineHeight: "131.02%",
            /* identical to box height, or 16px */

            color: "#00286B",
            textTransform: "none",
            paddingTop: "7px",
            paddingBottom: "7px",
            paddingRight: "10px",
            paddingLeft: "10px"


          }
        }
      ]
    },

    MuiContainer: {
      variants: [
        {
          props: { variant: "ct" },
          style: {
            paddingLeft: "28px",
            paddingRight: "28px"
          }
        },
        {
          props: { variant: "ct29" },
          style: {
            paddingLeft: "29px",
            paddingRight: "29px"
          }
        },
        
        {
          props: { variant: "ct13" },
          style: {
            paddingLeft: "13.4px",
            paddingRight: "13.4px"
          }
        },
        {
          props: { variant: "ct14" },
          style: {
            paddingLeft: "14px",
            paddingRight: "14px"
          }
        },
        {
          props: { variant: "ct16" },
          style: {
            paddingLeft: "16px",
            paddingRight: "16px"
          }
        },
        {
          props: { variant: "ct21" },
          style: {
            paddingLeft: "21px",
            paddingRight: "21px"
          }
        },
        {
          props: { variant: "ct31" },
          style: {
            paddingLeft: "31px",
            paddingRight: "31px"
          }
        }
      ]
    },

    MuiTextField: {
      variants: [
        {
          props: { variant: "rounded1" },
          style: {
            paddingTop: "10px",
            paddingBottom: "10px",
            borderRadius: "22.5px"
          }
        },

      ]
    },


  }
});

export default theme;