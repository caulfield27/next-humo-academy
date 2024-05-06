import useSelectorHook from '@/src/hooks/selectorHook';
import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FunctionComponent } from 'react';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number},
) {
  
  function colorDep(){
    return `${props.value > 0 && props.value < 50 ? '#ef233c' : 
    (props.value >= 50 && props.value < 80 ? '#ffd449' : '#2dc653')}`

  }

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }} >
      <CircularProgress variant="determinate" {...props} style={{color:colorDep()}}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

        }}

      >
        <Typography
          variant="caption"
          component="div"
          color='GrayText'
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

interface Props{
  progress:number
}


const CircularWithValueLabel:FunctionComponent<Props> = ({progress})=>{
  return <CircularProgressWithLabel value={progress} />;
}

export default CircularWithValueLabel