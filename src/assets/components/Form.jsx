import { useForm } from '@formspree/react';

const Form = () => {
  const [state, handleSubmit] = useForm("mayrjrrd");
  if (state.succeeded) {
      return <p>Thanks for contacting me!</p>;
  }
 

  

  return (
    <main className="p-3 bg-c-1/90 dark:bg-d-1
     rounded-2xl">
      <section>
        
        <form onSubmit={handleSubmit} name="contact"  className="flex flex-col gap-2 
        p-3 text-c-4  font-medium" method="POST" data-netlify="true">
          <p>Name</p>
          <input
            className="rounded-md p-1 text-c-1 dark:text-d-1 font-normal"
            name="name"
            type="text"
            
          />
          
          

          <p>Email</p>
          <input
            className="rounded-md text-c-1 dark:text-d-1 p-1 font-normal" 
            name="mail"
            type="email"
          />
          

          <p>Message</p>
          <textarea
            className="rounded-md w-auto h-[100px] text-c-1 dark:text-d-1 p-1 font-normal overflow-hidden"

            name="Message"
            type="text"
          />
         
  



          <button  className="p-2 mt-8 m-3 hover:text-c-1  text-c-1  hover:bg-c-4 bg-c-3
          dark:hover:text-d-1  dark:text-d-1  dark:hover:bg-d-4 dark:bg-d-3 
          rounded-xl" type="submit">Send</button>
        </form>
      </section>
    </main>
  )
}
export default Form