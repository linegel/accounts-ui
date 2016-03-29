import React from 'react';
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base';

export class Field extends React.Component {
  componentDidMount() {
    // Trigger an onChange on inital load, to support browser prefilled values.
    const { onChange } = this.props;
    let node = ReactDOM.findDOMNode(this);
    if (node) {
      let value = node.getElementsByTagName('input')[0].value;
      // Match the data format of a typical onChange event.
      onChange({ target: { value: value } });
    }
  }

  render() {
    const { id, hint, label, type = 'text', onChange, className = "field" } = this.props;
    return (
      <div className={ className }>
        <label htmlFor={ id }>{ label }</label>
        <input id={ id } type={ type } onChange={ onChange } placeholder={ hint } defaultValue="" />
      </div>
    );
  }
}
Field.propTypes = {
  onChange: React.PropTypes.func
};

Accounts.ui.Field = Field;
