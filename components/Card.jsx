function Card({ 
  icon: Icon, 
  text, 
  iconColor = "text-cyan-500",
  iconSize = "w-12 h-12",
  onClick,
  className = ""
}) {
  return (
    <div 
      className={`flex flex-col items-center gap-4 p-4 ml-3 w-1/3 mr-3 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow cursor-pointer ${className}`}
      onClick={onClick}
    >
      <Icon className={`${iconSize} ${iconColor}`} />
      <p className="text-sm text-center text-gray-700">{text}</p>
    </div>
  );
}

export default Card;