import React, { useState } from 'react';
import { AddProductProps } from '../../interface/Interfaces';
import { v4 as uuidv4 } from 'uuid';

const AddProduct: React.FC = () => {
  const uniqueId = uuidv4();
  const [product, setProduct] = useState<AddProductProps>({
    img: '',
    img1: '',
    img2: '',
    img3: '',
    title: '',
    category: '',
    description: '',
    price: 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const productWithId = { ...product, id: uniqueId };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission, e.g., send data to an API
    const firebaseEndpoint =
      'https://awais-website-df858-default-rtdb.firebaseio.com/products.json';

    fetch(firebaseEndpoint, {
      method: 'POST',
      body: JSON.stringify(productWithId),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data saved successfully:', data);

        // Clear the form after submitting
        setProduct({
          img: '',
          img1: '',
          img2: '',
          img3: '',
          title: '',
          category: '',
          description: '',
          price: 0,
        });
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  const handleDelete = () => {};

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2">
      <div className="w-[90vw] md:w-[60vw] xl:w-[40vw] mx-auto p-8 border rounded shadow mt-40">
        <h1 className="text-2xl font-semibold mb-4">Add Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-bold mt-5">Main Image</label>
            <input
              type="text"
              name="img"
              required
              onChange={handleInputChange}
              value={product.img}
              className="border rounded w-full p-2"
            />
          </div>
          <br />
          <div>
            <label className="block mb-1 font-bold mt-5">
              Secondary Image1
            </label>
            <input
              type="text"
              name="img1"
              required
              onChange={handleInputChange}
              value={product.img1}
              className="border rounded w-full p-2"
            />
            <label className="block mb-1 font-bold mt-5">
              Secondary Image2
            </label>
            <input
              type="text"
              name="img2"
              required
              onChange={handleInputChange}
              value={product.img2}
              className="border rounded w-full p-2"
            />
            <label className="block mb-1 font-bold mt-5">
              Secondary Image3
            </label>
            <input
              type="text"
              name="img3"
              required
              onChange={handleInputChange}
              value={product.img3}
              className="border rounded w-full p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-bold mt-5">Title</label>
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
            <label className="block mb-1 font-bold mt-5">Category</label>
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
            <label className="block mb-1 font-bold mt-5">Description</label>
            <textarea
              name="description"
              required
              value={product.description}
              onChange={handleInputChange}
              className="border rounded w-full p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-bold mt-5">Price</label>
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
      <div className="w-[90vw] md:w-[60vw] xl:w-[40vw] mx-auto p-8 border rounded shadow mt-40">
        <h1 className="text-2xl font-semibold mb-4">Delete Product</h1>
        <form onSubmit={handleDelete} className="space-y-4">
          <div>
            <label className="block mb-1 font-bold mt-5">Main Image</label>
            <input
              type="text"
              name="img"
              required
              onChange={handleInputChange}
              value={product.img}
              className="border rounded w-full p-2"
            />
          </div>
          <br />
          <div>
            <label className="block mb-1 font-bold mt-5">
              Secondary Image1
            </label>
            <input
              type="text"
              name="img1"
              required
              onChange={handleInputChange}
              value={product.img1}
              className="border rounded w-full p-2"
            />
            <label className="block mb-1 font-bold mt-5">
              Secondary Image2
            </label>
            <input
              type="text"
              name="img2"
              required
              onChange={handleInputChange}
              value={product.img2}
              className="border rounded w-full p-2"
            />
            <label className="block mb-1 font-bold mt-5">
              Secondary Image3
            </label>
            <input
              type="text"
              name="img3"
              required
              onChange={handleInputChange}
              value={product.img3}
              className="border rounded w-full p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-bold mt-5">Title</label>
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
            <label className="block mb-1 font-bold mt-5">Category</label>
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
            <label className="block mb-1 font-bold mt-5">Description</label>
            <textarea
              name="description"
              required
              value={product.description}
              onChange={handleInputChange}
              className="border rounded w-full p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-bold mt-5">Price</label>
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
            Delete Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
