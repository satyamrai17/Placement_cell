import { teamData } from "../../modules/constants/TeamConstant.js";

export const Team = () =>{
    return(<div className="bg-[#DEECE9]">
            <h1 className="text-center text-3xl p-4 font-bold">Our Team Members</h1>
        <div className="flex flex-wrap gap-4 px-12 py-8">
            {teamData.map(items=>{
                return(<div className="bg-[#CCCCFF] w-full sm:w-1/3 md:w-1/5 m-auto p-2 mb-4 text-center shadow-lg">
                    <img src={items.Image} alt="Abhishek Shukla" className="h-60 w-full m-auto rounded"/>
                    <p className="text-xl font-semibold py-2">{items.name}</p>
                    <p className="text-lg font-normal ">{items.Position}</p>
                </div>)
            })}
        </div>
    </div>)
}