
import { TFormData } from "./types";

import { useGenerate } from "@/services/generate";

export const useSubmit = () => {
  const { mutate } = useGenerate()

  const onSubmit = (data: TFormData) => {
    mutate(data)
  }

  return { onSubmit }
}