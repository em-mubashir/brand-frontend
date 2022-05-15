import React, { useCallback } from "react";
import Router, { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import useStores from "hooks/useStores";
import { locales } from "translations/config";
import useTranslation from "hooks/useTranslation";

const useStyles = makeStyles((theme) => ({
  localeSelect: {
    margin: theme.spacing(0, 1),
    color:"white",
  },
  localeSelectText: {
    fontSize: "1rem",
    color:"white",
    borderBottom: `solid 2px ${theme.palette.reaction.white}`,
  }
}));

const LocaleDropdown = () => {
  const classes = useStyles();
  const router = useRouter();
  const { locale, t } = useTranslation("common"); // eslint-disable-line id-length
  const { uiStore } = useStores();

  const changeLanguage = useCallback((language) => {
      const regex = new RegExp(`^/(${locales.join("|")})`);
      uiStore.setLanguage(language);
      Router.push(
        router.pathname,
        router.asPath.replace(regex, `/${language}`)
      );
    },
    [router]
  );

  return (
    <div className={classes.localeSelect} >
      <Select
        classes={{ root: classes.localeSelectText }}
        id="locale-select"
        value={locale}
        onChange={(event) => changeLanguage(event.target.value)}
        style = {{color:'white'}}
      >
        { locales.map((localeOption, index) => <MenuItem key={index} value={localeOption} style = {{color:'white',backgroundColor:'#000000'}}>{t(localeOption)}</MenuItem>)}
      </Select>
    </div>
  );
};

export default LocaleDropdown;
