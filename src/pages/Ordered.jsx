import { useEffect, useState } from "react";
import * as  orderService from "../api/getAllOrdered";

function Ordered() {
    const [ordered , setOrdered] = useState([])
    
    const getAllOrdered = async () => {
        const res = await orderService.getAllOrderedApi()
        setOrdered(res.data.orders)
        // console.log(res.data.orders)
    }
    useEffect(() => {
        try {
            getAllOrdered()
        }catch(err) {
            console.log(err);
        }
    }, [])

    // let totalPriceWhenOrder = ordered.OrderItems.priceWhenOrder
    // console.log(ordered);

    // console.log(ordered[0].OrderItems[0].priceWhenOrder);

    // let total = ordered.map(item => item.OrderItems.map(item => item.amount * item.priceWhenOrder).reduce((acc, cur) => acc + cur, 0))

    // console.log(total)

    return (<div className="bg-light-kai h-100 flex py-[17vh]   w-screen items-center justify-items-start flex-col  text-white font-[Aclonica] gap-3">
        {ordered?.map((item, idx) => <div key={item.id} idx={idx} className="flex flex-col-reverse items-center justify-between text-[2rem] text-black bg-menu h-[300px] w-[550px] rounded-[50px] px-3 py-5 select-none">
            <div className="flex gap-[35px]">
         <div>{item.payMentStatus}</div>
         <button className="text-[25px]  text-white bg-kai h-[3rem] rounded-[15px]  font-['Aclonica'] hover:bg-dark-kai">Approve</button>
                <div className="flex justify-center gap-5"><p className="flex items-center text-base">Total</p>{item.OrderItems.map(item => item.amount * item.priceWhenOrder).reduce((acc, cur) => acc + cur, 0)}&nbsp;B</div>
            </div>
        <div>
        <div className="flex justify-center ">{item.User.username}</div>
        <div className="flex justify-between  w-[500px] bg-white rounded-xl text-xl">
        <div>{item.OrderItems.map(item => <div key={item.id}>{item.Menu.name}</div>)}</div>
        <div>{item.OrderItems.map(item => <div key={item.id}>{item.priceWhenOrder}&nbsp;B</div>)}</div>
        </div>
        
        </div>
        </div>)
        }
        
        </div>)
}

export default Ordered;