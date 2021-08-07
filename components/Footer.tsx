import appColors from '../constants/appColors'

const Footer: React.FC = () => {
  return (
    <div
      className="text-center py-5 text-white text-xs font-semibold tracking-wide"
      style={{ backgroundColor: appColors.gray1 }}
    >
      Made by tim Aksi Peduli #temanhijrah 🇲🇨
    </div>
  )
}

export default Footer
