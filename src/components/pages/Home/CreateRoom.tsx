import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import AccountPicker from 'components/common/AccountPicker';
import { useHistory } from 'react-router-dom';
import { useStore } from 'store/hooks';
import { useDispatchCommand } from 'api/hooks';
import { RoomCreate } from 'api/commands';


const CreateRoom = () => {

    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState<string[]>([]);
    const [label, setLabel] = React.useState("");
  
    const history = useHistory();
    const currentAccount = useStore(state => state.currentAccount);
    const dispatchCommand = useDispatchCommand();


    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const handleSubmit = async () => {
      const newRoom = await dispatchCommand(RoomCreate, currentAccount?.id ?? "", label, selected);

      if (newRoom.status === 200) {
          const room_id = newRoom!.data!.room_id;
          history.push(`/room/${room_id}`)
      } else if(newRoom.status === 404) {
          // TODO: Error while creating room, error handling.. :( 
      }
    }

    const handleLabelChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      // @ts-ignore
      const value = event?.target?.value ?? "";

      setLabel(value);
    }

    return <div>
        <Button variant="contained" onClick={handleClickOpen}>Create Room</Button>
        
        <Dialog fullWidth onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title">
          Create room
        </DialogTitle>
        
        <DialogContent dividers>
          <TextField fullWidth id="outlined-basic" label="Room name" value={label} onChange={handleLabelChange} />
            
           
          <div style={{paddingTop: "20px"}}><AccountPicker multiple value={selected} onChange={setSelected} /></div>
        </DialogContent>
        
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
          <Button autoFocus onClick={handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>


}



export default CreateRoom;