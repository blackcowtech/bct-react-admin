import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class TimeLineHeader extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <h3 className="timeline-header">
        {children}
      </h3>
    );
  }
}
TimeLineHeader.propTypes = {
  children: PropTypes.node,
};
TimeLineHeader.defaultProps = {
  children: null,
};
export default { TimeLineHeader };
