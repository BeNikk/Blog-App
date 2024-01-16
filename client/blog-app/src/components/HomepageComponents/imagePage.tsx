function ImagePage(){
    return(
        <>
        <div className="relative ml-12 mr-12 mt-8 h-[550px] overflow-hidden rounded-lg" style={{background: "linear-gradient(to top, white, white 80%, #b4b4fb)"}}>
        <img src="/cover2.jpg" alt="Main Image" className="m-auto w-[980px] h-[980px]"/>
        <img src="/cover1.jpg" alt="left Image" className="absolute top-[60px] left-[50px] w-[550px] h-[550px]" />
        <img src="/cover3.jpg" alt="left Image" className="absolute top-[60px] right-[50px] w-[550px] h-[550px]" />


   




        </div>
            
        </>
    )
}

export default ImagePage;