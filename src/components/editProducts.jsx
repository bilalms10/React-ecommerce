import './users.css'
import { useContext, useState } from "react";
import { myContext } from "./contextpage";

function EditProducts() {
  const { productData, setProductData } = useContext(myContext);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedProduct(productData[index]);
  };

  const handleSave = () => {
    const updatedProducts = [...productData];
    updatedProducts[editingIndex] = editedProduct;
    setProductData(updatedProducts);
    setEditingIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Edit Products</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Colour</th>
            <th>Price</th>
            <th>Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product, index) => (
            <tr key={index}>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="Name"
                    value={editedProduct.Name}
                    onChange={handleChange}
                  />
                ) : (
                  product.Name
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="Description"
                    value={editedProduct.Description}
                    onChange={handleChange}
                  />
                ) : (
                  product.Description
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="Colour"
                    value={editedProduct.Colour}
                    onChange={handleChange}
                  />
                ) : (
                  product.Colour
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="Price"
                    value={editedProduct.Price}
                    onChange={handleChange}
                  />
                ) : (
                  product.Price
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="count"
                    value={editedProduct.count}
                    onChange={handleChange}
                  />
                ) : (
                  product.count
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(index)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EditProducts;