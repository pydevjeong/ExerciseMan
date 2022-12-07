import React, { useState } from "react";
import { Container, Stack } from "@mui/material";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const NoticeCard = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container style={{marginTop:"5%"}}>
      <Stack bgcolor={'#5E5DF033'}>
      <Button variant="outlined" onClick={handleClickOpen}>
        공지사항
      </Button>
      </Stack>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          공지사항
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          [개발] : 
          이 사이트는 아직 개발 중인 단계이므로 학기 마무리 후 리뉴얼 시켜 동적 사이트로 만들 예정입니다
          </Typography>
          <Typography gutterBottom>
          여기에 있는 공지사항은 참고용이며 추후 관리자 기능이 생기면 업로드할 예정입니다.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            닫기
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Container>
  );
};

export default NoticeCard;
