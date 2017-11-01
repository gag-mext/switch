
//滑动开关. ([rc-form 文档](https://github.com/react-component/form))
import React from 'react';
import ReactDOM from 'react-dom';
import Switch from '../src';
import List from '@gag/list';
import { createForm } from 'rc-form';

let SwitchExample = (props) => {
  const { getFieldProps } = props.form;
  return (
    <List
      renderHeader={() => '表单开关项'}
    >
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch1', {
            initialValue: true,
            valuePropName: 'checked',
          })}
        />}
      >默认开</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch2', {
            initialValue: false,
            valuePropName: 'checked',
          })}
        />}
      >默认关</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch3', {
            initialValue: false,
            valuePropName: 'checked',
          })}
          disabled
        />}
      >默认关不可修改</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch4', {
            initialValue: true,
            valuePropName: 'checked',
          })}
          disabled
        />}
      >默认开不可修改</List.Item>
    </List>
  );
};

SwitchExample = createForm()(SwitchExample);

ReactDOM.render(<SwitchExample />, document.getElementById('sk-root'));
