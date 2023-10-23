import React from "react";
import { TopNav, Wrapper } from "components/navigation";
import Incubator from "components/Blog/Incubator/Incubator";

const Blog = () => {
  return (
    <Wrapper showTopNav={false}>
     <TopNav/>
    <Incubator/>
    </Wrapper>
  );
};

export default Blog;
