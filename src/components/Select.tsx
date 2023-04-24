import React from "react";
function Select({
  options,
  label,
  selectLabel,
}: {
  options: string[];
  label: string;
  selectLabel: string;
}) {
  return (
    <>
      <label htmlFor="currency" className="form-label">
        {label}
      </label>
      <select id="country" className="select2 form-select">
        <option value="">{selectLabel}</option>
        {options.map((opt: string) => {
          return (
            <option style={{ textTransform: "capitalize" }} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </>
  );
}
export default Select;
