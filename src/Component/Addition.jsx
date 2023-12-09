import React, { useState } from "react";
import { Modal, TextField, Select, MenuItem, Box } from "@mui/material";

const AddinForm = ({ open, onClose, users, status, priority }) => {
  const [formData, setFormData] = useState({
    id: "DUM-99",
    title: "Dummy Entry",
    tag: ["Feature request"],
    userId: "usr-1",
    status: "Todo",
    priority: 4,
  });

  const InputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#ffffff",
          padding: "1rem",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
          borderRadius: "0.5rem",
          maxWidth: "400px",
        }}
      >
        <TextField
          label="ID"
          name="id"
          value={formData.id}
          onChange={InputChange}
          disabled
          fullWidth
          size="small"
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={InputChange}
          multiline
          rows={4}
          fullWidth
          size="small"
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Tag"
          name="tag"
          value={formData.tag.join(", ")}
          disabled
          fullWidth
          size="small"
          style={{ marginBottom: "1rem" }}
        />
        <Select
          label="User ID"
          name="userId"
          value={formData.userId}
          onChange={InputChange}
          fullWidth
          size="small"
          style={{ marginBottom: "1rem" }}
        >
          {users?.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
        <Select
          label="Status"
          name="status"
          value={formData.status}
          onChange={InputChange}
          fullWidth
          size="small"
          style={{ marginBottom: "1rem" }}
        >
          {status?.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
        <Select
          label="Priority"
          name="priority"
          value={formData.priority}
          onChange={InputChange}
          fullWidth
          size="small"
          style={{ marginBottom: "1rem" }}
        >
          {Object.keys(priority).map((p) => (
            <MenuItem key={p} value={p}>
              {priority[p]}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Modal>
  );
};

export default AddinForm;
