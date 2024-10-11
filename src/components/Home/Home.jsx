const Home =()=>{
    return(
        <>
        <div className="bg-gradient-to-l from-cyan-500 to-blue-500">
        <h1 className="text-3xl font-bold underline text-blue-800">Home</h1>
        <button>Clique</button>
        </div>
        <div className="relative-w-96 m-3 cursor-pointer border-2 shadow-lg rounded-xl items-center">
            <div className="flex h-28 bg-blue-700 rounded-xl items-center justify-center">
                <h1 className="absolute mx-auto text-center right text-2x1 text-white">
                    Clique Aqui
                </h1>
            </div>
            <div className="p-2 border-b-2">
                <h6>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptatibus voluptates hic esse repellendus corporis excepturi, quaerat molestiae at. Velit odio facere enim, quaerat harum ratione distinctio neque aut perferendis.
                </h6>  
                <div className="flex flex-wrap items-center m-2"></div>
                    <span className="border border-blue-500 rounded-2xl px-2 my-1 mx-1">#HTML</span>
                    <span className="border border-blue-500 rounded-2xl px-2 my-1 mx-1">#React</span>
                    <span className="border border-blue-500 rounded-2xl px-2 my-1 mx-1">#JavaScript</span>
                   

            </div>
        </div>
        </>
        
    )
}
export default Home