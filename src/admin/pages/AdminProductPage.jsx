
import { AdminSearchFilter } from "../components/AdminSearchFilter";
import { AdminProductContainer } from "../components/AdminProductContainer";


export const AdminProductPage = () => {
   
  
  return (
    <section>
        <AdminSearchFilter />
    <h1 className="uppercase text-center tracking-widest text-2xl md:text-3xl">
        Products
    </h1>
  <AdminProductContainer />
</section>
  )
}
