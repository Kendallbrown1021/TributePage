import React from 'react'
import Auntie from './../images/Auntie.png'


const Header = () => {
    return (
        <div className=" bg-main h-auto  mx-auto pb-20 md:flex flex-row-reverse justify-around  w-auto">
            <div className="md:flex flex-row-reverse justify-around  w-auto">
                 <div className="p-4  overflow-hidden md:w-6/12">
                <img src={Auntie} alt="Kenisha Photo Main" className="rounded-lg shadow-lg md:w-9/12 mx-auto my-8" />
            </div>
            <div className='md:w-6/12 lg:my-auto'>
                <h1 className="font-main text-5xl text-secondary mt-8 md:text-5xl lg:text-7xl xl:text-8xl">Kenisha Desiree <br/> Brown</h1>
                <div className="flex justify-around  text-2xl font-main text-primary mt-6 md:mt-20">
                    <h2>Sunrise <br/> December 2, 1976 </h2>
                    <h2>Sunset <br/> December 14, 2020 </h2>
                </div>
                <div>
                  <table className=" font-main mx-auto w-9/12 mt-8 text-primary text-2xl md:mt-20">
                      <tr className="p-4" >
                          <td className="p-2">Daughter</td>
                          <td className="p-2">Sister</td>
                          <td className="p-2">Aunt</td>
                      </tr>
                      <tr>
                          <td className="p-2">Niece</td>
                          <td className="p-2">Cousin</td>
                          <td className="p-2">Friend</td>
                      </tr>
                  </table>
                </div>
            </div>
            </div>
           
            
        </div>
    )
}

export default Header
