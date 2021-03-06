import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Facebook, Twitter, Pinterest } from '@material-ui/icons';

import Styles from './styles/Styles';
import StarRatings from '../reviews/StarRatings';
import { getAverage } from '../reviews/ReviewHelpers';

const Details = ({ loading, product, hasErrors, meta, metaLoading }) => {
  if (loading) return <p>Loading product...</p>;
  if (hasErrors) return <p>Unable to display product.</p>;
  if (metaLoading) return <p>Loading product...</p>;

  const averageRating = getAverage(meta.ratings);
  return (
    <div className="product-info-main">
      <div className="product-title-wrapper">
        <StarRatings value={averageRating} />
        <div>{product.category}</div>
        <h1 className="page-title">{product.name}</h1>
      </div>
      <Styles />
      <div className="product-social-links">
        <Facebook fontSize="large" />
        <Twitter fontSize="large" />
        <Pinterest fontSize="large" />
      </div>
    </div>
  );
};

Details.propTypes = {
  loading: PropTypes.bool.isRequired,
  product: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number])
  ).isRequired,
  hasErrors: PropTypes.bool.isRequired,
  meta: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ).isRequired,
  metaLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.product.loading,
  product: state.product.product,
  hasErrors: state.product.hasErrors,
  meta: state.ratings.meta,
  metaLoading: state.ratings.loading,
});

export default connect(mapStateToProps)(Details);
