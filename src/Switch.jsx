import '../style';
import React from 'react';
import classNames from 'classnames';

class Switch extends React.Component {
  onChange = (e) => {
    const checked = e.target.checked;
    if (this.props.onChange) {
      this.props.onChange(checked);
    }
  }

  render() {
    let { prefixCls, style, name, checked, disabled, className, platform } = this.props;
    const isAndroid = platform === 'android' || (platform === 'cross' && !!navigator.userAgent.match(/Android/i));
    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className as string]: className,
      [`${prefixCls}-android`]: isAndroid,
    });

    return (<label className={wrapCls} style={style}>
        <input
          type="checkbox"
          name={name}
          className={`${prefixCls}-checkbox`}
          {...(disabled ? { disabled: 'disabled' } : '') }
          checked={checked}
          onChange={this.onChange}
        />
        <div className="checkbox" />
      </label>);
  }
}
Switch.defaultProps = {
    prefixCls: 'am-switch',
    name: '',
    checked: false,
    disabled: false,
    onChange() {},
    platform: 'cross',
};
Switch.propTypes = {
  style:React.PropTypes.object,
  checked:React.PropTypes.bool,
  disabled:React.PropTypes.bool,
  onChange:React.PropTypes.func,
  /* web only */
  prefixCls: React.PropTypes.string,
  className: React.PropTypes.string,
  name: React.PropTypes.string,
  platform: React.PropTypes.string,
};
Switch.displayName = "Switch";
module.exports=Switch;
