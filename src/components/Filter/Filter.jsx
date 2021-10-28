import React from 'react';
import {observer} from 'mobx-react-lite'

import store from '../store/store'
import CreateVisitor from '../ModalWindows/CreateVisitor'

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { blue } from '@mui/material/colors';

const Filter = observer(() => {

    const createVisitor = () => {
        store.setCreateVisitorDialog(true)
    }

    const selectPlace = (place) => {
        store.setSelectedPlace(place)
    }

    return (
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
    );
})

export default Filter;