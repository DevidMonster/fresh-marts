type Props = {
   screen?: 'large' | 'medium';
};
const Loading = ({ screen }: Props) => {
   return (
      <div className={`w-full flex justify-center items-center  ${screen === 'large' ? 'min-h-[500px]' : 'h-full'}`}>
         <div
            className=' text-hightLigh flex justify-center items-center inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
            role='status'
         >
            <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
               Loading...
            </span>
         </div>
      </div>
   );
};

export default Loading;