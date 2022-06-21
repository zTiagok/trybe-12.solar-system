import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline, id } = this.props;

    return (
      <h2 id={ id }>{ headline }</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Title;
