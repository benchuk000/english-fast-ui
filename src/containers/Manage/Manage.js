import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ModeEditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteForeverIcon from 'material-ui/svg-icons/action/delete-forever';

import * as manageActions from '../../actions/manage';
import * as TYPE from '../../constants/types';

import TABS from './constants/tabs';
import COLUMNS from './constants/columns';
import Manage from '../../components/Manage/Manage';

class ManageContainer extends Component {
  componentWillMount() {
    this.setDataByActiveType(this.props.match.params.type);
  }

  componentWillUnmount() {
    this.props.resetData();
  }

  handleTypeChange = activeType => this.props.history.replace(`/manage/${activeType}`)

  setDataByActiveType = activeType => {
    this.props.resetData();
    this.props.setActiveType(activeType);
    this.props.getItems();
  }

  edit = () => {
    switch (this.props.activeType) {
      case TYPE.USERS:
        return this.props.history.push(`/profile/${this.props.selectedItemId}`);
      case TYPE.QUESTIONS:
        return this.props.history.push(`/question-builder/${this.props.selectedItemId}`);
      case TYPE.ARTICLES:
        return this.props.history.push(`/article-builder/${this.props.selectedItemId}`);
    }
  }

  create = () => {
    switch (this.props.activeType) {
      case TYPE.QUESTIONS:
        return this.props.history.push(`/question-builder`);
      case TYPE.ARTICLES:
        return this.props.history.push(`/article-builder`);
    }
  }

  isEditDisabled = () => !this.props.selectedItemId

  isDeleteDisabled =() => {
    if (this.props.activeType === TYPE.USERS && this.props.selectedItemId === this.props.currentUserId) {
      return true;
    }

    return !this.props.selectedItemId;
  }

  handleItemSelection = (selectedItemIndex) => {
    const slectedItemId = selectedItemIndex.length === 1
      ? this.props.items[selectedItemIndex[0]]._id
      : null;

    this.props.setSelectedItemId(slectedItemId);
  }

  render() {
    const toolbarActions = [
      <IconButton
        label="Edit"
        onClick={this.edit}
        disabled={this.isEditDisabled()}
        children={<ModeEditIcon />}
      />,
      <IconButton
        label="Delete"
        onClick={this.props.removeItem}
        disabled={this.isDeleteDisabled()}
        children={<DeleteForeverIcon />}
      />,
      <RaisedButton label="Create" primary onClick={this.create} />,
    ];

    return (
      <Manage
        tabs={TABS}
        columns={COLUMNS[this.props.activeType]}
        items={this.props.items}
        isItemSelected={item => item._id === this.props.selectedItemId}
        activeType={this.props.activeType}
        toolbarActions={toolbarActions}
        handleTypeChange={this.handleTypeChange}
        handleItemSelection={this.handleItemSelection}
      />
    );
  }
}

const mapStateToProps = state => ({
  currentUserId: state.auth.currentUser._id,
  isLoading: state.manage.isLoading,
  items: Object.values(state.manage.items),
  selectedItemId: state.manage.selectedItemId,
  activeType: state.manage.activeType,
});

const mapDispatchToProps = dispatch => ({
  setActiveType: activeType => dispatch(manageActions.setActiveType(activeType)),
  getItems: () => dispatch(manageActions.getItems()),
  removeItem: () => dispatch(manageActions.removeItem()),
  setSelectedItemId: selectedItemId => dispatch(manageActions.setSelectedItemId(selectedItemId)),
  resetData: () => dispatch(manageActions.resetData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageContainer);
