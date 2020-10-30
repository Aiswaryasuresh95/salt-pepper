import React  from 'react';
import './signin-styles.scss';
import InputForm from '../../components/inputform-component';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import CoustomButton from '../../components/button/coustom-button';


const SignIn = () => {
    
    const {register,handleSubmit,errors} = useForm({
        
        mode: 'onBlur',
        validationSchema: yup.object({
          login: yup.string()
          .test('len', 'Must be exactly 5 characters', val => val.length === 5)
        
        }),
      })


    const onSubmit = ({login}) =>
    {
        alert(`name: ${login}`);

    }

    return(
        <div className="container">
            <div className="box1">
                <div className="para1"></div>
                <h1>Register</h1>
                <p>Enjoy Fresh Meals</p>
            </div>

            <div className="box2">
               <formatMs>
                   <InputForm
                    id="login"
                    name="login"
                    type="text"
                    label="Login"
                    register={register}
                    error={errors.login}

                   />
                   {errors.login && <div>{errors.login.message}</div>}
                   <CoustomButton onClick={handleSubmit(onSubmit)}/>
                    <button type="submit">Log in</button>

               </form>
            </div>
         </div>
    )

}

export default SignIn;