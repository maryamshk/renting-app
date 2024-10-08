import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousal from '../components/Carousal';
import styled from 'styled-components';


export default function Home() {
  const [search, setSearch] = useState('');
  const [itemCategory, setitemCategory] = useState([]);
  const [Item, setItem] = useState([]);

  const loadData = async () => {
<<<<<<< Updated upstream
    try {
      let response = await fetch('http://localhost:5000/api/product', {
        method: "GET",
        headers: {
          'Content-Type': "application/json"
        }
      });

      response = await response.json();
      const category = response.category;
      const product = response.product;  // Extract products
      setitemCategory(category);
      setItem(product);  // Set products
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
=======
    let response = await fetch('http://localhost:5000/api/product', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    const category = response.category;
    const product = response.product;
    setitemCategory(category);
    setItem(product);
  };
>>>>>>> Stashed changes

  useEffect(() => {
    loadData();
  }, []);

  const displayCategories = [
    'Equipment and Tools',
    'Transportation',
    'Event and Party Supplies',
    'Recreation and Leisure',
    'Home and Lifestyle',
    'Fashion and Accessories',
    'Specialty Items',
    'Land and Property Area',
    'Electronics',
    'Books',
    'Health and Beauty',
    'Food and Beverages',
    'Sports and Outdoors',
    'Office Supplies',
    'Costumes',
    'Camping Gear',
    'Party Decorations',
    'Construction Equipment',
    'Photography Equipment',
    'Toys'
  ];

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <Container>
        <CategoriesContainer>
          <CategoriesList>
            <ul className="list-group">
              {displayCategories.map(category => (
                <li key={category} className="list-group-item">
                  {itemCategory.some(cat => cat.name === category) ? category : <span style={{ color: 'gray' }}>{category} (Not Available)</span>}
                </li>
              ))}
            </ul>
          </CategoriesList>

          <MainContent>
            <CarouselContainer>
              <Carousal />
            </CarouselContainer>

            <CardGrid>
              <CardContainer>
                <Heading>Millions of rental offerings</Heading>
                <SubHeading>Explore rental products and services for your needs from millions of offerings worldwide.</SubHeading>
              </CardContainer>

              <CardContainer>
                <Heading>Assured quality and transactions</Heading>
                <SubHeading>Ensure quality from verified suppliers, with your orders protected from payment to delivery.</SubHeading>
              </CardContainer>

              <CardContainer>
                <Heading>One-stop rental solution</Heading>
                <SubHeading>Rent seamlessly from product/service search to order management, payment, and fulfillment.</SubHeading>
              </CardContainer>

              <CardContainer>
                <Heading>Tailored rental experience</Heading>
                <SubHeading>Get curated benefits, such as exclusive discounts, enhanced protection, and extra support, to help grow your experience every step of the way.</SubHeading>
              </CardContainer>
            </CardGrid>
          </MainContent>
        </CategoriesContainer>
      </Container>

      <div className="container" style={{ marginTop: '2rem' }}>
        {itemCategory.length === 0 ? "" : itemCategory.map((data) => (
          <div className='mb-3 row' key={data._id}>
            <div className='fs-3 m-3'>{data.name}</div>
            <hr />
            {Item.length === 0 ? "" : Item.filter((item) =>
              (item.categoryName === data.name) && (item.name.toLowerCase().includes(search.toLowerCase()))
            ).map((filterItems) => (
              <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                <Card Item={filterItems}></Card>
              </div>
            ))}
          </div>
        ))}
      </div>

<<<<<<< Updated upstream
      <Footer />
=======
      <div>
        <Carousal search={search} setSearch={setSearch} />
      </div>

      <div className="container">
        {
          itemCategory.length === 0
            ? ""
            : itemCategory.map((data) => {
              return (
                <div key={data._id} className='mb-3 row'>
                  <div className='fs-3 m-3'>{data.name}</div>
                  <hr />
                  {
                    Item.length === 0
                      ? ""
                      : Item.filter((item) =>
                          item.CategoryName === data.name && item.name.toLowerCase().includes(search.toLowerCase())
                        ).map((filterItems) => {
                          return (
                            <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                              <Card
                                Item={filterItems}
                                option={filterItems.options[0]}
                              />
                            </div>
                          );
                        })
                  }
                </div>
              );
            })
        }
      </div>
      
      <div>
        <Footer />
      </div>
>>>>>>> Stashed changes
    </>
  );
}



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px 0;
`;

const CategoriesContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: flex-start;
  padding: 0 20px;
`;

const CategoriesList = styled.div`
  flex: 0 0 20%; /* 30% width */
  padding: 10px;
  font-size: 1.2rem;
  height: 90vh;
  overflow-y: auto;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
`;

const MainContent = styled.div`
  flex: 0 0 80%; /* 70% width */
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CarouselContainer = styled.div`
  padding: 10px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const CardContainer = styled.div`
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  border: 2px solid #ff7e5f;
  color: white;
  margin-right:7px;
`;

const Heading = styled.h1`
  font-size: 1.7rem;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  color: #fff;
`;

const SubHeading = styled.p`
  font-size: 1.1rem;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-weight: 500;
  color: #fff;
`;
