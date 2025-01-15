// import React from 'react'
// import Header from '../components/layout/Header'


// const Home = ( ) => {



//     const product = [
//         {
//             name: "product1",
//             price: "20k",
//             brand: "apple"
//         },
//         {
//             name: "product1",
//             price: "20k",
//             brand: "apple"
//         },
//         {
//             name: "product1",
//             price: "20k",
//             brand: "apple"
//         },
//     ]

//     console.log("this data from home page", product)


//     // props => variable 
//     // data pass from parent to children


//     return (
//         <> 
//         <Header products = {product}/> 
//             Home page 
//         </>
//     )
// }

// export default Home





const Home = () => {

    const product = [
        {
            name: "Apple",
            price: "300",
            image: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg"
        },
        {
            name: "Banana",
            price: "200",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiE9BZy3SyV4Xb83a3V-e8Ywq6z1bVZlGsA&s"
        },
        {
            name: "Graps",
            price: "300",
            image: "https://img.pikbest.com/png-images/20240713/realistic-purple-grapes-with-background-blue-graps-leaves-ai-generated-images_10663519.png!w700wp"
        },
        {
            name: "Orange",
            price: "300",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTCC0yRCALcVLKod-vuCj_kek2bAQy5JqtIA&s"
        },
        {
            name: "Apple",
            price: "300",
            image: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg"
        },
        {
            name: "Apple",
            price: "300",
            image: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg"
        },
        {
            name: "Apple",
            price: "300",
            image: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg"
        },
        {
            name: "Apple",
            price: "300",
            image: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg"
        },
    ]


    console.log(product)

    return (
        <>

            <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-md text-center">
                        <h2 className="font-serif text-2xl font-bold sm:text-3xl">Fresh Fruits & Vegetables</h2>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">

                        {product.map((data, index) => ( 
                            <article key={index} className="relative flex flex-col overflow-hidden rounded-lg border">
                                <div className="aspect-square overflow-hidden">
                                    <img className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src={data.image} alt="" />
                                </div>
                                <div className="absolute top-0 m-2 rounded-full bg-white">
                                    <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
                                </div>
                                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                                    <div className="mb-2 flex">
                                        <p className="mr-3 text-sm font-semibold">Rs.{data.price}</p>
                                        <del className="text-xs text-gray-400"> $79.00 </del>
                                    </div>
                                    <h3 className="mb-2 text-sm text-gray-400">{data?.name}</h3>
                                </div>
                                <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                                    <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
                                    <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
                                </button>
                            </article>
                        ))} 
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home


