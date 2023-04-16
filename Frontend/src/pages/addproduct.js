import React from 'react'
import { Image } from 'next/image';

const AddProduct = () => {
  const handleSubmut = (e) => {
    e.preventDefault()
    const form = e.target;
    let images = []
    const name = form.productName.value;
    const catgories = form.category.value;
    const thumbnail = form.thumbnail.value;

    const iamge_1 = form.image_1.value;
    const iamge_2 = form.image_2.value;
    const iamge_3 = form.image_3.value;

    images.push(iamge_1);
    images.push(iamge_2);
    images.push(iamge_3);

    const data = {
      productName: name,
      catgory: catgories,
      thumbnail: thumbnail,
      images: images,
    }

    console.log(data);
  }
  return (
    <div className='flex justify-center mt-10 w-full'>
      <form onSubmit={handleSubmut}>
        <div className='flex justify-center'>
          <h2 className='text-xl'>Add Product</h2>
        </div>
        <div className='flex flex-col  lg:grid lg:grid-cols-2 lg:gap-5'>

          <div className='mt-3'>
            <label>Product Name</label>
            <input type="text" placeholder="Name" name='productName' className="input input-bordered input-md w-full" required />
          </div>

          <div className="form-control w-full">
            <label className="label">Select Category</label>
            <select name='category' className="select select-bordered" required>
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>
          </div>

          <div className='mt-3'>
            <label>Thumbnail</label>
            <input type="text" placeholder="Thumbnail" name='thumbnail' className="input input-bordered input-md w-full" required />
          </div>
          <div className='mt-3'>
            <label>Iamge-1 for Deatils</label>
            <input type="text" placeholder="Iamge-1 for Deatils" name='image_1' className="input input-bordered input-md w-full" required />
          </div>
          <div className='mt-3'>
            <label>Iamge-2 for Deatils</label>
            <input type="text" placeholder="Iamge-2 for Deatils" name='image_2' className="input input-bordered input-md w-full" required />
          </div>
          <div className='mt-3'>
            <label>Iamge-3 for Deatils</label>
            <input type="text" placeholder="Iamge-3 for Deatils" name='image_3' className="input input-bordered input-md w-full" required />
          </div>

        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddProduct;