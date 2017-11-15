import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import ReactQuill from 'react-quill';

import './ArticleBuilder.css';
import EditableField from '../EditableField/EditableField';
import {
  CharacteristicField,
  CharacteristicKey,
  CharacteristicValue
} from '../CharacteristicField/CharacteristicField';

const ArticleBuilder = ({ name, theme, content, onChange, onSave }) => (
  <div className="article-builder">
    <Toolbar>
      <ToolbarGroup>
        <ToolbarTitle text="Article Builder" />
      </ToolbarGroup>
      <ToolbarGroup lastChild={true}>
        {
          onSave && (
            <RaisedButton
              label="Save"
              primary={true}
              onClick={onSave}
            />
          )
        }
      </ToolbarGroup>
    </Toolbar>
    
    <CharacteristicField>
      <CharacteristicKey>Name</CharacteristicKey>
      <CharacteristicValue>
        <EditableField input={{ value: name, name: 'name' }} onSubmit={onChange}>
          {name}
        </EditableField>
      </CharacteristicValue>
    </CharacteristicField>

    <CharacteristicField>
      <CharacteristicKey>Theme</CharacteristicKey>
      <CharacteristicValue>
        <EditableField input={{ value: theme, name: 'theme' }} onSubmit={onChange}>
          {theme}
        </EditableField>
      </CharacteristicValue>
    </CharacteristicField>
    
    <CharacteristicField>
      <CharacteristicKey xs="12" sm="12" md="12" lg="12">Content</CharacteristicKey>
      <CharacteristicValue xs="12" sm="12" md="12" lg="12">
        <ReactQuill
          value={content}
          onChange={value => onChange({ name: 'content', value })}
        />
      </CharacteristicValue>
    </CharacteristicField>
  </div>
);

export default ArticleBuilder;