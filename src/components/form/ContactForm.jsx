import React, { useRef }  from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


const ContactForm = () => {
const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ou6wp0n', 'template_yue7ujf', form.current, {
        publicKey: 'IXYu3jq_csIWLo-uB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const notify = () => toast.success('Su email a sido enviado correctamente!',{
    style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
    }
  });



return (
    <form ref={form} onSubmit={sendEmail} class="text-gray-400 body-font relative">
        <div class="container px-5 py-14 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Me</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Por alguna consulta o duda, no dudes en contactarme</p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
                <div class="flex flex-wrap -m-2">
                    <div class="p-2 w-1/2">
                        <div class="relative">
                            <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
                            <input type="text" id="name" name="user_name" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                    </div>
                    <div class="p-2 w-1/2">
                        <div class="relative">
                            <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                            <input type="email" id="email" name="user_email" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                    </div>
                    <div class="p-2 w-full">
                        <div class="relative">
                            <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
                            <textarea id="message" name="message" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                    </div>
                    <div class="p-2 w-full">
                        <button onClick={notify} type="submit" value="Send" class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enviar</button>
                        <Toaster/>
                    </div>    
                </div>
            </div>
        </div>
    </form>
  )
}

export default ContactForm