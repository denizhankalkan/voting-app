
import React ,{useState}  from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import avatar from './images/avatar.png';
import avatarman from './images/avatarman.png';
import DetailPersonel  from "./Detailpersonel";
import {  Grid, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },        
});


const App = (props) => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  
  return (

    <div className="item">
       <Grid container style={{marginLeft: 30}}>
          <Card className={classes.root}>
          <CardActionArea>

          <Grid container >
          <img style={{width: 150}} src={avatar} alt="avatar" />
          </Grid>
           
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Lisa Rose  <Grid><DetailPersonel /></Grid>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Backend Developer
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => setCount(count + 1)}>
              Vote 
            </Button>
            <Typography>
            {count}
            </Typography>
          
          </CardActions>
         
         </Card>
      </Grid>
     
        <Grid container style={{marginLeft: 30, marginTop: 20}}>
          <Card className={classes.root}>
          <CardActionArea>
            <Grid>
          <img style={{width: 150}} src={avatarman} alt="avatarman" />
          </Grid>
          
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Jhon Brown <Grid><DetailPersonel /></Grid>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Software Developer
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => setCount1(count1 + 1)}>
              Vote 
            </Button>
            <Typography>
            {count1}
            </Typography>
            
          </CardActions>
          
         </Card>
      </Grid>
      <Grid container style={{marginLeft: 30, marginTop: 20}}>
          <Card className={classes.root}>
          <CardActionArea>

          <Grid container >
          <img style={{width: 150}} src={avatar} alt="avatar" />
          </Grid>
           
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Helen Smith  <Grid><DetailPersonel /></Grid>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Team Leader
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => setCount2(count2 + 1)}>
              Vote 
            </Button>
            <Typography>
            {count2}
            </Typography>
          </CardActions>    
         </Card>
      </Grid>  
    </div>
  );
};

export default App;
