import { useEffect, useState } from "react"
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './Products.css'

const List =({ itemData, toggleFavorite})=>{
    return(
   
       <Row className="row container">
          
        {itemData.map((item,index)=>(
          
            <Col className="col" key={index} sm={2} lg={4}>
             
                        
              <Card className="card mb-4" style={{ width: "18rem" }}>
               
            <Card.Img className="image"  variant="top" src={item.image} />
            <Card.Body>
              <Card.Title className="title">{item.title}</Card.Title>
              <Card.Text className="desc" >{item.description}</Card.Text>
              <Card.Text>{item.price}</Card.Text>
              <div className="button d-flex ">
              <Button
                  id="button2"
                  variant="primary"
             
                >
                  <FontAwesomeIcon icon={faShoppingCart} /> Cart
                </Button>

                <Button id="button2" variant="primary" onClick={() => toggleFavorite(item.id)}>   <FontAwesomeIcon
    icon={faHeart}
    className={`favorite-icon ${item.isFavorite ? 'favorite' : ''}`}
  /> </Button>
              </div>
            </Card.Body>
            
          </Card>
        
            </Col>
        ))}
        </Row>
        
    )
}

const Filtteritem=({onfiltterclick})=>{
const handleFilterClick=(category)=>{
    onfiltterclick(category)
}
return(
    <>  
    <div>
    <h4 id="title"> POPULAR PRODUCTS</h4>
    <h3 id="title1">Our Products</h3>
    <p id="discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae <br/>nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut <br/> consequatur laboriosam ipsam.</p>
   </div> 
  <div className="button2">
     <Button id="button" className="buttonall" variant="primary" onClick={() => handleFilterClick("All")}>
        All
      </Button>
      <Button id="button" variant="primary" onClick={() => handleFilterClick("men's clothing")}>
        Men's Clothing
      </Button>
      
      <Button id="button" variant="primary" onClick={() => handleFilterClick("women's clothing")}>
        Women's Clothing
      </Button>
    </div>
    </>
)
}

const Products=()=>{
    const [itemData,setitemData]=useState([])
    const [favoriteItems, setFavoriteItems] = useState([]);
    const shopData=[
        {
            "id": 1,
            "title": "Wild West Hoodie",
            "price": 109.95,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
           
        },
        {
            "id": 2,
            "title": "Wild West Hoodie",
            "price": 22.3,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
           
        },
        {
            "id": 3,
            "title": "Wild West Hoodie",
            "price": 55.99,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
           
        },
        {
            "id": 4,
            "title": "Wild West Hoodie",
            "price": 15.99,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
           
        },
       
        {
            "id": 15,
            "title": "Wild West Hoodie",
            "price": 56.99,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
           
        },
        {
            "id": 16,
            "title": "Wild West Hoodie",
            "price": 29.95,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
         
        },
        {
            "id": 17,
            "title": "Wild West Hoodie",
            "price": 39.99,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
          
        },
        {
            "id": 18,
            "title": "Wild West Hoodie",
            "price": 9.85,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
          
        },
        {
            "id": 19,
            "title": "Wild West Hoodie",
            "price": 7.95,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
            
        },
        {
            "id": 20,
            "title": "Wild West Hoodie",
            "price": 12.99,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
            
        }
    ]
    useEffect(() => {
      setitemData(shopData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  const toggleFavorite = (productId) => {
    if (favoriteItems.includes(productId)) {
      setFavoriteItems(favoriteItems.filter(id => id !== productId));
    } else {
      setFavoriteItems([...favoriteItems, productId]);
    }
  };
  const updatedItemData = itemData.map(item => ({
    ...item,
    isFavorite: favoriteItems.includes(item.id),
  }));
    const handleFilterClick = (category) => {
        if (category === "All") {
            setitemData([...shopData])
         
        } else {
          
          const filteredData = shopData.filter((item) => item.category === category);
          setitemData(filteredData);
        }
      };
    
    return (
        <>
        <Filtteritem onfiltterclick={handleFilterClick}/>
        <List
        itemData={updatedItemData}
   
        toggleFavorite={toggleFavorite}
      />


        </>
    )
}
export default Products