import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PictureAsPdfOutlinedIcon from '@material-ui/icons/PictureAsPdfOutlined';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  
  return (
    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Aged Care Companies. Ratio Analysis</Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <PictureAsPdfOutlinedIcon/>
          <Link href="https://pdffilesagedcareanalysis.s3-ap-southeast-2.amazonaws.com/DebtToEquity2019.pdf" >
          DebtToEquity-2019
      </Link>
          
            </Paper>
        </Grid>

          
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <PictureAsPdfOutlinedIcon/>
          <Link href="https://pdffilesagedcareanalysis.s3-ap-southeast-2.amazonaws.com/InterestCoverage2019.pdf" >
          InterestCoverage-2019
      </Link>
          
            </Paper>
        </Grid>
       
      </Grid>
      </Container>
  );
}

export default App;
