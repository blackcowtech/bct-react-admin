import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class TimeLineFooter extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div className="timeline-footer">
        {children}
      </div>
    );
  }
}
TimeLineFooter.propTypes = {
  children: PropTypes.node,
};
TimeLineFooter.defaultProps = {
  children: null,
};
export default { TimeLineFooter };
