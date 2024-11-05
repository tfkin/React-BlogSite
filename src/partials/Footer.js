import React from "react";
import { useStoreState } from "easy-peasy";

const Footer = () => {
  const postCount = useStoreState((state) => state.postCount);

  const today = new Date();
  return (
    <footer>
      <h6>{postCount} Blog Posts</h6>
    </footer>
  );
};

export default Footer;
