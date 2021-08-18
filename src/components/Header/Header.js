import { MenuItem, TextField } from '@material-ui/core' 
import { createTheme,ThemeProvider } from '@material-ui/core/styles';
import React from 'react'
import "./Header.css"
import Categories from "../../data/Category"

function Header({category,setCategory,word,setWord,dark}) {
    const darkTheme = createTheme({
        palette: {
            primary:{
                main:dark?"#fff":"#000"
            },
          type: dark?"dark":"light",
        },
      });
      const handleChange= (language) =>{
          setCategory(language)
          setWord("")
      }
    return (
        <div className="header">
            <span className="title">{word? word:"word hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField id="standard-basic" label="Search" label="Standard" value={word}
                    onChange={(e)=>setWord(e.target.value)}/>
                    <TextField
                    className="select"
                    id="standard-select-currency"
                    select
                    label="Language"
                    value={category}
                    onChange={(e)=>handleChange(e.target.value)}
                    >
                        {Categories.map(option=>(
                            <MenuItem key={option.label} value={option.label}>
                            {option.value}
                            </MenuItem>

                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
