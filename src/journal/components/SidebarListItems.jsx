import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import moment from "moment";
import "moment/locale/es";
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';


export const SidebarListItems = ({ title = "", body, id, date, imageUrls = [] }) => {

  const dispatch = useDispatch();

  const onClickNote = () => [
    dispatch(setActiveNote({ id, title, body, date,imageUrls })),
  ];
  
  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 16) + "..." : title;
  }, [title]);
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
          <ListItemText
            secondary={moment(date).format("MMMM Do YYYY, h:mm:ss a")}
          />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
