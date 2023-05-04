import { CategoryContainer } from "../components/CategoryContainer";

/**
 * function that returns component
 * @returns component
 */
export const Books = () => {
  const category = "books";
  return <CategoryContainer category={category} />;
};
