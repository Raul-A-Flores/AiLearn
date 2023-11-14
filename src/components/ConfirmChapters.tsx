import { Chapter, Course, Unit } from '@prisma/client'
import React from 'react'



type Props = {
    course: Course & {
        units: (Unit & {
            chapters: Chapter[]
        })[]
    }

}

const ConfirmChapters = ({course}: Props) => {
  return (
    <div className='w-full mt-4 '>
        {course.units.map((unit, unitIndex)=>{
            return(
                <div key={unit.id} className='mt-5'>
                    <h2 className='text-sm uppercase text-secondary-foreground/60'>
                        Unit {unitIndex + 1}

                    </h2>

                </div>
            )
        })}
    </div>
  )
}

export default ConfirmChapters