import { XMarkIcon } from '@heroicons/react/24/solid' 

const OrderCard = props => {
    const {id, title, imageUrl, price, handleDelete} = props

    let renderXMarkIcon

    if (handleDelete){
        renderXMarkIcon = <XMarkIcon
            onClick={()=>handleDelete(id)}
            className="h-4 w-4 text-black cursor-pointer "/>
    }

    return (
        
        <div className='flex justify-between items-center mb-2 '>
            <div className='flex items-center gap-2'>
                <figure className='flex items-center gap-2 w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                    <p className='text-sm font-light'> {title} </p>
                </figure>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                {renderXMarkIcon}
            </div>
        </div>
    )
}

export {OrderCard}
