

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import { TextField, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
});

const Detailpersonel = (props) => {
  const { personelId } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

 const handleClickOpen = () => {
  setOpen(true);
 }

  const handleClose = () => {
   setOpen(false);
  }
  
  return (
     <div>
        <Button onClick={handleClickOpen} color="primary">
            Detail
          </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
          <DialogTitle id="form-dialog-title">Employee Detail</DialogTitle>
            <DialogContent>
            <Grid style={{ marginTop: 20}}>
            <TextField
              id="outlined-read-only-input"
              label="E-mail"
              defaultValue="lisa@hotmail.com"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
        </Grid>
        <Grid style={{marginTop: 20}}>
        <TextField
          id="outlined-read-only-input"
          label="Phone"
          defaultValue="02126561212"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        </Grid>
        <Grid style={{marginTop: 20}}>
        <TextField
          id="outlined-read-only-input"
          label="Address"
          defaultValue="Yeni mah. Cıragan Cad. No.3 Istanbul"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        </Grid>
          <Grid container style={{ marginTop: 20 }}>
            <Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions> 
        </DialogActions>
      </Dialog>
      </div>
  );
};



Detailpersonel.propTypes = {
  code: PropTypes.string,
  personelId: PropTypes.number,
};
export default Detailpersonel;
