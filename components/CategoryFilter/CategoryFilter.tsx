import useStore from "@/lib/store";

import CategoryTag from "../CategoryTag/CategoryTag";

export default function CategoryFilter(): React.ReactNode {
  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  const setSelectedCategory = useStore((state) => state.setSelectedCategory);

  return (
    <div className="h-[178px] w-[223px] rounded-[10px] bg-white p-6 lg:h-[166px] lg:w-[255px]">
      {categories.map((category) => (
        <div
          className="mb-3.5 mr-2 inline-block cursor-pointer"
          key={category}
          onClick={() => {
            setSelectedCategory(category);
          }}
        >
          <CategoryTag categoryName={category} />
        </div>
      ))}
    </div>
  );
}
