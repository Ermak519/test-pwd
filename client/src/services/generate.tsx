import { useMutation } from "@tanstack/react-query";

import axios, { AxiosResponse } from "axios";

type TBody = {
  upperCase: boolean;
  lowerCase: boolean;
  symbols: boolean;
  numbers: boolean;
  length: number;
};

export const useGenerate = () => {
  return useMutation<AxiosResponse<{ data: string[] }>, Error, TBody>({
    mutationFn: (body) => {
      return axios.post("http://localhost:8080/api/generate", body);
    },
  });
};
