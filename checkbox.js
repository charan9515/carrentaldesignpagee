import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels(props) {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label={props.c1}/>
      <FormControlLabel control={<Checkbox />} label={props.c2} />
      <FormControlLabel control={<Checkbox />} label={props.c3} />
      <FormControlLabel control={<Checkbox />} label={props.c4} />
      <FormControlLabel control={<Checkbox />} label={props.c5}/>
    </FormGroup>
  );
}