import React from 'react';


const InputForm = ({register,error,id,label,...inputprops}) =>

{
    return<>
       <label htmlFor={id}>{label}</label>
       <input
          ref={register}
          id={id}
          {...inputprops}
       
       />
       {error && <div>{error.message}</div>}
    </>
}


export default InputForm;