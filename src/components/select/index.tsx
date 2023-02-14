import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectProps } from "../../utils/types";

export default function SelectAutoWidth({
  label,
  items,
  value,
  handleChange,
}: SelectProps) {
  return (
    <FormControl fullWidth={true}>
      <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-simple-select-helper"
        value={value}
        fullWidth={true}
        onChange={handleChange}
        label="Age"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {items.map((item, index) => (
          <MenuItem value={item.id} key={index}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
