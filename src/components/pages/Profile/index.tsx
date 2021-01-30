import React from "react";
import { useLittera } from "react-littera";
import useStyles from "./styles"
import translations from "./trans"
import { Typography, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";
import { useAccount } from "api/hooks";
import CloseIcon from "@material-ui/icons/Close";
import cx from "classnames";


/**
 * Profile page component.
 */

const Profile = (props: ProfileDrawerProps) => {
  const [translated] = useLittera(translations);
  const classes = useStyles();

  const currentAccount = useAccount(undefined, true);

  if (!currentAccount) return null;

  const translatedSex = translated[currentAccount?.details?.sex || 'notGiven'];

  return (
    <div className={cx(classes.root, props.className)} style={props.style}>

      <Dialog open={props.open} onClose={props.onClose} maxWidth='xl' scroll='paper' PaperProps={{ style: { overflowY: 'visible' } }}>
        <DialogTitle id="scroll-dialog-title">
          <div className={classes.imgContainer} >
            <img alt="profile avatar" src={currentAccount.avatar_url} className={classes.img} />
          </div>
          <div className={classes.head}>
            <DialogActions><IconButton onClick={props.onClose}><CloseIcon /></IconButton></DialogActions>
          </div>
          <div className={classes.topData}>
            <Typography className={classes.name}>{currentAccount.details.first_name + ' ' + currentAccount.details.last_name}</Typography>
            <Typography className={classes.nickName}>{`#${currentAccount.label}`}</Typography>
          </div>
        </DialogTitle>
        <DialogContent >
          <div className={classes.profileContainer}>
            <div className={classes.detailsContainer}>
              <Typography className={classes.label} variant='h5'>
                {translated.fullName}
              </Typography>
              <Typography className={classes.detail} >
                {currentAccount.details.first_name + ' ' + currentAccount.details.middle_name + ' ' + currentAccount.details.last_name}
              </Typography>
              <Typography className={classes.label} variant='h5'>
                {translated.birthDate}
              </Typography>
              <Typography className={classes.detail} >
                {currentAccount.details.birthdate}
              </Typography>
              <Typography className={classes.label} variant='h5'>
                Email
              </Typography>
              {currentAccount.flags?.[0] === 'verify_email' ? <span className={classes.verify} > {translated.warning} </span> : null}
              <Typography className={classes.detail} >
                {currentAccount.contact.email}
              </Typography>
              <Typography className={classes.label} variant='h5' >
                {translated.sex}
              </Typography>
              <Typography className={classes.detail} >
                {translatedSex}
              </Typography>
            </div>
            <div className={classes.footer}>
              <Button className={classes.edit} variant='contained' size='small' color='primary' >
                edit
            </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div >
  )
}

// Props the component accepts.

type ProfileDrawerProps = {
  className?: string;
  style?: React.CSSProperties;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}


export default Profile;