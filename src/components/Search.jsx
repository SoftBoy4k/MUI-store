import { TextField } from "@mui/material";

export default function Search({onChange, value}) {

    return (
        <TextField 
            id="standard-basic" 
            label="Search"
            variant="standard"
            sx={{mb: "2rem"}}
            value = {value}
            onChange = {onChange}
        />
    );
}