antd + meteor
make a explain for meteor issue https://github.com/meteor/meteor/issues/8399
https://ant.design/docs/react/introduce#Usage

Use babel-plugin-import (Recommended) https://github.com/ant-design/babel-plugin-import
This allows you to import components from antd without having to manually import the corresponding stylesheet. The antd babel plugin will automatically import stylesheets.

// import js and css modularly, parsed by babel-plugin-import
import { DatePicker } from 'antd';


Manually import
import DatePicker from 'antd/lib/date-picker';  // for js
import 'antd/lib/date-picker/style/css';        // for css
// import 'antd/lib/date-picker/style';         // that will import less