import React  from 'react';
import { render } from 'react-dom';


import { DatePicker } from 'antd';//not working

//import DatePicker from 'antd/lib/date-picker';
//import 'antd/lib/date-picker/style/css';
// is working

Meteor.startup(() => {
  render(<div>
          <h2>1111</h2>
          <DatePicker />
        </div>,
    document.getElementById('root'));
});
