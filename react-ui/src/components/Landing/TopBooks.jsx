import React, { useEffect, useRef, useState } from "react";
import BookCard from "./BookCard";
import "../css/TopBooks.css";

const TopBooks = () => {
  const [elementInView, setElementInView] = useState();
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setElementInView(entry.isIntersecting);
    });
    observer.observe(myRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const data = [
    {
      age_group: "",
      amazon_product_url:
        "https://www.amazon.com/dp/0593441273?tag=NYTBSREV-20",
      article_chapter_link: "",
      author: "Emily Henry",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780593441275.jpg",
      book_image_width: 331,
      book_image_height: 500,
      book_review_link: "",
      contributor: "by Emily Henry",
      contributor_note: "",
      created_date: "2023-05-31 22:20:25",
      description:
        "A former couple pretend to be together for the sake of their friends during their annual getaway in Maine.",
      first_chapter_link: "",
      price: "0.00",
      primary_isbn10: "0593441273",
      primary_isbn13: "9780593441275",
      book_uri: "nyt://book/9ab3a59a-e572-5452-ae0c-eedeadb05831",
      publisher: "Berkley",
      rank: 2,
      rank_last_week: 2,
      sunday_review_link: "",
      title: "HAPPY PLACE",
      updated_date: "2023-05-31 22:24:49",
      weeks_on_list: 5,
      buy_links: [
        {
          name: "Amazon",
          url: "https://www.amazon.com/dp/0593441273?tag=NYTBSREV-20",
        },
        {
          name: "Apple Books",
          url: "https://goto.applebooks.apple/9780593441275?at=10lIEQ",
        },
        {
          name: "Barnes and Noble",
          url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593441275",
        },
        {
          name: "Books-A-Million",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FHAPPY%252BPLACE%252FEmily%252BHenry%252F9780593441275&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DHAPPY%252BPLACE%252BEmily%252BHenry",
        },
        {
          name: "Bookshop",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593441275&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DHAPPY%2BPLACE",
        },
        {
          name: "IndieBound",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593441275%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DHAPPY%2BPLACE%2BEmily%2BHenry%26aff%3DNYT",
        },
      ],
    },
    {
      age_group: "",
      amazon_product_url:
        "http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20",
      article_chapter_link: "",
      author: "Colleen Hoover",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg",
      book_image_width: 319,
      book_image_height: 495,
      book_review_link: "",
      contributor: "by Colleen Hoover",
      contributor_note: "",
      created_date: "2023-05-31 22:20:25",
      description:
        "A battered wife raised in a violent home attempts to halt the cycle of abuse.",
      first_chapter_link: "",
      price: "0.00",
      primary_isbn10: "1501110365",
      primary_isbn13: "9781501110368",
      book_uri: "nyt://book/e2a3545e-e9cb-5828-9d97-50a798a0e4f6",
      publisher: "Atria",
      rank: 3,
      rank_last_week: 3,
      sunday_review_link: "",
      title: "IT ENDS WITH US",
      updated_date: "2023-05-31 22:24:49",
      weeks_on_list: 102,
      buy_links: [
        {
          name: "Amazon",
          url: "http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20",
        },
        {
          name: "Apple Books",
          url: "https://goto.applebooks.apple/9781501110368?at=10lIEQ",
        },
        {
          name: "Barnes and Noble",
          url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781501110368",
        },
        {
          name: "Books-A-Million",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FIT%252BENDS%252BWITH%252BUS%252FColleen%252BHoover%252F9781501110368&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DIT%252BENDS%252BWITH%252BUS%252BColleen%252BHoover",
        },
        {
          name: "Bookshop",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501110368&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2BENDS%2BWITH%2BUS",
        },
        {
          name: "IndieBound",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781501110368%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DIT%2BENDS%2BWITH%2BUS%2BColleen%2BHoover%26aff%3DNYT",
        },
      ],
    },
    {
        "age_group": "",
        "amazon_product_url": "https://www.amazon.com/dp/0802162177?tag=NYTBSREV-20",
        "article_chapter_link": "",
        "author": "Abraham Verghese",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9780802162175.jpg",
        "book_image_width": 320,
        "book_image_height": 500,
        "book_review_link": "",
        "contributor": "by Abraham Verghese",
        "contributor_note": "",
        "created_date": "2023-05-31 22:20:25",
        "description": "Three generations of a family living on South India’s Malabar Coast suffer the loss of a family member by drowning.",
        "first_chapter_link": "",
        "price": "0.00",
        "primary_isbn10": "0802162177",
        "primary_isbn13": "9780802162175",
        "book_uri": "nyt://book/5ebf1d34-4c68-560a-8330-7e65bedaaa1a",
        "publisher": "Grove",
        "rank": 4,
        "rank_last_week": 13,
        "sunday_review_link": "",
        "title": "THE COVENANT OF WATER",
        "updated_date": "2023-05-31 22:24:49",
        "weeks_on_list": 4,
        "buy_links": [
          {
            "name": "Amazon",
            "url": "https://www.amazon.com/dp/0802162177?tag=NYTBSREV-20"
          },
          {
            "name": "Apple Books",
            "url": "https://goto.applebooks.apple/9780802162175?at=10lIEQ"
          },
          {
            "name": "Barnes and Noble",
            "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780802162175"
          },
          {
            "name": "Books-A-Million",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BCOVENANT%252BOF%252BWATER%252FAbraham%252BVerghese%252F9780802162175&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BCOVENANT%252BOF%252BWATER%252BAbraham%252BVerghese"
          },
          {
            "name": "Bookshop",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780802162175&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BCOVENANT%2BOF%2BWATER"
          },
          {
            "name": "IndieBound",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780802162175%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BCOVENANT%2BOF%2BWATER%2BAbraham%2BVerghese%26aff%3DNYT"
          }
        ]
      },
  ];
  const book = data.map((item,index) => {
    return (
      <BookCard
        num={index}
        key={item.title}
        name={item.title}
        author={item.author}
        image={item.book_image}
      />
    );
  });
  return (
    <section className="top-books-container">
      <div className="y-wrap top-books-container--wrapper">
        <div
          ref={myRef}
          className={`top-trending-books  title-container ${
            elementInView ? "animate-title" : ""
          }`}
        >
          <h2>top trending books</h2>
          <span className="sub-title">most popular reads of the week</span>
        </div>
        <div className=" top-books__section-book">{book && book.length > 0 && book}</div>
      </div>
    </section>
  );
};
export default TopBooks;
