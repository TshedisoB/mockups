import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Tooltip } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  clickableIcon: {
    marginLeft: "10px",
    marginBottom: "10px",
    color: "black",
    "&:hover": {
      scale: 1.2,
      color: "rgb(11, 102, 193);",
    },
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <div className="Contact">
      <h3>Contact & Badges</h3>
      <div className="Contact-container">
        <Grid container>
          <Tooltip title="GitHub" arrow>
            <GitHubIcon
              onClick={() => {
                window.open("https://www.github.com/tshedisob", "_blank");
              }}
              className={classes.clickableIcon}
              sx={{ fontSize: 40 }}
            />
          </Tooltip>

          <Tooltip title="RocketChat" arrow>
            <RocketLaunchIcon
              onClick={() => {
                window.open(
                  "http://rocketchat.umuzi.org/direct/tshediso.boshiana",
                  "_blank"
                );
              }}
              className={classes.clickableIcon}
              sx={{ fontSize: 40 }}
            />
          </Tooltip>

          <Tooltip title="WhatsApp" arrow>
            <WhatsAppIcon
              onClick={() => {
                window.open("https://wa.me/0606101110", "_blank");
              }}
              className={classes.clickableIcon}
              sx={{ fontSize: 40 }}
            />
          </Tooltip>

          <Tooltip title="LinkedIn" arrow>
            <LinkedInIcon
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/tshediso-boshiana-b43096219/",
                  "_blank"
                );
              }}
              className={classes.clickableIcon}
              sx={{ fontSize: 40 }}
            />
          </Tooltip>

          <Tooltip title="Facebook" arrow>
            <FacebookIcon
              onClick={() => {
                window.open(
                  "https://www.facebook.com/tshediso.kwadi",
                  "_blank"
                );
              }}
              className={classes.clickableIcon}
              sx={{ fontSize: 40 }}
            />
          </Tooltip>
        </Grid>
      </div>
    </div>
  );
}

export default Contact;
