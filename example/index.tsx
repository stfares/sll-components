import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Toggle } from '../src/index';
// import { Toggle } from '../dist/index';

import { WmxTiledList } from '../src/index';


const App = () => {
  // const [isOn, setIsOn] = React.useState(false);
  function handleReportTypeChange(e) {
    setReportType(e.currentTarget.value)
  }
  const [reportType, setReportType] = React.useState<number>(0)

  enum TimelogsReportTypeEnum {
    GROUP = 0,
    STUDENT = 1
  }
  

  const reportTypeItems = [
    {
      id: 'report-type-groups',
      label:'Group',
      icon: 'mdi-account-group',
      description: 'View approved hours across all students in selected groups.',
      value: TimelogsReportTypeEnum.GROUP
    },
    {
      id: 'report-type-students',
      label: 'Student',
      icon: 'mdi-human',
      description: 'View total approved hours for each student.',
      value: TimelogsReportTypeEnum.STUDENT
    }
  ]
  return (
    <div>
      {/* <Toggle isOn={isOn} handleChange={() => setIsOn(!isOn)} /> */}
      <WmxTiledList
            name='ReportType' selectedItemIndex={reportType} onChange={handleReportTypeChange}
            items={reportTypeItems}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
