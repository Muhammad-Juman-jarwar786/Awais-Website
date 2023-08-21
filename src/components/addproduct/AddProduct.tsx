import React, { useState } from 'react';

interface Product {
  mainImage: File | null;
  secondaryImages: File[];
  title: string;
  category: string;
  description: string;
  price: number;
}

const AddProduct: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    mainImage: null,
    secondaryImages: [],
    title: '',
    category: '',
    description: '',
    price: 0,
  });

  const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProduct({ ...product, mainImage: e.target.files[0] });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission, e.g., send data to an API
    console.log(product);
  };

  return (
    <div className="max-w-lg mx-auto p-8 border rounded shadow mt-40">
      <h1 className="text-2xl font-semibold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Main Image</label>
          <input
            type="file"
            accept="image/*"
            required
            onChange={handleMainImageChange}
            className="border rounded w-full p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Title</label>
          <input
            type="text"
            name="title"
            required
            value={product.title}
            onChange={handleInputChange}
            className="border rounded w-full p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Category</label>
          <input
            type="text"
            name="category"
            required
            value={product.category}
            onChange={handleInputChange}
            className="border rounded w-full p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            required
            value={product.description}
            onChange={handleInputChange}
            className="border rounded w-full p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Price</label>
          <input
            type="number"
            name="price"
            required
            value={product.price}
            onChange={handleInputChange}
            className="border rounded w-full p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 btn text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
