import React from 'react'
import { useForm } from 'react-hook-form';

const FormHooks = () => {

     const { register, handleSubmit, watch, formState: { errors } } = useForm();

   const onSubmit = (data) => {
    console.log(data)
   }

  return (
    <>
      <div className='flex justify-center items-center mt-20 text-black'>
   <form onSubmit={handleSubmit(onSubmit)} class="bg-white p-6 rounded shadow-md w-96 space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">First Name</label>
      <input name='firstName' {...register('firstName', {required: true, minLength: 3, message:'minimum 3 required'})} type="text" class="mt-1 block w-full border border-gray-300 p-2 rounded" />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Middle Name</label>
      <input name='middleName' {...register('middleName', {required: true, minLength: 3, message:'minimum 3 required'})} type="text" class="mt-1 block w-full border border-gray-300 p-2 rounded" />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Last Name</label>
      <input name='LastName' {...register('LastName', {required: true, minLength: 3, message:'minimum 3 required'})} type="text" class="mt-1 block w-full border border-gray-300 p-2 rounded" />
    </div>

    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Submit
    </button>
  </form>
   </div>

    </>
  )
}

export default FormHooks
