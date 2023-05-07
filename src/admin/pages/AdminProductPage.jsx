import { AdminFilter } from "../components/AdminFilter";
import { AdminProductContainer } from "../components/AdminProductContainer";

/**
 * function that returns a container and two components - a select filter and component with products
 */
export const AdminProductPage = () => {
  return (
    <section>
      <AdminFilter />
      <h1 className="my-5 uppercase text-center tracking-widest text-2xl md:text-3xl">
        Products
      </h1>
      <AdminProductContainer />
    </section>
  );
};
