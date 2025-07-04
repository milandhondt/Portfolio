import Spacer from '../Spacer';
import CustomButton from '../General Components/CustomButton';

const ContactSection = () => {
  return (
    <div>
      <div className="bg-[#F2F2F2] border rounded-2xl p-10 m-10 mb-0 text-center">
        <h1 className='text-5xl mb-4 font-semibold'>Extra info nodig?</h1>
        <p className='text-xl'>
          Ik ben altijd geïnteresseerd in nieuwe kansen of projecten. Heb je een vraag, wil je iets weten, of wil je samenwerken? Stuur mij gerust een berichtje!
        </p>
        <CustomButton text={"Contact"} to={"/contact"} />
      </div>
      <Spacer black={true} />
    </div>
  )
}

export default ContactSection;