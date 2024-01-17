import Card from '@mui/material/Card';

function MyFeed(){
    return(

        <>
        <div>
        <Card className='w-[1000px] h-[150px] ml-[20%] mt-12 bg-gray-200 mb-4'>
            <div className='relative flex flex-row  justify-center object-contain'>
                <img src="tech1.jpg" alt="" className='absolute left-0 w-[250px] h-[150px] object-cover'/>
                <p className='absolute top-[30px] text-2xl font-bold ml-12'>Journey into the web, Unravelling the internet</p>
                <br/>
                <p className='absolute top-[60px] text-xl mt-4'>By Nikhil</p>
                <p className='absolute top-[90px] mt-4'>
                    click to read
                </p>



            </div>

        </Card>
        <Card className='w-[1000px] h-[150px] ml-[20%] mt-12 bg-gray-200 mb-4'>
            <div className='relative flex flex-row  justify-center object-contain'>
                <img src="tech1.jpg" alt="" className='absolute left-0 w-[250px] h-[150px] object-cover'/>
                <p className='absolute top-[30px] text-2xl font-bold ml-12'>Journey into the web, Unravelling the internet</p>
                <br/>
                <p className='absolute top-[60px] text-xl mt-4'>By Nikhil</p>
                <p className='absolute top-[90px] mt-4'>
                    click to read
                </p>



            </div>

        </Card>
        <Card className='w-[1000px] h-[150px] ml-[20%] mt-12 bg-gray-200 mb-4'>
            <div className='relative flex flex-row  justify-center object-contain'>
                <img src="/cover2.jpg" alt="" className='absolute left-0 w-[250px] h-[150px] object-cover'/>
                <p className='absolute top-[30px] text-2xl font-bold ml-12'>Journey into the web, Unravelling the internet</p>
                <br/>
                <p className='absolute top-[60px] text-xl mt-4'>By Nikhil</p>
                <p className='absolute top-[90px] mt-4'>
                    click to read
                </p>



            </div>

        </Card>


        </div>
        
        </>
    
    )
}
export default MyFeed;