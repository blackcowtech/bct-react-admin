import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class TimeLineLabel extends PureComponent {
  render() {
    const {
      label,
      color,
    } = this.props;
    return (
      <li className="time-label">
        <span className={`bg-${color}`}>
          {label}
        </span>
      </li>
    );
  }
}
TimeLineLabel.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
};
TimeLineLabel.defaultProps = {
  label: '',
  color: 'blue',
};
export default { TimeLineLabel };
