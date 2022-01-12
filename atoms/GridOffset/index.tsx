import { VoidFunctionComponent } from 'react';
import { Grid, GridProps } from '@mui/material';


const GridOffset: VoidFunctionComponent<Pick<GridProps, 'xs' | 'sm' | 'md' | 'xl'>> = (props) => (
  <Grid item {...props} />
);

export default GridOffset;