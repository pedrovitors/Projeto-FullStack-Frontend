import { createTheme } from '@material-ui/core/styles'
import {primaryColor, secondaryColor, neutralColor} from "./colors"

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "black",
        },
        secondary: {
            main: secondaryColor,
            contrastText: "black",
        },
        text: {
            primary: neutralColor
        }
    },
})

export default theme