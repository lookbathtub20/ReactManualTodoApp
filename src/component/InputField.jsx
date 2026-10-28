function InputField({ value, onChange, ariaLabel }) {
  return (
    <input type="text" aria-label={ariaLabel} value={value} onChange={onChange} />
  );
}
export default InputField;