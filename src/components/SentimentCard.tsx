import React from "react";

const SentimentCard = ({
  color,
  content,
  icon,
  title,
  iconBgColor,
}: {
  color: any;
  content: string;
  icon: any;
  title: string;
  iconBgColor: string;
}) => {
  return (
    <div
      className={`${color} rounded-md flex gap-3 px-3 py-3`}
    >
      <div className="flex h-full">
        <div className={`${iconBgColor} px-2 py-2 flex rounded-full text-white`}>
          {icon}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-black tablet:text-base text-sm">{title}</h3>
        <p className="tablet:text-base text-sm">{content}</p>
      </div>
    </div>
  );
};

export default SentimentCard;
