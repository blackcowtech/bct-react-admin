import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TimeLineHeader } from './Header';
import { TimeLineFooter } from './Footer';

export class TimeLineItem extends PureComponent {
  render() {
    const {
      children,
      footer,
      title,
      icon,
      titleIcon,
      time,
      color,

    } = this.props;
    return (
      <li>
        <i className={`${icon} ${color ? `bg-${color}` : ''}`} />
        {
            children ? (
              <div className="timeline-item">
                <span className="time">
                  <i className={titleIcon} />
                  {time}
                </span>

                <TimeLineHeader>
                  <span>
                    {title}
                  </span>
                </TimeLineHeader>
                <div className="timeline-body">
                  {children}
                </div>
                {
                    footer ? ({ footer }) : <TimeLineFooter />
                }
              </div>) : null
        }
      </li>
    );
  }
}
TimeLineItem.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node,
  title: PropTypes.string,
  titleIcon: PropTypes.string,
  time: PropTypes.string,
};
TimeLineItem.defaultProps = {
  icon: '',
  titleIcon: 'fa fa-clock-o',
  color: 'blue',
  children: null,
  footer: null,
  title: '',
  time: '',
};
export default { TimeLineItem };
