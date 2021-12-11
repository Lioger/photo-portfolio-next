import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import React, { useState } from "react";

import { ICategory } from "./../interfaces";
import { Header } from "../components/Header";

const categories: ICategory[] = [
  { id: 1, name: "Nature", background_url: "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80" }, 
  { id: 2, name: "Women", background_url: "https://c4.wallpaperflare.com/wallpaper/572/358/483/arina-makarova-women-model-brunette-portrait-display-hd-wallpaper-preview.jpg" }, 
  { id: 3, name: "Men", background_url: "https://image.freepik.com/free-photo/vertical-shot-man-with-long-beard-mustache-standing-front-grey-wall_181624-33350.jpg" }, 
  { id: 4, name: "Couple", background_url: "https://image.freepik.com/free-photo/vertical-shot-of-a-happy-white-couple-enjoying-each-other-s-company-in-the-middle-of-a-park_181624-8150.jpg" }
];

const Home: NextPage = () => {
  const [photoCategory, setPhotoCategory] = useState(categories[0]);

  const handleSelectCategory = (event: React.MouseEvent<HTMLElement>) => {
    const categoryName = event.currentTarget.textContent;
    if (categoryName) {
      const filteredCategories = categories.filter((category) => category.name === categoryName);
      if (filteredCategories.length) {
        setPhotoCategory(filteredCategories[0]);
      }
    }
  }

  return (
    <>
      <Head>
        <title>Dulishkevich</title>
        <meta name="description" content="Ксения Дулишкевич - раскрою вашу сущность и реализую заветные желания через фотографии." />
        <meta name="title" content="Ксения Дулишкевич - твой фотограф" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="main">
        <section
          className="banner"
          style={{ backgroundImage: `url(${photoCategory.background_url})` }}
        >
          <ul className="categoriesList">
            {categories.map((category) => (
              <li 
                onClick={handleSelectCategory} 
                key={category.id} 
                className={photoCategory.name === category.name ? "selected" : undefined}
              >{category.name}</li>
            ))}
          </ul>
        </section>
        <section className="gallery">
          <h3 className="section-title">
            Мои Работы
          </h3>
          {/* some grid generator for photoes */}
        </section>
        <section className="contact">
          <div className="contact-block">
            <h3 className="section-title">
              Связаться со мной
            </h3>
            {/* social media links and form */}
            <div className="social-media-container">
              <a href="http://instagram.com" target="_blank" rel="noopener noreferrer" className="social-media-link">
                <Image src="/instagram.svg" className="socail-media-icon" width={48} height={48} />
              </a>
              <a href="t.me" target="_blank" rel="noopener noreferrer" className="social-media-link">
                <Image src="/telegram.svg" className="socail-media-icon" width={48} height={48} />
              </a>
            </div>
          </div>
          <div className="application-block">
            <h3 className="section-title">
              Оставить заявку
            </h3>
            <form action="" method="post" className="application-form">
              <input type="text" placeholder="Your name" />
              <input type="phone" placeholder="Your phone number" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home;
