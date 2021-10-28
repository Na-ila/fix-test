import React from 'react';
import {observer} from 'mobx-react-lite'

import store from '../store/store'
import CreateVisitor from '../ModalWindows/CreateVisitor'
import CreateMusic from '../ModalWindows/CreateMusic'

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { blue } from '@mui/material/colors';

const Filter = observer((props) => {

    const createVisitor = () => {
        store.setCreateVisitorDialog(true)
    }

    const createMusic = () => {
        store.setCreateMusicDialog(true)
    }

    const selectPlace = (place) => {
        store.setSelectedPlace(place)
    }

    const selectGenre = (genre) => {
        store.setSelectedGenre(genre)
    }

    return (
        <>
            {props.visitorList ?
            <>
                <CreateVisitor/>
                <div style={{display: 'flex', gap: 10}}>
                    <ButtonGroup size="small" variant="contained" aria-label="outlined primary button group">
                        <Button
                            style={{backgroundColor: store.selectedPlace === 'all' ? blue[900] : blue[600]}}
                            onClick={() => selectPlace('all')}                        
                        >Все</Button>
                        <Button
                            style={{backgroundColor: store.selectedPlace === 'scene' ? blue[900] : blue[600]}}
                            onClick={() => selectPlace('scene')}                        
                        >Танцпол</Button>
                        <Button
                            style={{backgroundColor: store.selectedPlace === 'bar' ? blue[900] : blue[600]}}
                            onClick={() => selectPlace('bar')}
                        >Бар</Button>
                    </ButtonGroup>
                    <Button
                        variant='outlined'
                        size='small'
                        onClick={createVisitor}
                    >Создать нового посетителя</Button>
                </div>
            </>
            : 
            <>
                <CreateMusic/>
                <div style={{display: 'flex', gap: 10}}>
                    <ButtonGroup size="small" variant="contained" aria-label="outlined primary button group">
                        <Button
                            style={{backgroundColor: store.selectedGenre === 'all' ? blue[900] : blue[600]}}
                            onClick={() => selectGenre('all')}                        
                        >Все</Button>
                        <Button
                            style={{backgroundColor: store.selectedGenre === 'RnB' ? blue[900] : blue[600]}}
                            onClick={() => selectGenre('RnB')}                        
                        >RnB</Button>
                        <Button
                            style={{backgroundColor: store.selectedGenre === 'Electrohouse' ? blue[900] : blue[600]}}
                            onClick={() => selectGenre('Electrohouse')}
                        >Electrohouse</Button>
                        <Button
                            style={{backgroundColor: store.selectedGenre === 'Pop' ? blue[900] : blue[600]}}
                            onClick={() => selectGenre('Pop')}
                        >Pop</Button>
                    </ButtonGroup>
                    <Button
                        variant='outlined'
                        size='small'
                        onClick={createMusic}
                    >Добавить новый трек</Button>
                </div>
            </>
            }
        </>
    );
})

export default Filter;