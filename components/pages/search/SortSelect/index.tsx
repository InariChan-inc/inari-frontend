import { VoidFunctionComponent, useState } from 'react';
import {
  Button,
  MenuItem,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button as ButtonText } from '@typography';
import {
  StyledMenu,
  StyledButton
} from './styles';

export interface SortSelectProps {
  onChange?: (sortItem: string) => void;
}

const sortMenuItems = [
  'Не сортувати',
  'Даті виходу',
  'Рейтингу',
  'Алфавіту (від А до Я)',
  'Алфавіту (від Я до А)',
]

const SortSelect: VoidFunctionComponent<SortSelectProps> = ({
  onChange = () => {},
}) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [sortItem, setSortItem] = useState(sortMenuItems[0]);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleMenuItemClick = (item: string) => () => {
    setSortItem(item);
    onChange(item);
    handleClose();    
  };

  return (
    <>
      <StyledButton
        id="demo-customized-button"
        aria-controls="demo-customized-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <ButtonText type={3} color="brown-2">
          Сортувати по{sortItem !== sortMenuItems[0] ? ' ' + sortItem.charAt(0).toLocaleLowerCase() + sortItem.slice(1) : ''}
        </ButtonText>    
      </StyledButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {sortMenuItems.filter((item) => sortItem !== item).map((item) => (
          <MenuItem key={item} onClick={handleMenuItemClick(item)} disableRipple>
            {item}
          </MenuItem>
        ))}
      </StyledMenu>
    </>
  );
};


export default SortSelect;
