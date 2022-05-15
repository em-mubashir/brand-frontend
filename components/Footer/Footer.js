import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const date = new Date();

const styles = (theme) => ({
  footer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.reaction.black,
    padding:"30px",
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    color:"white",
  },
  customerSupportCopy: {
    paddingLeft: `${theme.spacing(135)}px !important`
  }
});

const Footer = ({ ...props }) => (
  <footer className={props.classes.footer}>
    <Grid container spacing={12}>
    <Grid item xs={4}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <Typography className={props.classes.title} variant="caption"  style = {{paddingLeft:'50px',paddingBottom:'0px'}}>
      &copy;Copyright {date.getFullYear()} E-Commerce Store
    </Typography>
    </Grid>
    <Grid item xs={4}>
              <Typography paragraph variant="caption" style = {{color:'white',Size:'0.5rem',paddingLeft:'40px'}}>
                FEEL FREE TO CONTACT US , ANYTIME ANYWHERE
              </Typography>
              <Typography paragraph variant="caption" style = {{color:'white',Size:'0.5rem',paddingLeft:'40px'}}>
                PHONE<br></br>0800-74007
              </Typography>
              <Typography paragraph variant="caption" style = {{color:'white',Size:'0.5rem',paddingLeft:'40px'}}>
                EMAIL<br></br>customercare@E-commercestore.com
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography paragraph variant="caption" style = {{color:'white',Size:'0.5rem',paddingLeft:'10px'}}>
                GET IN TOUCH
              </Typography>
              <Typography  style = {{marginTop: '1.6rem',margin:'10px'}} >
              <img src="/images/instagram.png" width="10%"   alt=""/>
              <img src="/images/facebook.png" width="10%"   alt=""/>
          </Typography>
            </Grid>
            </Grid>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles, { name: "SkFooter" })(Footer);
