import useStore from "@/lib/store";
import { type Category } from "@/types";

import CategoryTag from "../CategoryTag/CategoryTag";

export default function CategoryFilterWidget(): JSX.Element {
  const categories: Category[] = [
    "all",
    "UI",
    "UX",
    "enhancement",
    "bug",
    "feature",
  ];

  const [setSelectedCategory, selectedCategory] = useStore((state) => [
    state.setSelectedCategory,
    state.selectedCategory,
  ]);

  return (
    <div className="h-[178px] w-[223px] rounded-[10px] bg-white p-6 xl:h-[166px] xl:w-[255px]">
      {categories.map((category) => (
        <div
          className="mb-3.5 mr-2 inline-block cursor-pointer"
          key={category}
          onClick={() => {
            setSelectedCategory(category);
          }}
        >
          <CategoryTag
            categoryName={category}
            selectedCategory={selectedCategory}
          />
        </div>
      ))}
    </div>
  );
}
