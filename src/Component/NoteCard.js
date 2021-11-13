import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography, Avatar } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { green, yellow, pink, blue } from '@mui/material/colors';


const NoteCard = ({note, handleDelete}) => {
    
    return(
        <div>
            <Card 
                sx={ note.category === 'work' ? {border: '1px solid red'} : null }
                elevation={1}
            >
                <CardHeader 
                    avatar={
                        <Avatar sx={{backgroundColor:() =>{
                            if (note.category === 'work'){
                                return yellow[700]
                            }
                            if (note.category === 'money'){
                                return green[500]
                            }
                            if (note.category === 'todos'){
                                return pink[500]
                            }
                            return blue[500]
                            
                        }}} >
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={()=> handleDelete(note.id)}>
                            <DeleteOutline />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                    <Typography variant='body2' color='textSecondary'>
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard