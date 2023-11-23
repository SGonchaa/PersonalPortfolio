import React, { useState } from "react";
import { Modal } from "antd";
import "./Blog.css";

function Blog() {
  var data = [
    {
      title: "CREATE A WORDPRESS THEME FROM SCRATCH",
      img: "https://istanbul-react.vercel.app/img/blog/blog-post-1.jpg",
    },
    {
      title: "EFFECTIVE MARKETING STRATEGY TIPS",
      img: "https://istanbul-react.vercel.app/img/blog/blog-post-2.jpg",
    },
    {
      title: "FREE PSD AND SKETCH RESSOUCES",
      img: "https://istanbul-react.vercel.app/img/blog/blog-post-3.jpg",
    },
    {
      title: "HOW TO BECOME A SUCCESSFUL FRELANCER",
      img: "https://istanbul-react.vercel.app/img/blog/blog-post-4.jpg",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    "https://istanbul-react.vercel.app/img/blog/blog-post-4.jpg"
  );
  const showModal = (src) => {
    setImgSrc(src);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="blog">
      <div className="blog-container">
        <div className="blog-title">
          <h2 className="blog-center-text">
            LATEST <span>POSTS</span>
          </h2>
          <div className="blog-text-subtitle">
            TIPS, INSIGHTS, AND BEST PRACTICES ABOUT WEB DESIGN AND
            DEVELOPPMENT.
          </div>
        </div>
        <div className="latest-posts">
          <div className="blog-post">
            {data.map((card) => {
              return (
                <div className="post">
                  <div
                    className="img-date-part"
                    onClick={() => {
                      showModal(card.img);
                    }}
                  >
                    <img src={card.img} alt="" />
                    <div className="date">
                      <span>23</span>
                      <span>June</span>
                    </div>
                  </div>
                  <div className="text-btn-part">
                    <h4>{card.title}</h4>
                    <p>
                      Oki is a leading web design agency with an award-winning
                      design team that creates innovative...
                    </p>
                    <button
                      className="read-more-btn"
                      onClick={() => {
                        showModal(card.img);
                      }}
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Modal
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <img src={imgSrc} alt="" />
        <h4>TITLE</h4>
        <span>Media</span>
        <p>
          Oki is a leading web design agency with an award-winning design team
          that creates innovative, effective websites that capture your brand,
          improve your conversion rates, and maximize your revenue to help grow
          your business and achieve your goals.
          <br />
          In today’s digital world, your website is the first interaction
          consumers have with your business. That's why almost 95 percent of a
          user’s first impression relates to web design. It’s also why web
          design services can have an immense impact on your company’s bottom
          line.
          <br />
          That’s why more companies are not only reevaluating their website’s
          design but also partnering with Kura, the web design agency that’s
          driven more than $2.4 billion in revenue for its clients. With over 50
          web design awards under our belt, we're confident we can design a
          custom website that drives sales for your unique business.
        </p>
      </Modal>
    </section>
  );
}

export default Blog;
