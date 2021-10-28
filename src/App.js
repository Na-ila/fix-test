import React from 'react'
import {observer} from 'mobx-react-lite'

import store from './components/store/store'
import Music from './components/Music'
import Visitors from './components/Visitors'
import Filter from './components/Filter'
import CurrMusic from './components/CurrMusic'

import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  leftBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  },
  visitorList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 10
  },
  musicBlock: {
    display: 'flex',
    gap: 20,
    alignItems: 'flex-start'
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
    <div className={classes.root}>
      <div className={classes.leftBlock}>
        <div className={classes.musicBlock}>
          <div className={classes.musicList}>
            <Filter/>
            <Music/>
          </div>
          <CurrMusic/>
        </div>
        <Paper>
          Animation
        </Paper>
      </div>
      <div className={classes.visitorList}>
        <Filter visitorList/>
        <Visitors/> 
      </div>
    </div>
  );
})

export default App;
