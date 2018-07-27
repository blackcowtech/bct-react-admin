import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class TimeLine extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <ul className="timeline">
        {children}
      </ul>
    );
  }
}
TimeLine.propTypes = {
  children: PropTypes.node,
};
TimeLine.defaultProps = {
  children: null,
};
export default { TimeLine };
