
import Image from 'next/image'
import blogBg from "../../assets/images/blog-bg.png";
import Link from 'next/link';

const PageTopSection = ({title, subTitle}) => {
  return (
    <section className='relative py-16'>
      <Image
        src={blogBg}
        className="w-full z-[-1] h-full absolute top-[50%] object-cover translate-y-[-50%]"
        priority
        alt=""
      />
      <div className='container text-center mx-auto px-4'>
        <ul className='flex justify-center'>
          <li><Link href="/" className='inline-block mr-3'>Home</Link> <span className='inline-block mr-4'>&gt;</span> </li>
          <li><Link href="#" className='opa opacity-75'>Contact</Link></li>
        </ul>
        <h1 className='mb-4'>{title}</h1>
        <p>{subTitle}</p>
      </div>
    </section>
  )
}

export default PageTopSection