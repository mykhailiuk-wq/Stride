// vite-project\web\components\CustomInput.jsx

export default function CustomInput({inputType, placeholderText, value, name, onChange}){
  return (
    <>
      <input 
      type={inputType} 
      placeholder={placeholderText} 
      value={value} 
      onChange={onChange}
      name={name}
      className="border-gray-400 border rounded-md px-4 py-2 w-full max-w-xs outline-none focus:border-blue-500"
      />
    </>
  )
}