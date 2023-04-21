import { createTheme } from '@mui/material'

export const theme=createTheme({
    palette:{
        primary:{
            main:'#218c74'
        },
        secondary:{
            main:'#218c74'
        },
        success:{
            main:'#ffb142'
        },
        othercolor:{
            main:'#c44569'
        }
    },
    typography: {
        subtitle1: {
            fontSize: 12,
        },
        body1: {
            fontWeight: 500,
        },
        button: {
            fontStyle: 'italic',
        },
        h3:{
            fontFamily: 'Lora, serif',
            fontSize:'3rem',
            fontWeight:'600'
        }
    }
})