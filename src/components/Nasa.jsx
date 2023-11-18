import { useEffect, useState} from 'react';

export default function Nasa(){

    const[projects, setProjects] = useState();
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {

            headers : {
                'accept' : 'application/json'
            },
            method : 'GET'
        }).then(res => {
            console.log(res);
            return res.json();
        })
            .then(json => {
                const products = [];
                json.forEach((elemento) => {
                    products.push(
                        <>
                            <div style={{
                                display: 'flex',
                                flexDirection : 'column'
                            }}>
                                <div> {elemento.id} </div>
                                <div> {elemento.title}</div>

                            </div>
                        </>
                    )
                })
                setProjects(products);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>  
        Hola
        </>

    )

}