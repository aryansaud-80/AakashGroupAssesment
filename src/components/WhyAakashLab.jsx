import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const WhyAakashLab = () => {
  return  <div
              className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4">Why Choose Aakash Labs?</h4>
              <div className="space-y-3">
                {[
                  "5+ years of SaaS development experience",
                  "Modern technology stack and best practices",
                  "Agile development with regular updates",
                  "24/7 support and maintenance",
                  "Competitive pricing and flexible packages",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <IoMdCheckmarkCircleOutline className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
};
export default WhyAakashLab;
