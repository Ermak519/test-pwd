import { FormControlLabel, Checkbox, Button } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { defaultValues } from "../lib/static";
import { TFormData } from "../lib/types";
import { useSubmit } from "../lib/useSubmit";
import { PrettoSlider } from "./Range";

export const Form = () => {
  const { control, handleSubmit } = useForm<TFormData>({
    defaultValues,
  });

  const { onSubmit } = useSubmit();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="length"
        control={control}
        render={({ field: { value, onChange } }) => (
          <PrettoSlider
            value={value}
            onChange={onChange}
            aria-label="Password length"
            valueLabelDisplay="on"
            max={30}
          />
        )}
      />
      <Controller
        name="lowerCase"
        control={control}
        render={({ field: { value, onChange } }) => (
          <FormControlLabel
            label="Lower Case"
            value={true}
            onChange={onChange}
            checked={value}
            control={<Checkbox />}
          />
        )}
      />
      <Controller
        name="upperCase"
        control={control}
        render={({ field: { value, onChange } }) => (
          <FormControlLabel
            label="Upper Case"
            value={true}
            onChange={onChange}
            checked={value}
            control={<Checkbox />}
          />
        )}
      />
      <Controller
        name="symbols"
        control={control}
        render={({ field: { value, onChange } }) => (
          <FormControlLabel
            label="Symbols"
            value={true}
            onChange={onChange}
            checked={value}
            control={<Checkbox />}
          />
        )}
      />
      <Controller
        name="numbers"
        control={control}
        render={({ field: { value, onChange } }) => (
          <FormControlLabel
            value={true}
            onChange={onChange}
            checked={value}
            label="Numbers"
            control={<Checkbox />}
          />
        )}
      />

      <Button
        type="submit"
        variant="contained"
        style={{ background: "#52af77" }}
      >
        Generate
      </Button>
    </form>
  );
};
