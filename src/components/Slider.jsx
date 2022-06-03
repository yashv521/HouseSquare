import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase.config";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Spinner from "./Spinner";


function Slider() {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      const listingsRef = collection(db, "listings");
      const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5));
      const querySnap = await getDocs(q);

      let listings = [];

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setListings(listings);
      setLoading(false);
    };

    fetchListings();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    listings && (
      <>
        <p className="exploreHeading">Recommended</p>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }}
          navigation
        >
          {listings.map(({ data, id }) => {
            return (
              <SwiperSlide
                key={id}
                onClick={() => navigate(`/category/${data.type}/${id}`)}
              >
                <div

                  style={{
                    background: `url(${data.imgUrls[0]}) center no-repeat`,
                    backgroundSize: "cover ",
                    padding: "250px",
                  }}
                  className="swipeSlideDiv"
                >
                  <p className="swiperSlideText">{data.name}</p>
                  <p className="swiperSlidePrice">
                    ₹{data.discountedPrice ?? data.regularPrice}{" "}
                    {data.type === "rent" && "/month"}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    )
  );
}

export default Slider;
