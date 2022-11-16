interface SelectProps {
  
}
const Select: React.FC<any> = () => {
  return <>
    <label>Choose</label>
    <select >
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  </>
};

export default Select;