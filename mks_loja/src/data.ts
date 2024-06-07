import axios from "axios";
import { QueryFunctionContext } from "react-query";
import { QueryParams } from "./interfaces/QueryParams.interface";


export const fetchProducts = async ({ queryKey } : QueryFunctionContext<[string, QueryParams]>) => {
  const [_key, { page, rows, sortBy, orderBy }] = queryKey;
  const { data } = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products', {
      params: {
          page,
          rows,
          sortBy,
          orderBy
      }
  });
  return data;
};