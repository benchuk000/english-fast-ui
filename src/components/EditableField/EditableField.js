import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import ModeEditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DoneIcon from 'material-ui/svg-icons/action/done';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import './EditableField.css';

const iconStyle = { height: '18px' };
const buttonStyle = { height: '38px', width: '38px', padding: '5px' };

class EditableField extends Component {
  static propTypes = {
    children: PropTypes.node,
    onSubmit: PropTypes.func.isRequired,

    input: PropTypes.object.isRequired,
  };

  static defaultProps = {
    children: null,
    input: { type: 'text', value: '' }
  }

  state = {
    isEditMode: false,
    inputValue: this.props.input.value,
  }

  componentWillReciveProps(nextProps, nextState) {
    nextState = {
      ...this.state,
      inputValue: this.props.input.value,
    }
  }

  onInputChange = (e, key, selectedOption) => {
    this.setState({ inputValue: e.target.value || selectedOption });
  }

  onSubmit = () => {
    this.props.onSubmit({ name: this.props.input.name, value: this.state.inputValue });
    this.switchEditMode();
  }

  onCancel = () => {
    this.setState({ inputValue: this.props.input.value });
    this.switchEditMode();
  }

  switchEditMode = isEditMode => this.setState(prevState => ({
    isEditMode: typeof isEditMode === 'undefined' ? !prevState.isEditMode : isEditMode,
  }));

  render() {
    const editComponent = this.props.input.type === 'select'
      ? (
        <SelectField
          {...this.props.input}
          value={this.state.inputValue}
          key="select"
          onChange={this.onInputChange}
          className="form-control"
          underlineShow={false}
        >
          {
            this.props.input.options.map((option, index) => (
              <MenuItem value={option.value} key={index} primaryText={option.title} />
            ))
          }
        </SelectField>
      )
      : (
        <TextField
          {...this.props.input}
          key="input"
          className="form-control"
          value={this.state.inputValue}
          onChange={this.onInputChange}
          underlineShow={false}
        />
      );

    return (
      <div className="editable-field">
        {
          this.state.isEditMode
            ? [
              editComponent,
              <IconButton
                touch
                onClick={this.onSubmit}
                iconStyle={iconStyle}
                style={buttonStyle}
                key="submit-button"
              >
                <DoneIcon />
              </IconButton>,
              <IconButton
                touch
                onClick={this.onCancel}
                iconStyle={iconStyle}
                style={buttonStyle}
                key="cancel-button"
              >
                <CloseIcon />
              </IconButton>,
            ]
            : this.props.children
        }

        {
          !this.state.isEditMode
            ? (
              <IconButton 
                touch
                className="editable-field__edit-button"
                iconStyle={iconStyle}
                style={buttonStyle}
                onClick={() => this.switchEditMode()}
              >
                <ModeEditIcon />
              </IconButton>
            )
            : null
        }
      </div>
    );
  }
}

export default EditableField;