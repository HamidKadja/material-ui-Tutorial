import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import TextField from '@mui/material/TextField';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useHistory } from 'react-router';

export default function Create() {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('money')

  const fieldStyle = {
    margin:'20px auto',
    display:'block'
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(title && details){
      fetch('http://localhost:8000/notes',{
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify({title, details,category})
      }).then(()=> history.push('/'))
    }else {
      if(title==='') setTitleError(true)
      if(details==='') setDetailsError(true)
    }
           
  }

  return (
    <Container >
      <Typography
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField 
          sx={fieldStyle}
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={titleError}
        />
        <TextField 
          sx={fieldStyle}

          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant='outlined'
          color='secondary'
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <FormControl color='secondary' sx={fieldStyle} >
          <FormLabel >Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit" 
          color="secondary" 
          variant="contained"
          endIcon={<KeyboardArrowRightOutlinedIcon />}>
          Submit
        </Button>
      </form>


      
    </Container>
  )
}