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
      className={`${color} min-h-full min-w-full rounded-md flex gap-3 px-3 py-3`}
    >
      <div className="flex h-full">
        <div className={`${iconBgColor} px-2 py-2 flex rounded-full text-white`}>
          {icon}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-medium text-black tablet:text-base text-xs">{title}</h3>
        <p className="tablet:text-sm text-xs">{content}</p>
      </div>
    </div>
  );
};

export default SentimentCard;
