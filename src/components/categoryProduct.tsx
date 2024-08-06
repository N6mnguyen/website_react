import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../interface/product";
import instance from "../api";
import { ICategory } from "../interface/category";



const CategoryProducts = () => {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categoryName, setCategoryName] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const categoryResponse = await instance.get("/categorys");
        const categories: ICategory[] = categoryResponse.data;

        const selectedCategory = categories.find(
          (category) => category.id.toString() === id
        );
        if (selectedCategory) {
          setCategoryName(selectedCategory.name);
        }

        const productResponse = await instance.get("/products");
        const allProducts: IProduct[] = productResponse.data;

        const filteredProducts = allProducts.filter(
          (product) => product.category === selectedCategory?.name
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.log("🚀 ~ error:", error);
      }
    })();
  }, [id]);

  return (
    <div className="w-full h-auto bg-white py-4">
      <div className="mx-auto">
        <h2 className="text-[#505F4E] font-bold text-[30px] px-[150px] py-6">
          Sản phẩm theo danh mục: {categoryName}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-[100px] py-10">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="border p-4 rounded shadow">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40"
                />
                <h3 className="text-xl font-semibold ">{product.name}</h3>
                <p className="text-[#505F4E]">
                  ${product.price}
                </p>
              </div>
            ))
          ) : (
            <p className="px-20">Không tìm thấy sản phẩm</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
