import React from 'react'

export default function Size() {
  return (
    <div>
                        <div className="mt-1 textPart">
        {products[item].size.includes("0") && (<span className="border border-gray-300 px-1 mx-1">0</span>)}
        {products[item].size.includes("1") && (<span className="border border-gray-300 px-1 mx-1">1</span>)}
        {products[item].size.includes("2") && (<span className="border border-gray-300 px-1 mx-1">2</span>)}
        {products[item].size.includes("3") && (<span className="border border-gray-300 px-1 mx-1">3</span>)}
        {products[item].size.includes("4") && (<span className="border border-gray-300 px-1 mx-1">4</span>)}
        {products[item].size.includes("5") && (<span className="border border-gray-300 px-1 mx-1">5</span>)}
        {products[item].size.includes("6") && (<span className="border border-gray-300 px-1 mx-1">6</span>)}
        {products[item].size.includes("7") && (<span className="border border-gray-300 px-1 mx-1">7</span>)}
        {products[item].size.includes("8") && (<span className="border border-gray-300 px-1 mx-1">8</span>)}
        {products[item].size.includes("9") && (<span className="border border-gray-300 px-1 mx-1">9</span>)}
        {products[item].size.includes("10") && (<span className="border border-gray-300 px-1 mx-1">10</span>)}
        {products[item].size.includes("12") && (<span className="border border-gray-300 px-1 mx-1">12</span>)}
        {products[item].size.includes("14") && (<span className="border border-gray-300 px-1 mx-1">15</span>)}
        {products[item].size.includes("15") && (<span className="border border-gray-300 px-1 mx-1">14</span>)}
        {products[item].size.includes("16") && (<span className="border border-gray-300 px-1 mx-1">16</span>)}
        {products[item].size.includes("18") && (<span className="border border-gray-300 px-1 mx-1">18</span>)}
        {products[item].size.includes("20") && (<span className="border border-gray-300 px-1 mx-1">20</span>)}
        {products[item].size.includes("22") && (<span className="border border-gray-300 px-1 mx-1">22</span>)}
        {products[item].size.includes("24") && (<span className="border border-gray-300 px-1 mx-1">24</span>)}
        {products[item].size.includes("26") && (<span className="border border-gray-300 px-1 mx-1">26</span>)}
        {products[item].size.includes("28") && (<span className="border border-gray-300 px-1 mx-1">28</span>)}
        {products[item].size.includes("30") && (<span className="border border-gray-300 px-1 mx-1">30</span>)}
        {products[item].size.includes("32") && (<span className="border border-gray-300 px-1 mx-1">32</span>)}
        {products[item].size.includes("34") && (<span className="border border-gray-300 px-1 mx-1">34</span>)}
        {products[item].size.includes("36") && (<span className="border border-gray-300 px-1 mx-1">36</span>)}
        {products[item].size.includes("38") && (<span className="border border-gray-300 px-1 mx-1">38</span>)}
        {products[item].size.includes("40") && (<span className="border border-gray-300 px-1 mx-1">40</span>)}
        {products[item].size.includes("40") && (<span className="border border-gray-300 px-1 mx-1">40</span>)}
        {products[item].size.includes("42") && (<span className="border border-gray-300 px-1 mx-1">42</span>)}
        {products[item].size.includes("44") && (<span className="border border-gray-300 px-1 mx-1">44</span>)}
        {products[item].size.includes("46") && (<span className="border border-gray-300 px-1 mx-1">46</span>)}
        {products[item].size.includes("48") && (<span className="border border-gray-300 px-1 mx-1">48</span>)}
        {products[item].size.includes("96") && (<span className="border border-gray-300 px-1 mx-1">96</span>)}
        {products[item].size.includes("100") && (<span className="border border-gray-300 px-1 mx-1">100</span>)}
        {products[item].size.includes("128") && (<span className="border border-gray-300 px-1 mx-1">128</span>)}
        {products[item].size.includes("288") && (<span className="border border-gray-300 px-1 mx-1">288</span>)}
        {products[item].size.includes("450") && (<span className="border border-gray-300 px-1 mx-1">450</span>)}
        {products[item].size.includes("600") && (<span className="border border-gray-300 px-1 mx-1">600</span>)}
        {products[item].size.includes("900") && (<span className="border border-gray-300 px-1 mx-1">900</span>)}
        {products[item].size.includes("S") && (<span className="border border-gray-300 px-1 mx-1">S</span>)}
        {products[item].size.includes("M") && (<span className="border border-gray-300 px-1 mx-1">M</span>)}
        {products[item].size.includes("L") && (<span className="border border-gray-300 px-1 mx-1">L</span>)}
        {products[item].size.includes("XL") && (<span className="border border-gray-300 px-1 mx-1">XL</span>)}
        {products[item].size.includes("2XL") && (<span className="border border-gray-300 px-1 mx-1">2XL</span>)}
        {products[item].size.includes("3XL") && (<span className="border border-gray-300 px-1 mx-1">3XL</span>)}
        </div>
  
        
        <div className="mt-1 text-gray-600 text-sm space-x-1 textPart">
        {products[item].color.includes("zinc") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#BAC4C8] hover:bg-[#BAC4C8] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("rose gold") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#B76E79] hover:bg-[#B76E79] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("antique") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#B76E79] hover:bg-[#B76E79] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("black") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-black hover:bg-black w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("white") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-white hover:bg-white w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("gold") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#FFD700] hover:bg-[#FFD700] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("aluminium") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#848789] hover:bg-[#848789] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("wenge") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#645452] hover:bg-[#645452] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("ss") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#b4bdc7] hover:bg-[#b4bdc7] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("mocha brown") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#664F40] hover:bg-[#664F40] w-6 h-6 focus:outline-none"></button>)}
                
        </div>
    </div>
  )
}
