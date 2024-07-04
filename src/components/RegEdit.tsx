import { FC } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

interface RegEditProps {

}

const RegEdit: FC<RegEditProps> = ({ }) => {
    return (
        <div className='fixed inset-x-24 top-1/2 transform -translate-y-1/2 w-full max-w-sm'>
            <p className='py-2 text-2xl font-bold bg-gradient-to-r from-green-300 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient'>
                10 second car valuation</p>

            <div className="py-2">
                <Input type='number' className='h-18' placeholder="Enter mileage" />
            </div>

            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input className='h-18' placeholder="ENTER REG" />
                <Button className='h-18 bg-[#01796f]'>Check Now</Button>
            </div>
        </div>

    )
}

export default RegEdit