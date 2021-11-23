import { useRouter } from "next/dist/client/router";
import React from "react";

const ProductItem = () => {
  const router = useRouter();
  console.log(router.query.name);

  return (
    <div>
      <h1>Product - {router.query.productId}</h1>
    </div>
  );
};

export default ProductItem;
