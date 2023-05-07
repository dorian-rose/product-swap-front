import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slice/products/thunk";
import { useEffect } from "react";
import { SendMailForm } from "../components/SendMailForm";



export const SendMailPage = () => {

const { id } = useParams();
  //define url and method required for fetch
  const url = `${import.meta.env.VITE_PRODUCT_URL}entry?id=${id}`;
  const method = "GET";

  //collect state
  const { products, isLoading } = useSelector((state) => state.products);

  //dispatch to fetch and slice
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(url, method));
  }, []);


  return (
    <>  {isLoading &&  <img src="https://i.gifer.com/ZKZg.gif" alt="loading gif" /> } 
        { products.map((product) => (
            <SendMailForm key={product.id_entry} {...product} />
          ))}
  </>
   
  )
}



