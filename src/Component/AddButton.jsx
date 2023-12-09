import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

import { useAppState } from "../AppStateContext";

import AddinForm from "./Addition";

const AddButton = ({ groupId, users, status, priority }) => {
  const { selectedOptions } = useAppState();
  const [openForm, setOpenForm] = useState(false);

  const IconClick = () => {
    setOpenForm(true);
  };

  const FormClose = () => {
    setOpenForm(false);
  };

  return (
    <>
      <IconButton onClick={IconClick}>
        <AddIcon style={{ fontSize: 18 }} />
      </IconButton>
      <AddinForm
        state={selectedOptions.grouping}
        open={openForm}
        onClose={FormClose}
        users={users}
        status={status}
        priority={priority}
      />
    </>
  );
};

export default AddButton;
