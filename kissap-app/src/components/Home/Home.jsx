import React from 'react'


import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className=" w-full max-w-full ">
            <aside className="relative bg-black overflow-hidden text-white  h-full w-full  ">
                <div className="relative z-10 max-w-screen-xl px-4     ">
                    <div className="max-w-xl h-full sm:mt-1  space-y-8 text-center sm:text-right sm:ml-auto">
                        <h6 className="text-xl font-bold  mt-10 border-indigo-500 ">
                        Discover a dynamic collection of apps crafted by our team. Each application is a testament to our commitment to 
                        solving real-world problems through cutting-edge technology.
                            
                        </h6>

                        
                    </div>
                </div>

                <div className="absolute top-0 left-24 w-full sm:my-20 sm:pt-1 pt-12 h-full  ">
                    <img className="object-cover h-36 w-36 border-2 rounded-full" 
                    src="./pic1.png" alt="image1" />
                </div>
                <div className="absolute top-10  w-full sm:my-20 sm:pt-1 pt-12 h-full  ">
                    <img className="object-cover h-36 w-36 border-2 rounded-full" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpZEneLh1WL_0kpeQEvbvHipkPx22W2hKMg&s" alt="image1" />
                </div>
                <div className="absolute  top-20 left-40  sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="object-cover h-36 w-36 border-2 rounded-full" 
                    src="https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg" alt="image1" />
                </div>

                           
                <div className=' relative flex   h-auto  mt-24  justify-around  '>
                
                <div className=' w-2/5'>
                        <h1 className=" mt-16 text-4xl text-green-500 font-bold ">kissan app</h1>
                        <p className='text-lg mt-5  '>Empower farmers with Kissan! 
                            Our app offers a comprehensive solution for agricultural challenges.
                             Rent essential tools effortlessly, diagnose crop 
                             diseases instantly using AI, and access a vast knowledge base on 
                             common crop ailments and their cures. Suggesting Pesticide store near you and many more.</p>
                       <Link
                            className="inline-flex mt-9 ml-80  text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                </div>

                <div className='flex  w-2/5 h-auto    justify-between'>
                <div className="relative ">
                    <img className="object-contain h-72 w-40  mt-14 " 
                    src="https://s3-alpha-sig.figma.com/img/9a32/0064/68f4b61d3750bb42069b4b1db6fc97ff?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pQag-rJlxLlrN3YisViW-OvOCcJoYIAKKWnTtH0~VOQm6GvYqiadvCdBd4d6J2kMKn6hblhdOgf8~etDS~qXfBVgNecvTmb8DV1NoIsLGl1ElLGuZMdror7tyjSdiXujGW3VXcFF3VMXePZNom-GppNvMo6ZcgonPlE8NRIcazWtvrKrT00ohZqfYwI8Jbod8PnsO3NJ7se49ivOF1LohCpPslxQ292tK8aMIwBaXzJHCDymTlZKDvjUvq2HWTcXPFVnHuJ4xjv~fUZ1ridT7xfqyVKp~t7sI9k~QC9Wvt5JgyDqVqxFfLPQOH89obuRwxtGzYyyZ-m1ZI5AkM9fWw__" alt="image1" />
                </div>
                <div className="relative   ">
                <img className="object-contain h-72 w-40 "
                 src="https://s3-alpha-sig.figma.com/img/8c8b/dd66/552dd10545e32e52b3a61a8539f7be7e?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qd2A6ACNeJAXXnUNNEPh3oNmbR2ZIvQTcKk1tge~q1xIqeGWJGVaONc4OsVmO~wpoL3Q40HpqmvdSO68BMgMjBgbbu1CRH7YNorp3euKXjX76lwKKOeXM7PYNBnxgBlqgpfAciaju59LigUGqRi1rqDb0ZWq9BxAYOqLzU88si-ynmw0gZdIZv3ojL4yw00RqBJhiZfJWsosIXcTk41goL9dTYAkFM~5ZhcoslwD1msEC8zzOPUzxv-CTLRBU-Mk2IEQJSF338t30v5i1ibwz8eAyMfQ2uXhn-ye-6C672Vdh2FdIvmnFvdBEGlFFCAQYAsAp5~hQLnfcKfhlcoNzg__" alt="image1" />
                </div>
                <div className="relative  ">
                <img className="object-contain h-72 w-40  mt-14"
                 src="https://s3-alpha-sig.figma.com/img/aed8/3326/2f5c0320c101bcc46a71d9228d5089e6?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iD3ljR~HiGSQPByXHEPZKRYHg-jlilRnx-O3UTkWVoH5R01AeNMV7OVV0BYuLWBDdNLYc2PAkLx6wg4KIoOtdYHUOunFDscvtMDnL-UPJLZf2nJKvMQV-iyb7f~pwi9eYofzHGDWr22Ad6LHW-tkCklvJPZmUbsPn~uqOx83C9maQiLvilRjJS5TjGAh7E-m0RHrdD7-QjX3mNGmR6Hgkkk-7DvtvOWoRHpihkoHTrClpGfXRKtl~qwNMJpKBC8hqb-YzvkTgqmJSwccoPAjeB4cUS34LAIObMJt3j66eVBnLV2nT-JPWC0TbSl7i-f4WyRgfNCj-7hgBx2FFfd4-w__" alt="image1" />
                </div>
                </div>
                </div>

            
            </aside>

           
        </div>
    );
}
