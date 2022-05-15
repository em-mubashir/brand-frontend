import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import CatalogGrid from "@reactioncommerce/components/CatalogGrid/v1";
import PageLoading from "components/PageLoading";
import PageStepper from "components/PageStepper";
import PageSizeSelector from "components/PageSizeSelector";
import SortBySelector from "components/SortBySelector";
import ProductGridEmptyMessage from "./ProductGridEmptyMessage";

const styles = (theme) => ({
  filters: {
    justifyContent: "flex-end",
    marginBottom: theme.spacing(2)
  }
});

class ProductGrid extends Component {
  static propTypes = {
    catalogItems: PropTypes.arrayOf(PropTypes.object),
    classes: PropTypes.object,
    currencyCode: PropTypes.string.isRequired,
    isLoadingCatalogItems: PropTypes.bool,
    pageInfo: PropTypes.shape({
      startCursor: PropTypes.string,
      endCursor: PropTypes.string,
      hasNextPage: PropTypes.bool,
      hasPreviousPage: PropTypes.bool,
      loadNextPage: PropTypes.func,
      loadPreviousPage: PropTypes.func
    }),
    pageSize: PropTypes.number.isRequired,
    setPageSize: PropTypes.func.isRequired,
    setSortBy: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired
  };

  renderFilters() {
    const { classes, pageSize, setPageSize, setSortBy, sortBy } = this.props;

    return (
      <Grid container spacing={1} className={classes.filters}>
        <Grid item>
          <PageSizeSelector pageSize={pageSize} onChange={setPageSize} />
        </Grid>
        <Grid item>
          <SortBySelector sortBy={sortBy} onChange={setSortBy} />
        </Grid>
      </Grid>
    );
  }

  renderMainArea() {
    const { catalogItems, isLoadingCatalogItems, pageInfo } = this.props;

    if (isLoadingCatalogItems) return <PageLoading />;

    const products = (catalogItems || []).map((item) => item.node.product);
    if (products.length === 0) return <ProductGridEmptyMessage />;

    return (
      <Fragment>
         <Grid container spacing={12}>
        <Grid item xs={12} >
        <img src="/images/ban.png" width="100%"  alt=""/>
        <Typography  variant="h4" style = {{color:'#000',paddingLeft:'540px',fontWeight:'Bold',marginTop: '3rem'}} >
            New Arrival
          </Typography>
      </Grid>
      </Grid>
        <Grid container spacing={3}>
          <CatalogGrid
            products={products}
            placeholderImageURL="/images/placeholder.gif"
            {...this.props}
          />
        </Grid>
        <Grid container spacing={12}>
        <Grid item xs={6} >
          <br></br>
          <br></br>
          <br></br>
        <img src="/images/about.jpg" width="90%" marginTop="3rem"  alt=""/>
      </Grid>
      <Grid item xs={5} >
      <Typography  variant="h6"style = {{color:'#000',fontWeight:'Bold',Size:'36px',marginTop: '3rem'}}  >
      About us
            </Typography>
            <Typography style = {{color:'#000',Size:'0.5rem'}} >
            <p>As the global economic recession continues,the coonsumption of second-hand clothing has received considerable attension among consumers across the globe.This has resulted in the development of various departmental stores,weekend markets,and garage sales where people may buy second-hand products including clothing.This has resulted in the development of various departmental stores,weekend markets,and garage sales where people may buy second-hand products including clothing.As the global economic recession continues,the coonsumption of second-hand clothing has received considerable attension among consumers across the globe. </p>
            </Typography>
      </Grid>
      </Grid>
        <Grid item xs={12} >
        <br></br>
          <br></br>
          <br></br>
        <img src="/images/final.jpg" width="100%" height="50%"  alt=""/>
        </Grid>
       
        {pageInfo && <PageStepper pageInfo={pageInfo} />}
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        {this.renderFilters()}
        {this.renderMainArea()}
      </Fragment>
    );
  }
}

export default withStyles(styles)(ProductGrid);
