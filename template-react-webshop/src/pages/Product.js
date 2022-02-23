//Veronicas del
//This component is a page. Is shownone one at a time, through routing
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';


function Product() {
    const [product, setProduct] = useState({});
    const params = useParams();

    const fetchData = async () => {
        try {
            const response = await fetch('https://codexplained.se/electronics.php' + params.testid);
            const data = await response.json();
            console.log(data);

            setProduct(data);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>
            <h1>Enskild produkt med id: {params.testid}</h1>
            <p>{product.content}</p>
        </div>
    )
}

export default Product
