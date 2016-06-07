import RcCheckbox from 'rc-checkbox';
import React from 'react';
import CheckboxGroup from './Group';
import classNames from 'classnames';
import shouldUpdate from '../_util/shouldUpdate';

export default class Checkbox extends React.Component {
  static Group = CheckboxGroup;
  static defaultProps = {
    prefixCls: 'ant-checkbox',
  }
  shouldComponentUpdate(nextProps) {
    const checkProps = [
      'disabled',
      'checked',
      'prefixCls',
      'children',
      'style',
      'type',
      'className',
    ];
    return shouldUpdate(checkProps, this.props, nextProps);
  }
  render() {
    const { prefixCls, style, children, className, ...restProps } = this.props;
    const classString = classNames({
      [className]: !!className,
      [`${prefixCls}-wrapper`]: true,
    });
    return (
      <label className={classString} style={style}>
        <RcCheckbox {...restProps} prefixCls={prefixCls} children={null} />
        {children !== undefined ? <span>{children}</span> : null}
      </label>
    );
  }
}
