import { Check } from 'lucide-react'
import { FC } from 'react'

const AdvantageSheet: FC = () => {
  return (
    <div className="mt-8 space-y-4">
      <div className="flex items-center">
        <Check className="h-5 w-5 text-green-500 mr-2" />
        <span className="text-gray-700">Работаем 7 дней в неделю</span>
      </div>
      <div className="flex items-center">
        <Check className="h-5 w-5 text-green-500 mr-2" />
        <span className="text-gray-700">Собственный автопарк спецтехники</span>
      </div>
      <div className="flex items-center">
        <Check className="h-5 w-5 text-green-500 mr-2" />
        <span className="text-gray-700">
          Фиксированные цены, никаких доплат
        </span>
      </div>
    </div>
  )
}

export default AdvantageSheet
