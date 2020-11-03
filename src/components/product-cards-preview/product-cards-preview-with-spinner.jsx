import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import BestProducts from './product-cards-preview.component';
import WithSpinnerGet from "../with-spinner/with-spinner.component";
import { selectFetchingSuccess, selectIsFetching } from "../../redux/fetching/fetching.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
  actionSuccess: selectFetchingSuccess
});

const BestProductsWithSpinner = compose(
  connect(mapStateToProps),
  WithSpinnerGet
)(BestProducts);

export default BestProductsWithSpinner;