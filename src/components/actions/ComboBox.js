import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { observer, inject } from 'mobx-react'


@inject("store")
 class ComboBox extends Component {
     render(){
        return (
            <Autocomplete
              id="combo-box-demo"
              options={this.props.clients}
              getOptionLabel={option => option.title}
              style={{ width: 300 }}
              renderInput={params => (
                <TextField {...params} label="Combo box" variant="outlined" fullWidth />
              )}
            />
          );
     }
  
}

export default ComboBox