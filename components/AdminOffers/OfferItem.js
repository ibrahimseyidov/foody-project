import Image from 'next/image'
import editIcon from '../../assets/icons/editIcon.svg'
import trashIcon from '../../assets/icons/trashIcon.svg'
import { openOfferModalEdit } from '../../redux/features/editModalSlice'
import styles from '../AdminCategory/admincategory.module.css'
import { openDelModal, openDelOfferModal } from '../../redux/features/delModalSlice'
import { useDispatch } from 'react-redux'
const OfferItem = ({offerData}) => {
    const dispatch = useDispatch()
   const offerResult=offerData?.result;
  return offerResult?.data.map((offer,i)=>(
    <tr className={styles['table-row']} key={i}>
    <td><span className={styles['table-id']}>{i}</span></td>
    <td className='flex justify-center'><Image width={100} height={100} src={offer.img_url} alt='offer' /></td>
    <td>{offer.name}</td>
    <td>{offer.description}</td>
    <td>
        <button onClick={() => dispatch(openOfferModalEdit(offer))} className='mr-4'>
            <Image src={editIcon} alt='edit-icon' />
        </button>
        <button onClick={() => dispatch(openDelOfferModal(offer?.id))}>
            <Image src={trashIcon} alt='trash-icon' />
        </button>
    </td>
</tr>
  ))

  
}

export default OfferItem