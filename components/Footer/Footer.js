import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const date = new Date();

const styles = (theme) => ({
  footer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(36),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.reaction.black,
    padding:"10px",
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    color:"white",
  },
});

const Footer = ({ ...props }) => (
  <footer className={props.classes.footer}>
    <Typography className={props.classes.title} variant="caption">
      &copy; {date.getFullYear()} E-Commerce
    </Typography>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles, { name: "SkFooter" })(Footer);
