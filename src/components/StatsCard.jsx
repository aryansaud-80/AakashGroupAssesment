const StatsCard = ({icon, stat, statTitle}) => {
  return (
    <div className="flex flex-col gap-2 items-center  px-6 text-center">
      <div className="bg-blue-100 p-3 rounded-lg w-16 h-16 flex items-center justify-center ">
        {icon}
      </div>

      <span className="text-3xl md:text-4xl font-bold text-gray-800">
        {stat}
      </span>

      <h4 className="font-medium text-gray-600">
        {statTitle}
      </h4>
    </div>
  )
}
export default StatsCard




