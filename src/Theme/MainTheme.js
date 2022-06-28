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

    heading3: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "22px",
      lineHeight: "183.2%",
      /* or 40px */

      textAlign: "center",

      color: "#4D515B",
    },

    salesPageHeading: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "100%",
      /* identical to box height, or 16px */

      letterSpacing: "0.02em",

      /* Foundation /Blue/Dark */

      color: "#1A1E25",
    },

    salesTableHeading: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "13px",
      lineHeight: "18px",
      /* or 138% */


      alignItems: "center",
      textAlign: "center",
      letterSpacing: -0.08,

      color: "#707070",
    },

    salesTableHeading2: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "11.5px",
      lineHeight: "18px",
      /* or 138% */


      alignItems: "center",
      textAlign: "center",
      letterSpacing: -0.08,

      color: "#707070",
    },

    salesTableHeading3: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "13px",
      lineHeight: "18px",
      /* or 138% */


      letterSpacing: -0.08,

      color: "#707070",
    },

    salesTableBody: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "20px",
      /* identical to box height, or 167% */

      display: "flex",
      alignItems: "center",
      textAlign: "center",
      letterSpacing: -0.24,
      fontFeatureSettings: "tnum on, lnum on",

      color: "#1B2641",
    },

    salesTableBody2: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "11px",
      lineHeight: "116.7%",
      /* identical to box height, or 13px */


      textAlign: "center",

      color: "#1B2641",
    },

    salesTableBody3: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "20px",
      /* identical to box height, or 167% */


      textAlign: "center",
      letterSpacing: -0.24,
      fontFeatureSettings: "tnum on, lnum on",

      color: "#1B2641",
    },



    greenBadge: {
      background: "rgba(166, 252, 169, 0.5)",
      borderRadius: "2px",
      fontWeight: "14px",
      fontWeight: 700,
      color: "#0D7611",
      padding: "2px 4px 2px 4px"
    },

    redBadge: {
      background: "rgb(251, 222, 225)",
      borderRadius: "2px",
      fontWeight: "14px",
      fontWeight: 700,
      color: "#DB3B3B",
      padding: "2px 4px 2px 4px",

    },

    yellowBadge: {
      background: "rgba(255, 246, 171, 0.529);",
      borderRadius: "2px",
      fontWeight: "14px",
      fontWeight: 700,
      color: "#E49500",
      padding: "2px 4px 2px 4px",

    },


    fs20fw700: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "116.7%",
      color: "#000000"
    },

    fs23fw700: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "23px",

      color: "#1A1E25",
    },


    fs14fw500: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "150.2%",
      /* identical to box height, or 21px */


      color: "#4D515B"
    },



    fs13fw500: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "13px",
      lineHeight: "130%",
      /* identical to box height, or 17px */

      letterSpacing: "0.01em",

      color: "#4D515B",
    },

    fs12fw700: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: "16px",
      /* identical to box height */


      color: "#FFFFFF",
    },

    fs12fw400: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "22px",
      /* or 183% */


      /* amber black */

      color: "#072D4B",

      opacity: 0.6,
    },

    fs12fw500: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "16px",
      /* identical to box height */

      letterSpacing: "0.01em",

      color: "#00286B",
    },

    fs11fw500: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: 11,
      lineHeight: "169.7%",
      /* or 19px */


      color: "#000000"
    },

    fs10fw500: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "10px",
      lineHeight: "150.2%",
      /* identical to box height, or 15px */


      color: "#FFFFFF"

    },

    fs10fw400: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "22px",
      /* identical to box height, or 220% */


      /* amber black */

      color: "#072D4B",

      opacity: 0.4,

    },

    fs8fw400: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "8px",
      lineHeight: "130%",
      /* or 10px */

      letterSpacing: "0.01em",

      color: "#858585",

    },


    fs10fw500lh130: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "10px",
      lineHeight: "130%",
      /* identical to box height, or 13px */

      letterSpacing: "0.01em",

      color: "#686868"

    },

    fs15fw700: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "15px",
      lineHeight: "116.7%",
      /* identical to box height, or 18px */


      color: "#000000"

    },

    fs16fw700: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      /* identical to box height, or 16px */

      letterSpacing: "0.02em",

      color: "#1B2641",

    },

    fs15fw700lh130: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "15px",
      lineHeight: "130%",
      /* or 19px */

      letterSpacing: "0.01em",

      color: "#323643",

    },

    fs08fw400: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "8px",
      lineHeight: "150.2%",
      /* identical to box height, or 12px */


      color: "#4D515B"

    },

    seeAll: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "183.2%",
      /* identical to box height, or 26px */


      color: "#1D58AF"
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
        },

        {
          props: { variant: "button4" },
          style: {
            width: "118px",
            height: "38px",
            whiteSpace: "nowrap",
            border: "1px solid #072D4B",
            borderRadius: 4,

            fontFamily: "DM Sans",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "15px",
            lineHeight: "20px",

            /* identical to box height */

            textAlign: "center",

            color: "#072D4B",

          }
        },

        {
          props: { variant: "OnButton" },
          style: {
            background: "#EEFBFF",
            boxShadow: "0px 0px 4px rgba(9, 87, 203, 0.51)",
            borderRadius: "8px",
            // width: "91px",
            padding: "10px 7px",
            height: "28px",
            textTransform: "none",
            fontFamily: "DM Sans",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "11px",
            lineHeight: "116.7%",
            whiteSpace: "nowrap",
            /* identical to box height, or 13px */

            textAlign: "center",

            color: "#232326",

          }
        },
      ]
    },

    MuiToggleButtonGroup: {

      variants: [
        {
          props: { variant: "BHKToggleButton" },
          style: {
            color: "red",
            selected: {
              "&&": {
                backgroundColor: "red",
                color: "green"
              }
            }
          },
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
          props: { variant: "ct10" },
          style: {
            paddingLeft: "10px",
            paddingRight: "10px"
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
          props: { variant: "ct22" },
          style: {
            paddingLeft: "22px",
            paddingRight: "22px"
          }
        },

        {
          props: { variant: "ct25" },
          style: {
            paddingLeft: "25px",
            paddingRight: "25px"
          }
        },

        {
          props: { variant: "ct20" },
          style: {
            paddingLeft: "20px",
            paddingRight: "20px"
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

    MuiPaper: {
      variants: [

        {
          props: { variant: "square" },
          style: {
            background: "#FFFFFF",
            boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.25)",
            borderRadius: "0px",
          }
        },

        {
          props: { variant: "Base" },
          style: {
            background: "#FFFFFF",
            boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.25)",
            paddingTop: "25px",
            paddingBottom: "20px",
            marginTop: "25px"
          }
        },

        {
          props: { variant: "BGF9FBFF" },
          style: {
            background: "#F9FBFF",
            boxShadow: "0px 2px 10px rgba(9, 87, 203, 0.25)",
            paddingTop: "19px",
            paddingBottom: "14px",
            marginTop: "25px"
          }
        },

        {
          props: { variant: "tableRedBadge" },
          style: {
            width: "32px",
            height: "22px",
            color: "#DB3B3B",
            background: "rgba(255, 135, 135, 0.25)",
            borderRadius: 4,

            display: "flex",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "12px",
            justifyContent: "center",
            alignItems: "center"
            // lineHeight: 18,
          }
        },

        {
          props: { variant: "tableGreenBadge" },
          style: {
            width: "32px",
            height: "22px",
            background: "rgba(166, 252, 169, 0.5)",
            borderRadius: 4,
            display: "flex",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "12px",
            justifyContent: "center",
            alignItems: "center"
          }
        },

        {
          props: { variant: "tableYellowBadge" },
          style: {
            width: "32px",
            height: "22px",
            background: "rgba(255, 246, 171, 0.529)",
            borderRadius: 4,
            display: "flex",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "12px",
            justifyContent: "center",
            alignItems: "center"

          }
        },

        {
          props: { variant: "E9F2FF" },
          style: {
            background: "#E9F2FF",
            boxShadow: "0px 4px 4px rgba(74, 128, 240, 0.3)",
            borderRadius: "10px",
          }
        },

        {
          props: { variant: "saleScore" },
          style: {
            background: "#C7D9FF",
            boxShadow: "0px 0px 4px rgba(29, 88, 175, 0.57)",
            borderRadius: "4px",
            fontFamily: "DM Sans",
            fontStyle: "normal",

            fontWeight: 700,
            fontSize: "36px",
            // lineHeight: "47px",
            height: "51px",
            width: "max-content",
            paddingLeft: "8px",
            paddingRight: "8px",
            /* identical to box height */

            letterSpacing: "0.01em",
            textDecorationLine: "underline",

            color: "#00286B",

          }
        },

        {
          props: { variant: "score" },
          style: {
            paddingTop: "4.82px",
            paddingLeft: "21px",
            paddingBottom: "4.82px",
            paddingRight: "21px",
            background: "#4ABC4F",
            borderRadius: "5px", fontFamily: "DM Sans",
            textAlign: "center",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "21px",

            /* identical to box height */


            color: "#FFFFFF"
          }
        },

        {
          props: { variant: "scoreBadge" },
          style: {
            paddingTop: "4.82px",
            paddingLeft: "6px",
            paddingBottom: "4.82px",
            paddingRight: "6px",
            background: "#4ABC4F",
            borderRadius: "5px", fontFamily: "DM Sans",
            textAlign: "center",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "21px",

            /* identical to box height */


            color: "#FFFFFF"
          }
        },

      ]
    },

  }
});

export default theme;