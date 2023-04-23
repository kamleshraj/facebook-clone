import { createTheme } from '@mui/material'

export const theme=createTheme({
    palette:{
        mode: 'light',
        primary:{
            main:'#3c40c6'
        },
        secondary:{
            main:'#218c74'
        },
        success:{
            main:'#ffb142'
        },
        text:{
            light:'#808e9b',
            main:'#485460',
            dark:'#1e272e'
        }
    },
    typography: {
        subtitle1: {
            fontSize: 12,
        },
        body1: {
            fontWeight: 500,
        },
        header:{
            fontWeight:300,
            fontSize:'1.5rem',
            margin:'25px 0'
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