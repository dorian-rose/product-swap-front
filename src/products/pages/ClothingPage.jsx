import { CategoryContainer } from "../components/CategoryContainer";

/**
 * function that returns component
 * @returns component
 */
export const ClothingPage = () => {
  const category = "clothing";
  return <CategoryContainer category={category} />;
};
