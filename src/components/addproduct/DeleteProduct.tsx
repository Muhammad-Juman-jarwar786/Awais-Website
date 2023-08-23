import React, { useState } from 'react';
import { AddProductProps } from '../../interface/Interfaces';

const DeleteProduct: React.FC = () => {
  const [searchedImage, setSearchedImage] = useState('');
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const firebaseSearchEndpoint =
      'https://awais-website-df858-default-rtdb.firebaseio.com/products.json';

    fetch(firebaseSearchEndpoint)
      .then((response) => response.json())
      .then((data) => {
        const searchedProduct: any = Object.entries(data).find(
          ([, prod]: [string, any]) => {
            return prod.img.trim() === searchedImage.trim();
          }
        );

        if (searchedProduct) {
          const [productId, productData] = searchedProduct;
          setProduct({ ...productData, id: productId });
        } else {
          alert('Product not found');
        }
      })
      .catch((error) => {
        console.error('Error searching product:', error);
      });
  };

  const handleDelete = (e: any) => {
    e.preventDefault();
    if (!product.id) {
      console.log('Product ID is missing');
      return;
    }

    // Ask for confirmation from the user
    const confirmed = window.confirm(
      'Are you sure you want to delete this product?'
    );
    if (!confirmed) {
      return;
    }

    const firebaseDeleteEndpoint = `https://awais-website-df858-default-rtdb.firebaseio.com/products/${product.id}.json`;

    fetch(firebaseDeleteEndpoint, {
      method: 'DELETE',
    })
      .then(() => {
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
        setSearchedImage('');
        alert('Product deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };

  return (
    <div className="w-[90vw] md:w-[60vw] xl:w-[40vw] mx-auto p-8 border rounded shadow mt-40">
      <h1 className="text-2xl font-semibold mb-4">Delete Product</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-bold mt-5">Main Image</label>
          <input
            type="text"
            name="img"
            required
            onChange={(e) => setSearchedImage(e.target.value)} // Capture the searched image value
            value={searchedImage}
            className="border rounded w-full p-2"
          />
        </div>
        <br />
        <div>
          <label className="block mb-1 font-bold mt-5">Secondary Image1</label>
          <input
            type="text"
            name="img1"
            required
            onChange={(e) => setProduct({ ...product, img1: e.target.value })}
            value={product.img1}
            className="border rounded w-full p-2"
          />
          <label className="block mb-1 font-bold mt-5">Secondary Image2</label>
          <input
            type="text"
            name="img2"
            required
            onChange={(e) => setProduct({ ...product, img2: e.target.value })}
            value={product.img2}
            className="border rounded w-full p-2"
          />
          <label className="block mb-1 font-bold mt-5">Secondary Image3</label>
          <input
            type="text"
            name="img3"
            required
            onChange={(e) => setProduct({ ...product, img3: e.target.value })}
            value={product.img3}
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-bold mt-5">Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-bold mt-5">Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-bold mt-5">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-bold mt-5">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={(e) =>
              setProduct({ ...product, price: parseFloat(e.target.value) })
            }
            className="border rounded w-full p-2"
          />
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleDelete}
            className="bg-blue-500 btn text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Delete Product
          </button>

          <button
            onClick={handleSearch}
            className="bg-blue-500 btn text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Search Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteProduct;
