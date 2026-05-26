const API = "https://localhost:5148/api";

export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export type ProductResponse = {
  totalItems: number;
  page: number;
  pageSize: number;
  products: Product[];
};

export async function getProducts(params?: {
  categoryId?: number;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sort?: string;
  page?: number;
}) {
  const query = new URLSearchParams();

  if (params?.categoryId) query.append("categoryId", params.categoryId.toString());
  if (params?.brand) query.append("brand", params.brand);
  if (params?.minPrice) query.append("minPrice", params.minPrice.toString());
  if (params?.maxPrice) query.append("maxPrice", params.maxPrice.toString());
  if (params?.search) query.append("search", params.search);
  if (params?.sort) query.append("sort", params.sort);
  if (params?.page) query.append("page", params.page.toString());

  const response = await fetch(`${API}/products?${query.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return (await response.json()) as ProductResponse;
}