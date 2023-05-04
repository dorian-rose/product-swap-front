import { CategoryContainer } from "../components/CategoryContainer";

/**
 * function that returns component
 * @returns component
 */
export const FurniturePage = () => {
  const category = "furniture";
  return <CategoryContainer category={category} />;
};
