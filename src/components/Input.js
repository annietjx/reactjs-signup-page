import './Input.css';

const Input = ({ type, placeholder }) => {
    return (
        <div class = 'InputContainer'>
            <input 
            placeholder = {placeholder && placeholder} 
            type={type ? type : 'text'}
            required
            autoComplete='off' 
            />
            <div class = 'Status' />
        </div>
    );
}

export default Input;