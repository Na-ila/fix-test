import React from 'react';
import {observer} from 'mobx-react-lite'

import store from '../store/store'

import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import { blue } from '@mui/material/colors';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 10,
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '100%',
    }
}))

const CurrMusic = observer(() => {
    const classes = useStyles()

    const previousTrack = () => {
        const currTrackIndex = store.musicList.indexOf(store.selectedMusicToPlay)
        if (currTrackIndex === 0) {
            store.setSelectedMusicToPlay(store.musicList[store.musicList.length - 1])
        } else {
            store.setSelectedMusicToPlay(store.musicList[currTrackIndex - 1])
        }
    }

    const play = () => {
        store.setIsPlaying(store.isPlaying ? false : true)
    }

    const nextTrack = () => {
        const currTrackIndex = store.musicList.indexOf(store.selectedMusicToPlay)
        if (currTrackIndex === (store.musicList.length - 1)) {
            store.setSelectedMusicToPlay(store.musicList[0])
        } else {
            store.setSelectedMusicToPlay(store.musicList[currTrackIndex + 1])
        }
    }

    return (
        <Paper className={classes.root} style={{backgroundColor: blue[100]}}>
            <div style={{width: '50%'}}>
                <div className={classes.name}>
                    {store.selectedMusicToPlay ? store.selectedMusicToPlay.name : <Skeleton variant="text" width="100%"/>}
                </div>
                <br/>
                <div>
                    {store.selectedMusicToPlay ? store.selectedMusicToPlay.genre : <Skeleton variant="text" width="70%"/>}
                </div> 
            </div>
            <div>
                <IconButton onClick={store.selectedMusicToPlay ? previousTrack : null}>
                    <SkipPreviousIcon/>
                </IconButton>
                <IconButton onClick={store.selectedMusicToPlay ? play : null}>
                    {store.isPlaying ? <PauseIcon/> : <PlayArrowIcon/>}
                </IconButton>
                <IconButton onClick={store.selectedMusicToPlay ? nextTrack : null}>
                    <SkipNextIcon/>
                </IconButton>
            </div>
        </Paper>
    );
})

export default CurrMusic;