import React from 'react'

import Music from './components/Music'
import Visitors from './components/Visitors'
import Filter from './components/Filter'

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
  musicList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10
  },
}))

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.leftBlock}>
        <div className={classes.musicList}>
          <Filter/>
          <Music/>
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
}

export default App;
