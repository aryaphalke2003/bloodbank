import React from "react";

const BloodBankItem = ({ data }) => {
  const [id, name, type, availability, lastUpdated, category] = data;

  return (
    <div className="border p-4 w-fit rounded-lg mb-4">
      <h2 className="text-lg text-white font-medium">{name}</h2>
      <p className="text-white">{type}</p>
      <div className="text-white" dangerouslySetInnerHTML={{ __html: availability }} />
      <p className="text-white">{lastUpdated}</p>
      <p className="text-white">{category}</p>
    </div>
  );
};

const BloodBankList = ({ data }) => {

  return (
    <div>
      {data && data.map((item) => (
        <BloodBankItem key={item[0]} data={item.map((str) => str.replace(/(<([^>]+)>)/gi, ''))} />
      ))}
    </div>
  );
};

export default BloodBankList;
