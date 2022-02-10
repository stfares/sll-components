import React from 'react';
import { Meta, Story } from '@storybook/react';
import WmxTiledList, { WmxTiledListProps } from '../src/components/tiled-list/WmxTiledList';
import WmxTitledListItem from '../src/components/tiled-list/WmxTiledListItem';

const meta: Meta = {
  title: 'Layout/List',
  component: WmxTiledList,
  subcomponents: { WmxTitledListItem }
};

export default meta;

const reportTypeItems = [
  {
    id: 'report-type-groups',
    label:'Group',
    icon: 'mdi-account-group',
    description: 'View approved hours across all students in selected groups.',
    value: 0
  },
  {
    id: 'report-type-students',
    label: 'Student',
    icon: 'mdi-human',
    description: 'View total approved hours for each student.',
    value: 1
  }
]

const Template: Story<WmxTiledListProps> = args => <WmxTiledList {...args}></WmxTiledList>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const List = Template.bind({});

List.args = {name : 'ReportType', selectedItemIndex: 1, onChange: () => {}, items: reportTypeItems};