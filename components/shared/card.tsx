import React from 'react';

const Card = ({css, imglink, eventname, eventcat, eventdate}) => {
  return (
    <div className={"bg-slate-900 bg-opacity-90 p-4 rounded-lg" + css}>
      <img
        className="h- w-full object-cover rounded-lg"
        src={imglink}
        alt="Event"
      />
      <div className="pt-4">
        <p className="text-xl font-semibold text-white">{eventname}</p>
        <p className="text-md text-gray-300">{eventcat}</p>
        <p className="text-md text-gray-400">{eventdate}</p>
      </div>
    </div>
  );
};

export default Card;
