import React from "react";
import News1 from '../../assets/news/newsss.svg'
import News2 from '../../assets/news/unsplash_6MNmDi1hc_Y.svg'
import News3 from '../../assets/news/unsplash_FO7JIlwjOtU.svg'
import NewsComponent from "../News/newsComponent"
export const News = () => {
  return (
    <div className="mx-auto max-w-screen-xl my-20 px-4">
      <div className="flex gap-6 flex-row">
      <NewsComponent imgurl={News1} name="Adrian"
       date="1/12/2026" comments="529" title="The new of today in regardes to cilicon ecommerce"
        description="Today we have much to say about launching! What are the future plans for 2026? "/>
      <NewsComponent imgurl={News2} name="Adrian"
       date="1/12/2026" comments="529" title="The new of today in regardes to cilicon ecommerce"
        description="Today we have much to say about launching! What are the future plans for 2026? "/>
      <NewsComponent imgurl={News3} name="Adrian"
       date="1/12/2026" comments="529" title="The new of today in regardes to cilicon ecommerce"
        description="Today we have much to say about launching! What are the future plans for 2026? "/>

      </div>
      </div>
   
  );
};
