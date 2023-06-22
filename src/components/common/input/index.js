import style from './input.module.css'

const Input=({
    type='text',
    placeholder='',
    styleInput,
    styleLabel,
    onChange,
    title='',
    value=''
})=>{

    return(
        <>
        <div className={style.container}>
        {title && <label>{title}</label>}
        <input type={type} placeholder={placeholder} onChange={onChange} value={value}/>
        </div>
        </>
    )
}

export default Input;