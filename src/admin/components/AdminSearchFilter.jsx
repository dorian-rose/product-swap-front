import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";


export const AdminSearchFilter = () => {
     //collect data from state
  const { ok, page, products, isLoading, total_pages, error } = useSelector(
    (state) => state.products
  );
  //capture text inputs
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });
   console.log(products)

   const filter =(data)=>{
   
   const {category, user }= data
   console.log(category, user)
   if (user&& category){

   } else if (user){

   }else if (category){
    
   }
   }

  return (
   <form  onSubmit={handleSubmit((data) => filter(data))}>
   <select {...register("category")} name="category" id="category">
    <option value="">Category</option>
     <option value="shoes">Shoes</option>
   </select>
   <select {...register("user")} name="user" id="user">
    <option value="">email</option>
    <option value="user@gmail.com">user@gmail</option>
   </select>
   <input type="submit" name="" id="" />
   </form>
  )
}
