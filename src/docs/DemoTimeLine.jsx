import React from 'react';
import { TimeLine, TimeLineItem, TimeLineLabel } from '../lib/index';

export const DemoTimeLine = () => (
  <div className="row">
    <div className="col-md-12 col-sm-12 col-xs-12">
      <TimeLine>
        <TimeLineLabel label="test 1" color="red" />
        <TimeLineItem title="test" icon="fa fa-envelope" color="red" time="09:00:00">
          <p>
test test test test
          </p>
        </TimeLineItem>
        <TimeLineLabel label="test 2" color="green" />
        <TimeLineItem title="test" icon="fa fa-envelope" color="green" time="10:00:00">
          <p>
test test test test
          </p>
        </TimeLineItem>
        <TimeLineLabel label="test 3" color="blue" />
        <TimeLineItem title="test" icon="fa fa-envelope" color="blue" time="11:00:00">
          <p>
test test test test
          </p>
        </TimeLineItem>
        <TimeLineLabel label="test 4" color="yellow" />
        <TimeLineItem title="test" icon="fa fa-envelope" color="yellow" time="12:00:00">
          <p>
test test test test
          </p>
        </TimeLineItem>
        <TimeLineItem icon="fa fa-clock-o" color="gray" />
      </TimeLine>
    </div>
  </div>
);

export default { DemoTimeLine };
