import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Box } from "@chakra-ui/react";

import "swiper/css";
import "../styles/swiper-custom.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Slide } from "./Slide";
import NextLink from "next/link";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import { Continentes } from "@/app/types/Continentes";

export default function Slides() {
  const [continentes, setContinentes] = useState<Continentes[]>([]);

  useEffect(() => {
    api({
      method: "get",
      url: "/continentes",
    }).then((response) => {
      setContinentes(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <Box
      my="2rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginX={{ md: "50px" }}
    >
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {continentes?.map((continente) => (
          <SwiperSlide key={continente.id}>
            <NextLink href={`/continentes/${continente.id}`}>
              <Slide
                imgSrc={continente.img_src}
                title={continente.title}
                subtitle={continente.description}
              />
            </NextLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
