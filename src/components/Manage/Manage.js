import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Tabs, Tab } from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';

import Table from '../Table/Table';

const Manage = ({
  tabs,
  columns,
  items,
  isItemSelected,
  activeType,
  handleTypeChange,
  toolbarActions,
  handleItemSelection
}) => (
  <section>
    <Toolbar>
      <ToolbarGroup>
        <ToolbarTitle text="Manage" />
      </ToolbarGroup>
      <ToolbarGroup lastChild={true}>
        {toolbarActions}
      </ToolbarGroup>
    </Toolbar>
    
    <section>
      <Tabs
        onChange={handleTypeChange}
        value={activeType}
      >
        {tabs.map(tab => <Tab {...tab} value={tab.type} key={tab.type} />)}
      </Tabs>

      <Table
        columns={columns}
        items={items}
        isSelected={isItemSelected}
        onRowSelection={handleItemSelection}
      />
    </section>
  </section>
);

Manage.propTypes = {
  tabs: PropTypes.array,
  columns: PropTypes.array,
  items: PropTypes.array,
  isItemSelected: PropTypes.func,
  activeType: PropTypes.string,
  toolbarActions: PropTypes.arrayOf(
    PropTypes.node
  ),
  handleTypeChange: PropTypes.func.isRequired,
  handleItemSelection: PropTypes.func,
};

Manage.defaultProps = {
  tabs: [],
  columns: [],
  items: [],
  isItemSelected: () => false,
  activeType: null,
  toolbarActions: [],
  handleItemSelection: null,
};

export default Manage;