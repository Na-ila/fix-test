import React from 'react';
import {observer} from 'mobx-react-lite'

import store from '../store/store'

import RnB_dance from '../../assests/RnB_dance.gif'
import Pop_dance from '../../assests/Pop_dance.gif'
import Electrohouse_dance from '../../assests/Electrohouse_dance.gif'
import Waiting from '../../assests/Waiting.gif'

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'inline-block',
    }
}))

const Animation = observer(() => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            {store.selectedMusicToPlay ? 
                store.isPlaying ?
                store.selectedMusicToPlay.genre === 'Pop' ?
                    <img src={Pop_dance} alt="Pop_dance" /> : store.selectedMusicToPlay.genre === 'RnB' ?
                    <img src={RnB_dance} alt="RnB_dance" /> : store.selectedMusicToPlay.genre === 'Electrohouse' ?
                    <img src={Electrohouse_dance} alt="Electrohouse_dance" /> 
                : null
                : <img src={Waiting} alt="Waiting" /> 
            : null}
        </div>
    );
})

export default Animation;