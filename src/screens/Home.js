import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousal from '../components/Carousal';

export default function Home() {
  const [search, setSearch] = useState('')
  const [itemCategory, setitemCategory] = useState([]);
  const [Item, setItem] = useState([]);

  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/product', {
      method: "GET",
      headers: {
        'Content-Type': "application/json"
      }
    });

    response = await response.json();
    const category = response.category;
    const product = response.product;
    setitemCategory(category);
    setItem(product);
    console.log(Item)

  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <Navbar search={search} setSearch={setSearch} />
      </div>

      <div>
        <Carousal />
      </div>


      <div className="container">
        {
          itemCategory == []
            ?
            ""
            : itemCategory.map((data) => {
              return (
                <div className='mb-3 row'>
                  <div key={data._id} className='fs-3 m-3'>{data.name}</div>
                  <hr></hr>
                  {Item == [] ? "" : Item.filter((item) =>
                    (item.categoryName === data.name) && (item.name.toLowerCase().includes(search.toLowerCase()))
                  ).map((filterItems) => {
                    return (
                      <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                        <Card
                          Item={filterItems}
                        ></Card>
                      </div>
                    )
                  })
                  }
                </div>
              )
            })

        }
      </div >
      <div>
        <Footer />
      </div>
    </>
  );
}
