import { useState } from "react";
import Button from "@material-ui/core/Button";
import ModalDialog from "./ModalDialog";

function HireButton() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="HireButton">
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Hire Me
      </Button>
      <ModalDialog open={open} handleClose={handleClose} />
    </div>
  );
}

export default HireButton;
