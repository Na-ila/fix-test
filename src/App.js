import React from 'react'
import {observer} from 'mobx-react-lite'
import Sound from 'react-sound'

import RnB from './assests/RnB.mp3'
import Pop from './assests/Pop.mp3'
import Electrohouse from './assests/Electrohouse.mp3'

import store from './components/store/store'
import Music from './components/Music'
import Visitors from './components/Visitors'
import Filter from './components/Filter'
import CurrMusic from './components/CurrMusic'
import Animation from './components/DanceAnim'

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 20
  },
  leftBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    width: '100%'
  },
  visitorList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
  },
  musicBlock: {
    display: 'flex',
    gap: 20,
    alignItems: 'flex-start',
    width: '100%'
  },
  musicList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10
  },
}))

const App = observer(() => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <div className={classes.leftBlock}>
          <div className={classes.musicBlock}>
            <div className={classes.musicList}>
              <Filter/>
              <Music/>
            </div>
            <div
            style={{width: '40%'}}
            >
              <CurrMusic/>
            </div>
          </div>
          <Animation/>
        </div>
        <div className={classes.visitorList}>
          <Filter visitorList/>
          <Visitors/> 
        </div>
      </div>
      {store.selectedMusicToPlay &&
      <Sound
        url={store.selectedMusicToPlay.genre === 'RnB' ? RnB : store.selectedMusicToPlay.genre === 'Pop' ? Pop : Electrohouse}
        playStatus={store.isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
      />
      }
    </>
  );
})

export default App;
