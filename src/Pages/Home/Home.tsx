import { useEffect, useState } from "react";
import { Product, ProductData } from "../../Components/ProductCard/Product";
import { Button } from "../../Components/Button/Button";
import { CaretLeft, CaretRight, Star } from "@phosphor-icons/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const carouselData = [
  {
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop",
    subtitle: "New Arrival",
    title: "Discover Our New Collection",
    description: "Transform your space with our new collection of stylish and modern furniture.",
  },
  {
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2070&auto=format&fit=crop",
    subtitle: "Elegance & Comfort",
    title: "Design that Inspires",
    description: "Exclusive pieces that combine sophisticated aesthetics with maximum comfort.",
  },
  {
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070&auto=format&fit=crop",
    subtitle: "Special Collection",
    title: "Unique Spaces",
    description: "Carefully selected furniture to create spaces that tell your story.",
  }
];

const testimonialData = [
  {
    name: "Amanda Silva",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    text: "I found unique pieces that completely transformed my clients' projects. The quality and design are exceptional!",
    rating: 5
  },
  {
    name: "Carlos Santos",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    text: "The combination of modern design with artisanal quality makes this store my first choice for residential projects.",
    rating: 5
  },
  {
    name: "Beatriz Oliveira",
    role: "Customer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    text: "My home got a new life with the furniture from here. The personalized service made all the difference in the choice!",
    rating: 5
  }
];

export function Home() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialData.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const loadMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <>
      <S.CarouselContainer>
        {carouselData.map((slide, index) => (
          <S.CarouselSlide
            key={index}
            isActive={index === currentSlide}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <S.CarouselContent>
              <h2>{slide.subtitle}</h2>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button onClick={() => navigate('/shop')}>COMPRAR AGORA</button>
            </S.CarouselContent>
          </S.CarouselSlide>
        ))}

        <S.CarouselArrow className="prev" onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length)}>
          <CaretLeft weight="bold" />
        </S.CarouselArrow>
        
        <S.CarouselArrow className="next" onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselData.length)}>
          <CaretRight weight="bold" />
        </S.CarouselArrow>

        <S.CarouselDots>
          {carouselData.map((_, index) => (
            <S.CarouselDot
              key={index}
              isActive={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </S.CarouselDots>
      </S.CarouselContainer>

      <S.Categories>
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <S.CategoryGrid>
          <S.CategoryCard>
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop"
              alt="Dining"
            />
            <h3>Dining</h3>
          </S.CategoryCard>
          <S.CategoryCard>
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2069&auto=format&fit=crop"
              alt="Living"
            />
            <h3>Living</h3>
          </S.CategoryCard>
          <S.CategoryCard>
            <img
              src="https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2070&auto=format&fit=crop"
              alt="Bedroom"
            />
            <h3>Bedroom</h3>
          </S.CategoryCard>
        </S.CategoryGrid>
      </S.Categories>

      <S.Products>
        <h2>Our Products</h2>
        <S.ProductGrid>
          {products.slice(0, visibleCount).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </S.ProductGrid>
        {visibleCount < products.length && (
          <Button onClick={loadMoreProducts}>Show More</Button>
        )}
      </S.Products>

      <S.TestimonialSection>
        <h2>O que nossos clientes dizem</h2>
        <S.TestimonialContainer>
          {testimonialData.map((testimonial, index) => (
            <S.TestimonialSlide
              key={index}
              isActive={index === currentTestimonial}
            >
              <S.TestimonialContent>
                <div className="avatar">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} weight="fill" />
                  ))}
                </div>
                <p>"{testimonial.text}"</p>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </S.TestimonialContent>
            </S.TestimonialSlide>
          ))}
        </S.TestimonialContainer>

        <S.TestimonialDots>
          {testimonialData.map((_, index) => (
            <S.TestimonialDot
              key={index}
              isActive={index === currentTestimonial}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </S.TestimonialDots>
      </S.TestimonialSection>
    </>
  );
}