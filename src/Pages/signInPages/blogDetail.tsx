import React from "react";
import Footer from "../../Components/HomePage/Footer/Footer";
import Categories from "../../Components/HomePage/Categories/Categories";
import Header from "../../Components/HomePage/Header/Header";
import BlackFriday from "../../Components/HomePage/BlackFriday/BlackFriday";
import BannerPhoto from "../../assets/BlogDetail/bigbannerimage.svg";

const articleDetail = () => {
  return (
    <>
      {" "}
      <BlackFriday />
      <Header />
      <Categories />
      <div className="mx-auto max-w-screen-xl my-10 px-4">
        <div>
          <img src={BannerPhoto} alt="Banner" />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
            {/* Main Content (Article) */}
            <div>
              <h1 className="text-3xl font-bold mb-4">Article Title</h1>
              <p className="text-lg text-gray-800 mb-6">
                This is the introductory paragraph of the article. It provides a
                brief overview of the content and sets the tone for the article.
              </p>
              <div className="space-y-4">
                <p className="text-base text-gray-700">
                  The article continues here, with detailed content and insights
                  about the topic. This section can be filled with more
                  paragraphs, each covering different aspects of the subject
                  matter.
                </p>
                <p className="text-base text-gray-700">
                  Additional sections can delve deeper into various subtopics or
                  discuss related issues. Feel free to structure the article
                  with headings, lists, or any other elements you find necessary
                  to convey your message.
                </p>
                <p className="text-base text-gray-700">
                  The conclusion wraps up the article, summarizing key points
                  and possibly leaving the reader with a call-to-action or
                  thought-provoking statement.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Category Section */}
              <div className="border-2 border-gray-200 p-4">
                <h1 className="text-lg font-bold mb-2">Category</h1>
                <div className="space-y-1">
                  <label>
                    <input type="radio" name="category" /> All
                  </label>
                  <label>
                    <input type="radio" name="category" /> Electronic Devices
                  </label>
                </div>
              </div>

              {/* Latest Article Section */}
              <div className="border-2 border-gray-200 p-4">
                <h2 className="text-lg font-bold mb-2">Latest Articles</h2>
                {[1, 2, 3].map((_, i) => (
                  <div className="flex gap-3 mb-3" key={i}>
                    <div className="h-16 w-16 bg-gray-200"></div>
                    <div>
                      <h3 className="text-sm font-semibold">
                        Article title goes here
                      </h3>
                      <p className="text-xs text-gray-500">25 Nov, 2025</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-lg font-bold mb-2">Gallery</h2>
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-16 bg-gray-200">
                      IMG
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default articleDetail;
