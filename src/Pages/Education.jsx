import React from 'react'

const Education = ({darkMode}) => {
  const education = [
  {
  title: "B.Sc. Software Engineering",
  place: "Razi University, Kermanshah, Iran",
  date: "2003 - 2008",
  side: "left"
},
{
  title: "M.Sc. Software Engineering",
  place: "Islamic Azad University, Kermanshah, Iran",
  date: "2014 - 2016",
  side: "right"
}
];
  return (
    <div className={`${darkMode? "bg-black text-white": "bg-white text-black" } min-h-screen`}>
      <div className="w-full max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Education</h2>

      <div className="relative">
        {/* خط عمودی */}
        <div className="absolute left-1/2 top-0 h-full w-2 bg-pink-500 -translate-x-1/2"></div>

        <div className="space-y-16">
          {education.map((item, i) => (
            <div
              key={i}
              className={`flex w-full ${
                item.side === "left" ? "justify-start" : "justify-end"
              }`}
            >
              <div className="w-1/2 text-black">
                <div className="bg-white shadow-lg border-2 border-pink-500 rounded-xl p-6 mr-4 ml-4">
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <p className="text-xl font-semibold border-pink-600 mb-4">
                    {item.place}
                  </p>
                  
                </div>
              </div>

              {/* دایره روی خط */}
              <div className="absolute left-1/2 -translate-x-1/2 mt-2">
                <div className="w-4 h-4 bg-white border-2 border-pink-500 rounded-full"></div>
              </div>

              {/* تاریخ */}
              <div
                className={`absolute mt-2 ${
                  item.side === "left" ? "left-[55%]" : "right-[55%]"
                }`}
              >
                <span className="border-pink-600 border-solid border-2  rounded-lg px-3 py-1 text-sm">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Education