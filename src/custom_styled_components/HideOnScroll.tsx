import { Slide, SlideProps } from '@mui/material';
import { ReactElement } from 'react';

export const HideOnScroll: React.FC<{
  dir: 'left' | 'right' | 'up' | 'down';
}> = (props) => {
  return (
    <Slide appear={false} direction={props.dir}>
      {props.children as ReactElement}
    </Slide>
  );
};
