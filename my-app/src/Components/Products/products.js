import React, { useState, useEffect, useRef } from 'react';
import './products.css';
import Hero from "../HERO/Hero";


function Products() {
  const categories = [
    { 
      id: "category1", 
      name: "Flowers", 
      cards: [
        { id: 1, name: "Flower 1", imgSrc: "https://images.unsplash.com/photo-1495975295218-a59edae1540a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxmbG93ZXJzfGVufDB8MXwwfHx8MA%3D%3D" },
        { id: 2, name: "Card 2", imgSrc: "https://images.unsplash.com/photo-1538998073820-4dfa76300194?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 3, name: "Card 3", imgSrc: "https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 4, name: "Card 4", imgSrc: "https://plus.unsplash.com/premium_photo-1674986175088-2d7dda41f7f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D" },
        { id: 5, name: "Card 5", imgSrc: "https://images.unsplash.com/photo-1531112998639-59af23e7a65e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZsb3dlcnN8ZW58MHwxfDB8fHww" },
        { id: 6, name: "Card 6", imgSrc: "https://images.unsplash.com/photo-1525096122400-e43fa92b933f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGZsb3dlcnN8ZW58MHwxfDB8fHww" },
        { id: 7, name: "Card 7", imgSrc: "https://images.unsplash.com/photo-1515366414996-accc5b232a23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGZsb3dlcnN8ZW58MHwxfDB8fHww" }
      ]
    },
    { 
      id: "category2", 
      name: "Indoor Plants", 
      cards: [
        { id: 8, name: "Card 8", imgSrc: "https://plus.unsplash.com/premium_photo-1674815329477-998744fe642f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kb29yJTIwcGxhbnR8ZW58MHwxfDB8fHww" },
        { id: 9, name: "Card 9", imgSrc: "https://plus.unsplash.com/premium_photo-1673064927010-9c73e9df6b52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kb29yJTIwcGxhbnR8ZW58MHwxfDB8fHww" },
        { id: 10, name: "Card 10", imgSrc: "https://plus.unsplash.com/premium_photo-1665408511793-51dc25f82b2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZG9vciUyMHBsYW50fGVufDB8MXwwfHx8MA%3D%3D" },
        { id: 11, name: "Card 11", imgSrc: "https://images.unsplash.com/photo-1611866734967-a59d38e03766?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZG9vciUyMHBsYW50fGVufDB8MXwwfHx8MA%3D%3D" },
        { id: 12, name: "Card 12", imgSrc: "https://images.unsplash.com/photo-1579817193786-64c0fd7fbc16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGluZG9vciUyMHBsYW50fGVufDB8MXwwfHx8MA%3D%3D" },
        { id: 13, name: "Card 13", imgSrc: "https://images.unsplash.com/photo-1622502888169-0430f72ae48d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGluZG9vciUyMHBsYW50fGVufDB8MXwwfHx8MA%3D%3D" },
        { id: 14, name: "Card 14", imgSrc: "https://images.unsplash.com/photo-1541586655971-3ef599c4ba77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGluZG9vciUyMHBsYW50fGVufDB8MXwwfHx8MA%3D%3D" }
      ]
    },
    { 
      id: "category3", 
      name: "Landscaping", 
      cards: [
        { id: 8, name: "Card 8", imgSrc: "https://plus.unsplash.com/premium_photo-1661825317479-0b8e91a640b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TGFuZHNjYXBpbmclMjBwbGFudHN8ZW58MHwxfDB8fHww" },
        { id: 9, name: "Card 9", imgSrc: "https://images.unsplash.com/photo-1668731802337-2c6b423730df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fExhbmRzY2FwaW5nJTIwcGxhbnRzfGVufDB8MXwwfHx8MA%3D%3D" },
        { id: 10, name: "Card 10", imgSrc: "https://images.unsplash.com/photo-1687093996780-87149ebc623f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fExhbmRzY2FwaW5nJTIwcGxhbnRzfGVufDB8MXwwfHx8MA%3D%3D" },
        { id: 11, name: "Card 11", imgSrc: "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxvcmF8ZW58MHwxfDB8fHww" },
        { id: 12, name: "Card 12", imgSrc: "https://images.unsplash.com/photo-1598838073192-05c942ede858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90dGVkJTIwcGxhbnR8ZW58MHwxfDB8fHww" },
        { id: 13, name: "Card 13", imgSrc: "https://plus.unsplash.com/premium_photo-1674237276501-595398f90f87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG90dGVkJTIwcGxhbnR8ZW58MHwxfDB8fHww" },
        { id: 14, name: "Card 14", imgSrc: "https://images.unsplash.com/photo-1521465192072-6926fef831fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdHRlZCUyMHBsYW50fGVufDB8MXwwfHx8MA%3D%3D" }
      ]
    },
    { 
      id: "category4", 
      name: "Trees", 
      cards: [
        { id: 8, name: "Card 8", imgSrc: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bnVyc2V5JTIwdHJlZXN8ZW58MHwxfDB8fHww" },
        { id: 9, name: "Card 9", imgSrc: "https://plus.unsplash.com/premium_photo-1668110864450-48a6591c3a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZXN8ZW58MHwxfDB8fHww" },
        { id: 10, name: "Card 10", imgSrc: "https://images.unsplash.com/photo-1599148401005-fe6d7497cb5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyZWVzfGVufDB8MXwwfHx8MA%3D%3D" },
        { id: 11, name: "Card 11", imgSrc: "https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 12, name: "Card 12", imgSrc: "https://images.unsplash.com/photo-1515366414996-accc5b232a23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGZsb3dlcnN8ZW58MHwxfDB8fHww" },
        { id: 13, name: "Card 13", imgSrc: "https://images.unsplash.com/photo-1525096122400-e43fa92b933f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGZsb3dlcnN8ZW58MHwxfDB8fHww" },
        { id: 14, name: "Card 14", imgSrc: "https://plus.unsplash.com/premium_photo-1673064927010-9c73e9df6b52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kb29yJTIwcGxhbnR8ZW58MHwxfDB8fHww" }
      ]
    },
    { 
      id: "category5", 
      name: "Outdoor Plants", 
      cards: [
        { id: 1, name: "Flower 1", imgSrc: "https://images.unsplash.com/photo-1495975295218-a59edae1540a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxmbG93ZXJzfGVufDB8MXwwfHx8MA%3D%3D" },
        { id: 2, name: "Card 2", imgSrc: "https://images.unsplash.com/photo-1538998073820-4dfa76300194?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 3, name: "Card 3", imgSrc: "https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 4, name: "Card 4", imgSrc: "https://plus.unsplash.com/premium_photo-1674986175088-2d7dda41f7f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D" },
        { id: 5, name: "Card 5", imgSrc: "https://images.unsplash.com/photo-1531112998639-59af23e7a65e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZsb3dlcnN8ZW58MHwxfDB8fHww" },
        { id: 6, name: "Card 6", imgSrc: "https://images.unsplash.com/photo-1525096122400-e43fa92b933f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGZsb3dlcnN8ZW58MHwxfDB8fHww" },
        { id: 7, name: "Card 7", imgSrc: "https://images.unsplash.com/photo-1515366414996-accc5b232a23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGZsb3dlcnN8ZW58MHwxfDB8fHww" }
      ]
    },
    { 
      id: "category6", 
      name: "Fruit Plants", 
      cards: [
        { id: 8, name: "Card 8", imgSrc: "https://plus.unsplash.com/premium_photo-1674815329477-998744fe642f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kb29yJTIwcGxhbnR8ZW58MHwxfDB8fHww" },
        { id: 9, name: "Card 9", imgSrc: "https://plus.unsplash.com/premium_photo-1673064927010-9c73e9df6b52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kb29yJTIwcGxhbnR8ZW58MHwxfDB8fHww" },
        { id: 10, name: "Card 10", imgSrc: "https://plus.unsplash.com/premium_photo-1665408511793-51dc25f82b2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZG9vciUyMHBsYW50fGVufDB8MXwwfHx8MA%3D%3D" },
        { id: 11, name: "Card 11", imgSrc: "https://images.unsplash.com/photo-1611866734967-a59d38e03766?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZG9vciUyMHBsYW50fGVufDB8MXwwfHx8MA%3D%3D" },
        { id: 12, name: "Card 12", imgSrc: "https://images.unsplash.com/photo-1579817193786-64c0fd7fbc16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGluZG9vciUyMHBsYW50fGVufDB8MXwwfHx8MA%3D%3D" },
        { id: 13, name: "Card 13", imgSrc: "https://images.unsplash.com/photo-1622502888169-0430f72ae48d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGluZG9vciUyMHBsYW50fGVufDB8MXwwfHx8MA%3D%3D" },
        { id: 14, name: "Card 14", imgSrc: "https://images.unsplash.com/photo-1541586655971-3ef599c4ba77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGluZG9vciUyMHBsYW50fGVufDB8MXwwfHx8MA%3D%3D" }
      ]
    },
    { 
      id: "category7", 
      name: "Fertilizers & Manures", 
      cards: [
        { id: 1, name: "Flower 1", imgSrc: "https://images.unsplash.com/photo-1495975295218-a59edae1540a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxmbG93ZXJzfGVufDB8MXwwfHx8MA%3D%3D" },
        { id: 2, name: "Card 2", imgSrc: "https://images.unsplash.com/photo-1538998073820-4dfa76300194?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 3, name: "Card 3", imgSrc: "https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 4, name: "Card 4", imgSrc: "https://plus.unsplash.com/premium_photo-1674986175088-2d7dda41f7f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D" },
        { id: 5, name: "Card 5", imgSrc: "https://images.unsplash.com/photo-1531112998639-59af23e7a65e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZsb3dlcnN8ZW58MHwxfDB8fHww" },
        { id: 6, name: "Card 6", imgSrc: "https://images.unsplash.com/photo-1525096122400-e43fa92b933f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGZsb3dlcnN8ZW58MHwxfDB8fHww" },
        { id: 7, name: "Card 7", imgSrc: "https://images.unsplash.com/photo-1515366414996-accc5b232a23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGZsb3dlcnN8ZW58MHwxfDB8fHww" }
      ]
    }
  ];

  // State to track the active category
  const [activeCategory, setActiveCategory] = useState("category1");
  return(

      <div>
        <div>
          <Hero />
        </div>
        <div className="cards">
      {/* <h1>Products Available</h1> */}

      {/* Category Buttons */}
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-button ${activeCategory === category.id ? "active" : ""}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Display Cards */}
      <div className="cards-container">
        {categories
          .find((category) => category.id === activeCategory)
          .cards.map((card) => (
            <div key={card.id} className="card">
              <img src={card.imgSrc} alt={card.name} className="card-image" />
              <p>{card.name}</p>
            </div>
          ))}
      </div>
    </div>
     

    </div>


  );
}

export default Products;
