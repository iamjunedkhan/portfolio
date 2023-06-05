import React from 'react'

const SkillTile = ({ logo }) => {
    return (
        <div>
            <div className=' rounded-full m-4 overflow-hidden flex justify-center items-center  w-44 h-44   border-2 border-red-900'>
                <logo />
            </div>
        </div>
    )
}

export default SkillTile